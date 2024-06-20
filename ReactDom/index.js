const courses = [
  { name: "javascript", price: 100 },
  { name: "reactJS", price: 150 },
  { name: "react native", price: 200 },
  { name: "nodeJS", price: 250 },
  { name: "expressJS", price: 300 },
  { name: "mongodb", price: 350 },
];

let header = <h1>Khóa học lập trình</h1>;

const postItem = (
  <ul>
    {courses.map((course, index) => (
      <li key={index}>{course.name}</li>
    ))}
  </ul>
);

// get root element
const container = document.getElementById("root");

// React-DOM -> render UI
// react @17
// ReactDOM.render(postItem, root);

// react @18
const root = ReactDOM.createRoot(container);
root.render(
  <React.Fragment>
    {header}
    {postItem}
  </React.Fragment>
);

// const getMessage = () => "Hello World";
// document.getElementById("output").innerHTML = getMessage();

console.log(postItem);
