// const root = document.getElementById("root");
// console.log(root);
// import React from "react";
const heading1 = React.createElement("h1", {
    id: "title1",
    key: "key1"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id: "title2",
    key: "key2"
}, "Heading2");
const containerDiv = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
console.log(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(containerDiv);

//# sourceMappingURL=index.6bd02f5a.js.map
