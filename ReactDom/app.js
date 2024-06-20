const Header = () => {
  return (
    <header>
      <h1>My React App</h1>
    </header>
  );
};

class MainContent extends React.Component {
  render() {
    <div className="content">Content</div>;
  }
}

const app = (
  <div className="wrapper">
    <Header></Header>
    <MainContent></MainContent>
    <footer>
      <p>Copyright 2021</p>
    </footer>
  </div>
);

const root = document.getElementById("root");
