import React from "react";
import { useState } from "react";

export default function Square({value, onSquareClick}) {
    // const [value, setValue] = useState(null);
    // function handleClick(){
    //     setValue("x")
    //   }
    return <button className="square"
    onClick={onSquareClick}>{value}</button>;
  }