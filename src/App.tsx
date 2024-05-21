import React, { useState } from "react";
import "./App.css";

import { Wheel } from "react-custom-roulette";
import {
  Button,
  Form,
  OverlayTrigger,
  Toast,
  ToastContainer,
  Tooltip,
  TooltipProps,
} from "react-bootstrap";

let dataDefault = [
  { option: "REACT" },
  { option: "CUSTOM" },
  { option: "ROULETTE", style: { textColor: "#f9dd50" } },
  { option: "WHEEL" },
  { option: "REACT" },
  { option: "CUSTOM" },
  { option: "ROULETTE", style: { textColor: "#70bbe0" } },
  { option: "WHEEL" },
];

const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#cbf1f8';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#cbf1f8';
const radiusLineWidth = 8;
const fontFamily = "Nunito";
const fontWeight = "bold";
const fontSize = 20;
const fontStyle = "normal";
const textDistance = 60;
const spinDuration = 1.0;

export interface FileUploadProps {
  onChange?: (files: Array<File>) => void;
  maxFileSize?: number;
  // need to add optional file description. user may want to add description to go with file.
  value?: Array<File>;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
  accept?: string;
  maxFileCount?: number;
}

const App: React.FunctionComponent<FileUploadProps> = ({
  onChange,
  maxFileSize,
  value,
  accept,
  maxFileCount,
}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState("");
  const [list, setList] = useState(value || []);
  const [data, setData] = useState(dataDefault);

  const uploadDataImgToSpin = () => {
    list.map((item, i) => {
      console.log(item);
    
    });
    setData(list.map((item, i) => {
      return { option: item.name , image: { uri: URL.createObjectURL(item) }, };
    }))
  }

  const rerender = () => {
    // see https://stackoverflow.com/a/67354136/147530
    // for why we need to use slice
    setList(list.slice());
    // using the pattern here: https://stackoverflow.com/a/70443467/147530
    // it is the simplest thing to do and it works
    onChange && onChange(list);
  };

  const handleUp = (e: any, i: number) => {
    const temp = list[i];
    list[i] = list[i - 1];
    list[i - 1] = temp;
    rerender();
  };

  const handleDown = (e: any, i: number) => {
    const temp = list[i];
    list[i] = list[i + 1];
    list[i + 1] = temp;
    rerender();
  };

  const handleDelete = (e: any, i: number) => {
    list.splice(i, 1);
    rerender();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.currentTarget.files;
    if (files) {
      for (var i = 0; i < files.length; i++) {
        // use file.arrayBuffer() to read the file
        // https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer
        // While similar to the FileReader.readAsArrayBuffer() method, arrayBuffer() returns a promise rather than being an event-based API, as is the case with the FileReader interface's method.
        // there is also the stream method: https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream
        list.push(files[i]);
      }
      rerender();
    }
  };

  // https://www.pluralsight.com/guides/how-to-display-tooltip-in-react-bootstrap
  const renderTooltip = (
    props: JSX.IntrinsicAttributes &
      TooltipProps &
      React.RefAttributes<HTMLDivElement>
  ) => <Tooltip {...props}>File exceeds maximum allowable size</Tooltip>;

  const validate = (file: File) => {
    // see https://www.toptal.com/designers/htmlarrows/arrows/ for unicode for html symbols
    if (maxFileSize && maxFileSize > 0 && file.size > maxFileSize) {
      return (
        <OverlayTrigger placement="top" overlay={renderTooltip}>
          <span>{String.fromCharCode(9888)}</span>
        </OverlayTrigger>
      );
    }
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleResult = () => {
    console.log("handleResult");
    console.log(data[prizeNumber].option);
    setShow(true);
    setResult(data[prizeNumber].option);
  };

  return (
    <div className="App">
      <ToastContainer
        className="p-3"
        position={"middle-center"}
        style={{ zIndex: 1000000 }}
      >
        <Toast onClose={() => setShow(false)} show={show} autohide>
          <Toast.Header>
            <strong className="me-auto font-style">Congratulations</strong>
          </Toast.Header>
          <Toast.Body>
            <div className="font-style">Woohoo, you're reciept {result}!</div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <header className="App-header">
        <div className={"parent-container"}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            spinDuration={spinDuration}
            startingOptionIndex={2}
            // perpendicularText
            textDistance={textDistance}
            onStopSpinning={() => {
              setMustSpin(false);
              handleResult();
            }}
          />
          <Button variant="info" className={"spin-button"} onClick={handleSpinClick}>
            SPIN
          </Button>

          <div className="row padding-top-150 style-unset">
            <Form.Group controlId="formFile" className="mb-3 text-left style-unset col-8">
              <Form.Label>Upload img</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                accept={accept}
                type="file"
              />
            </Form.Group>

            <Button variant="outline-dark" className="col-4 button-container" onClick={uploadDataImgToSpin}>Up to spin</Button>
          </div>
          {list.map((item, i) => {
            // the keys are there to take care of react warning otherwise
            return (
              <div className="style-unset" key={i}>
                <div className="text-left row" key={i + ":#"}>
                  <span className="font-size-14 text-left text-overflow-eclip col-9 align-self-center">
                    {i + 1} - {item.name} - {item.size} - {item.type}{" "}
                  </span>
                  <div className="col-3">
                  {i > 0 ? (
                    <Button
                      key={i + ":up"}
                      className="margin-right-20"
                      variant="dark" size="sm"
                      onClick={(e) => handleUp(e, i)}
                    >
                      {String.fromCharCode(8593)}
                    </Button>
                  ) : null}
                  {i < list.length - 1 ? (
                    <Button
                      key={i + ":down"}
                      className="margin-right-20"
                      variant="dark" size="sm"
                      onClick={(e) => handleDown(e, i)}
                    >
                      {String.fromCharCode(8595)}
                    </Button>
                  ) : null}
                  <Button
                    key={i + ":del"}
                    variant="danger" size="sm"
                    onClick={(e) => handleDelete(e, i)}
                  > {String.fromCharCode(120)}</Button>
                  {validate(item)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </header>
      <div
        style={{ display: show ? "block" : "none" }}
        className="firework"
      ></div>
      <div
        style={{ display: show ? "block" : "none" }}
        className="firework"
      ></div>
      <div
        style={{ display: show ? "block" : "none" }}
        className="firework"
      ></div>
    </div>
  );
};

export default App;
