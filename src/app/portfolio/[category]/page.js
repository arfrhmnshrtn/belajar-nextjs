import React from "react";
import items from "./data.js";

function getData(cat) {
  const data = items.cat;
  // console.log(data)
  if (data) {
    return data;
  }
  return "Not Found";
}

export default function Category({ params }) {
  const data = getData(params.category);
  // console.log(data)
  return <h1>{params.category}</h1>;
}
