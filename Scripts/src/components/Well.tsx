import * as React from "react";
import { useState } from 'react';

function Well() {

  const [input, setInput] = useState('0.1');
  const [input2, setInput2] = useState('0.2');
  const [input3, setInput3] = useState('0.1');
  const [input4, setInput4] = useState('0.3');
  const [input5, setInput5] = useState('0.4');
  const [input6, setInput6] = useState('0.2');
  const [input7, setInput7] = useState('0.5');
  const [input8, setInput8] = useState('0.2');

  return (
    <div>
      <p>Input value is {input} {input2}</p>
      <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e) => setInput(e.target.value)} defaultValue={input}></input>
      <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e) => setInput2(e.target.value)} defaultValue={input2}></input>
      <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e) => setInput3(e.target.value)} defaultValue={input3}></input>
      <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e) => setInput4(e.target.value)} defaultValue={input4}></input>
      <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e) => setInput5(e.target.value)} defaultValue={input5}></input>
      <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e) => setInput6(e.target.value)} defaultValue={input6}></input>
      <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e) => setInput7(e.target.value)} defaultValue={input7}></input>
      <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e) => setInput8(e.target.value)} defaultValue={input8}></input>
    </div>
  );
}

export default Well;