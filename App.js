import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Nested Heading"),
    React.createElement("h2", {}, "Nested H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Nested Heading"),
    React.createElement("h2", {}, "Nested H2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
