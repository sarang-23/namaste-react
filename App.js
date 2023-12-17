import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title></Title>
      {Title()}
      <h1 id="heading">Heading from react component</h1>
    </div>
  );
};

const Title = () => <h1 className="heading">Namaste React</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
