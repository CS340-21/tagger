import Button from 'react-bootstrap/Button';
import GameModal from "./components/GameModal";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tagger from "./Tagger"

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: [],
      modal: false,
      activeItem: {
        id: 0,
        game_title: "",
        team1: 0,
        team2: 0,
        pitch_set: []
      },
    };
  }

  refreshList = () => {
    axios
      .get("/tagger/api/game/")
      .then((res) => this.setState({ gameList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  new_game = () => {
    this.setState({modal: !this.state.modal});
    return;
  }

  create_game = () => {
    return;
  }

  handleSubmit = async(item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/tagger/api/game/${item.id}/`, item)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err));
      return;
    }
    /*axios
      .post(`/tagger/api/game/`, item)
      .then((res) => this.refreshList())
      .catch((err) => console.log(err));*/
    const res = await axios.post(`/tagger/api/game/`, item);
    const activeItem = { ...this.state.activeItem,
                          id: res.data.id};
    this.setState({activeItem});
    console.log(this.state.activeItem.id);
    this.render();
    //push the redirect

  };

  render(){
    return(
      <div>
        <div>
          <Button
            className="new_game"
            onClick={this.new_game}
          >
            New Game
          </Button>
          {' '}
          <Button
            className="cont_game"
            onClick={this.cont_game}
          >
            Continue Game
          </Button>
        </div>
        {this.state.modal ? (
          <GameModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}

      <div>
        <Tagger
          activeItem={this.state.activeItem}
        />
      </div>
    </div>
    );
  }
}

export default CreateGame;
