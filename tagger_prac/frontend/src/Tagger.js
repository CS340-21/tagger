import Button from 'react-bootstrap/Button';
import React, { Component, useEffect } from "react";
import axios from "axios";
import baseballField from './Baseball_diamond_clean.svg'
import icon from './Yellow_icon.svg'
import './Tagger.css';

class Tagger extends Component {
  render(){
    return (
      <div class="App fullheight" id="tagginginterface">
        <header>
          <span class="gameTitle">Game Title</span> <span class="date">Current date</span>
        </header>
        <div class="Content fullheight">
          <div class="lineup fullheight">
            <Lineup />
          </div>
          <div class="tagging fullheight">
            <Tagging />
          </div>
          {/*
          <div class="stats fullheight">
            <Stats />
          </div>
          */}
        </div>
      </div>
    );
  }
}

class Lineup extends Component{
  render(){
    return (
      <div> Lineup Goes Here </div>
    )
  }
}

class Tagging extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pitchList: [],
      modal: false,
      activeItem: {
        pitch_type: "",
        pitch_call: "",
        pitcher: "",
        batter: "",
        pitch_number: "",
        atBat: "",
      },
    };
  }

  refreshList = () => {
    axios
      .get("/tagger/api/pitch/")
      .then((res) => this.setState({ pitchList: res.data }))
      .catch((err) => console.log(err));
  };

  handleSubmit = (item) => {
    //this.toggle();

    if (item.id) {
      axios
        .put(`/tagger/api/pitch/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post(`/tagger/api/pitch/`, item)
      .then((res) => this.refreshList());
  };

  createBall = () => {
    const item = { pitch_type: "ball",
                    pitch_call: "2",
                    };

    this.setState({ activeItem: item, modal: !this.state.modal });

    this.handleSubmit(item);
  };

  render(){
    return(
      <div class="taggingwrapper fullheight">
        <div id="tagUpper">
          <img src={baseballField} id="taggingimage" alt="If you see this, reload the page"/>
        </div>
        <div id="taglower">
          <Button
            className="create_ball"
            onClick={this.createBall}
          >
            Ball
          </Button>
          {' '}
          <Button>
            Strike
          </Button>
          {' '}
          <Button>
            Foul
          </Button>
          {' '}
          <Button>
            Hit
          </Button>
        </div>
      </div>
    )
  }
}

class Stats extends Component{
  render(){
    return(
      <div>Stats Go Here</div>
    )
  }
}

export default Tagger;
