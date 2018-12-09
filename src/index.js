import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails/CommentDetails";
import ApprovalCard from "./Card/ApprovalCard";

import "./styles.css";

const App = () => {
  const obj = {
    amountOfCards: 4,
    date: ["2016", "2017", "2018", "2018"],
    text: [
      "My blog post",
      "Another blog post",
      "Loren blog post",
      "Just another blog post"
    ]
  };
  const result = ({ amountOfCards, date, text }) => {
    const arg = [];
    for (let i = 0; i < amountOfCards; i++) {
      arg.push(
        <ApprovalCard>
          <CommentDetail date={date[i]} text={text[i]} />
        </ApprovalCard>
      );
    }
    return arg;
  };
  return <div className="ui container comments">{result(obj)}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
