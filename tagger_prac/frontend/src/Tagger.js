import Button from 'react-bootstrap/Button';
import React, { Component, useEffect } from "react";
import axios from "axios";
import baseballField from './Baseball_diamond_clean.svg'
import icon from './Yellow_icon.svg'
import './Tagger.css';

class Tagger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: [],
      pitchList: [],
      game_title: "",
      id: [],
      modal: false,
      activeItem: this.props.activeItem,
    };
  }

  componentDidMount(){
    //this.setState({ game_title: this.state.activeItem.game_title });
    console.log(this.state.activeItem.game_title);
  };

  render(){
    return (
      <div class="App fullheight" id="tagginginterface">
        <header>
          <span class="gameTitle">{this.state.game_title}</span> <span class="date">Date</span>
        </header>
        <div class="Content fullheight">
          <div class="lineup fullheight">
            <Lineup />
          </div>
          <div class="tagging fullheight">
            <Tagging
            activeItem = {this.state.activeItem}/>
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
      gameList: [],
      pitchList: [],
      game_title: "",
      id: [],
      modal: false,
      activeItem: this.props.activeItem,
    };
  }

  get_recent = () => {
    this.state.id = this.state.gameList[this.state.gameList.length-1].id;
  }

  componentDidMount(){
    this.get_game();
    this.refreshList();
  };

  refreshList = () => {
    axios
      .get("/tagger/api/pitch/")
      .then((res) => this.setState({ pitchList: res.data }))
      .catch((err) => console.log(err));

    //console.log(this.state.pitchList);
  };

  get_game = () => {
    axios
      .get("/tagger/api/game/")
      .then((res) => this.setState({ gameList: res.data }))
      .catch((err) => console.log(err));

    this.state.gameList.map((g) => (
      this.get_game_fields(g.id)
    ));

    //this.get_recent();
    //console.log(this.state.gameList);
    //this.state.game_title = this.state.gameList[this.state.gameList.length-1].game_title;
  }

  get_game_fields = (g) => {
    axios
      .get(`/tagger/api/game/${g}`)
      .then((res) => console.log(res.data));
  }

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
                    pitch_number: 5,
                    game: 1
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
            {this.state.game_title}
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
