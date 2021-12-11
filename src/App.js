import './App.css';
//import titleImg from './Resources/images/title_img.jpg';
import portraitImg from './Resources/images/portrait_img.png';

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <div>
          <img src={portraitImg} className="App-img" alt="me" />
        </div>
        <div> 
          <div className="App-title">
            <h4>Hello there!</h4>
            <h1>I'm Maximilian Ranger</h1>
            <h2>software engineer</h2>
          </div>
          <div>
            <p
              className="App-link"
              // link to tag #about-me
            >
              About me
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
