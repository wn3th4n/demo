import ReactDOM from "react-dom/client";
import { useState } from "react";

## Destructuring

To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed.

```js
const vehicles = ["mustang", "f-150", "expedition"];

const [car, truck, suv] = vehicles;
```

more

```js
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
```

## Spread

The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

basic example

```js
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
```

## Tagged template literal

## Modules

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

ES Modules rely on the **import** and **export** statements.

```js
export const name = "Jesse";
export const age = 40;
export { name, age };
```

### default export

Let us create another file, named message.js, and use it for demonstrating default export.

You can only have one default export in a file.

```js
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + "years old.";
};

export default message;
```

### Import

You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports must be destructured using curly braces. Default exports do not.

## Ternary Operator

The ternary operator is a simplified conditional operator like **if / else.**

> syntax: **condition ? true : false**

here is example using **if/else**

```js
authenticated ? renderApp() : renderLogin();
```

### React Render Html

The render() method is then called to define the React component that should be rendered.

```jsx
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);
```

The result is displayed in the div have id root:

```html
<body>
  <div id="root"></div>
</body>
```

### why coding JSX

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.

JSX converts HTML tags into react elements.

> You are not required to use JSX, but JSX makes it easier to write React applications.

Here are two examples. The first uses JSX and the second does not:

```jsx
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);
```

### Conditions - if statements

React supports if statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

Option 1:
Write if statements outside of the JSX code:

```jsx
const x = 5;

const myElement = <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>;
```

## Component

When creating a React component, the component's name MUST start with an upper case letter.

### Class Component

A class component must include the **extends React.Component** statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a **render()** method, this method returns HTML.

#### Create a Class component called Car

```jsx
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

### Function Component

Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

```jsx
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

### Rendering component

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);
```

## Props

Props are used to pass data from one component to another.

Props are passed to a component using the **props** keyword.

```jsx
function Car(props) {
  return <h2>I am a {props.brand}</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car brand="Fd" />);
```

## Events

Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover etc.

### Adding Events

React events are written in camelCase syntax:

**onClick** instead of **onclick**.

React event handlers are written inside curly braces:

**onClick={shoot}** instead of **onclick="shoot()"**.

```jsx
<button onClick={shoot}>Take the Shot!</button>
```

### Passing Arguments

```jsx
function Football() {
  const shoot = (a) => {
    alert(a);
  };

  return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
```

### React Event Object

Event handlers have access to the React event that triggered the function.

In our example the event is the "click" event.

```jsx
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
```

## React Conditionals

```jsx
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}
```

Now, we'll create another component that chooses which component to render based on a condition:

```jsx
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={false} />);
```

Try changing the isGoal **attribute** to **true**:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={true} />);
```

## React list

```jsx
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
```

### Keys

Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys need to be unique to each sibling. But they can be duplicated globally.

```jsx
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
```

## React Form

You add a form with React like any other element:

```jsx
function MyForm() {
  return (
    <form>
      <label>
        Enter your name:
        <input type="text" />
      </label>
    </form>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
```

### handling forms

Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM.

In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the **onChange** attribute.

We can use the **useState** Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

```jsx
function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
```

## React Router

Create React App doesn't include page routing.

React Router is the most popular solution.

### Add React Router

```npm
npm i -D react-router-dom
```

or
```npm
npm i -D react-router-dom@latest
```

### basic router

```jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
