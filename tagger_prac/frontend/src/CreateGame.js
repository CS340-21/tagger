import Button from 'react-bootstrap/Button';
import GameModal from "./components/GameModal";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: [],
      modal: false,
      activeItem: {
        game_title: "",
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

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/tagger/api/game/${item.id}/`, item)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err));
      return;
    }
    axios
      .post(`/tagger/api/game/`, item)
      .then((res) => this.refreshList())
      .catch((err) => console.log(err));
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
      </div>

    );
  }
}

export default CreateGame;
