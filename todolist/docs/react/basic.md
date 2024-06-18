### React Render Html

The render() method is then called to define the React component that should be rendered.

```jsx
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

## Props

Props are used to pass data from one component to another.

Props are passed to a component using the **props** keyword.

```jsx
function Car(props) {
  return <h2>I am a {props.brand}</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car brand="Ford" />);
```

### Props are immutable
