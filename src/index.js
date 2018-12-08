import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails/CommentDetails";

import "./styles.css";

const App = () => {
  return (
    <div>
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
