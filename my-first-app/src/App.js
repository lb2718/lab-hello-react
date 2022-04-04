import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="section1">
        <div className="icons">
          <img
            className="logo"
            src="../images/ironhack-logo-xs.png"
            alt="IH logo"
          ></img>
          <img
            className="menu"
            src="../images/menu-top-xs.png"
            alt="menu icon"
          ></img>
        </div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You'll learn how to use the most popular frontend library, and become
          a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>

      <div className="images">
        <img src="../images/icon1.png" alt="icon1"></img>
        <img src="../images/icon2.png" alt="icon2"></img>
        <img src="../images/icon3.png" alt="icon3"></img>
        <img src="../images/icon4.png" alt="icon4"></img>
      </div>
    </div>
  );
}

export default App;
