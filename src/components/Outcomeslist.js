import React, { Component } from 'react';
import config from '../config.js';
import load from '../helpers/spreadsheet.js'

class Outcomeslist extends Component {

  state = {
    outcomes: [],
    error: null
  }

  onLoad = (data, error) =>{
    console.log(data);
    if (data){
      const outcomes = data.outcomes;
      this.setState({ outcomes });
    }else {
      console.log(error);
      this.setState({ error });
    }
  };


  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
      // 3. Initialize and make the API request.
      load(this.onLoad);
    });
  };



  componentDidMount(){
    window.gapi.load("client", this.initClient);
  }




  render() {
  const { outcomes, error } = this.state;
  if (error) {
    return <div>error</div>;
  }
  return (
    // <section>

    <div className="board">
      {outcomes.map((outcome, i) => {
        console.log(outcome.program)

        return (<div key={i} className={`student ${outcome.program}`}>
          <h2>{outcome.student}</h2>
          <img src={outcome.studentimg}/>
          <ul>
          <li className="style">Role:{outcome.title}</li>
          <li className="style">Company: {outcome.company}</li>
          <li className="style">Admissions Producer: {outcome.admissionsproducer}</li>
          <li className="style">Instructional Team: {outcome.instructionalteam}</li>
          <li className="style">Career Coach: {outcome.careerCoach}</li>
          <li className="style">Quarter:{outcome.quarter}</li>
          <li className="style">Cohort: {outcome.location}</li>
          <li className="style">Immersive: {outcome.program}</li>
          </ul>
        </div>
      )})}
      </div>
    // </section>
  );
}
}

export default Outcomeslist;
