import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import resumeData from './resumeData';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Resume from './Components/Resume';

class App extends Component {

  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    resumeData: {}
  //  };
  //}

  //getResumeData() {
  //  $.ajax({
  //    url: '/resumeData.json',
  //    dataType: 'json',
  //    cache: false,
  //    success: function(data) {
  //      this.setState({resumeData: data});
  //    }.bind(this),
  //    error: function(xhr, status, err) {
  //      console.log(err);
  //      alert(err);
  //    }
  //  });
  //}

  //componentDidMount() {
  //  this.getResumeData();
  //}

  render() {
    return (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
