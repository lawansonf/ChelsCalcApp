import React, { useState, useEffect } from "react";
import "./styles.css";
import { TextField, Button } from "@material-ui/core";
import "./App.css";

export default function App() {
  const [courseWork, setCourseWork] = useState(0);
  const [courseValue, setCourseValue] = useState(0);
  const [examScore, setExamScore] = useState(0);
  const [examValue, setExamValue] = useState(0);

  const [courseTotal, setCourseTotal] = useState(0);
  const [examTotal, setExamTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const styling = {
    style: {
      fontSize: "larger",
      color: "blue",
      marginRight: "20px"
    }
  };

  const courseWorkHandler = e => {
    setCourseWork(e.target.value);
  };

  const valueWorkHandler = e => {
    setCourseValue(e.target.value);
  };

  const examScoreHandler = e => {
    setExamScore(e.target.value);
  };

  const examValueHandler = e => {
    setExamValue(e.target.value);
  };

  const calcTotals = () => {
    calcCourseTotal();
    calcExamTotal();
  };

  const calcCourseTotal = () => {
    const result =
      (parseFloat(courseWork, 10) / 100) * parseFloat(courseValue, 10);
    setCourseTotal(result.toFixed(2));
  };

  const calcExamTotal = () => {
    const result =
      (parseFloat(examScore, 10) / 100) * parseFloat(examValue, 10);
    setExamTotal(result.toFixed(2));
  };

  const calcGrandTotal = () => {
    const result = parseFloat(courseTotal, 10) + parseFloat(examTotal, 10);
    setGrandTotal(result);
  };

  useEffect(() => calcGrandTotal(), [examTotal, courseTotal]);

  return (
    <div className="App">
      <div className="top-box">
        <TextField
          type="number"
          InputProps={styling}
          value={courseWork}
          onChange={courseWorkHandler}
          label="course work"
        />
        <TextField
          type="number"
          InputProps={styling}
          value={courseValue}
          onChange={valueWorkHandler}
          label="value of work"
        />
        <div className="operator">=</div>
        <TextField
          InputProps={styling}
          value={courseTotal}
          label="total"
          variant="outlined"
        />
      </div>
      <div className="bottom-box">
        <TextField
          type="number"
          InputProps={styling}
          value={examScore}
          onChange={examScoreHandler}
          label="exam score"
        />
        <TextField
          type="number"
          InputProps={styling}
          value={examValue}
          onChange={examValueHandler}
          label="value of exam"
        />
        <div className="operator"> = </div>
        <TextField
          InputProps={styling}
          value={examTotal}
          label="total"
          variant="outlined"
        />
      </div>
      <div className="grand-total">
        <TextField
          type="number"
          InputProps={{
            style: {
              fontSize: "xx-large",
              color: "green"
            }
          }}
          value={grandTotal}
          variant="outlined"
          label="grand total"
          fullWidth
        />
      </div>
      <Button onClick={calcTotals}>Calculate</Button>
    </div>
  );
}
