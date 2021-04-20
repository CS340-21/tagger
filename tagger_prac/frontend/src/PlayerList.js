import React, { Component } from "react";
import PlayerModal from "./components/PlayerModal";
import axios from "axios";
import { Link } from "react-router-dom";

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerList: [],
      modal: false,
      activeItem: {
        player_name: "",
        player_number: "",
        roster_set: [],
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/tagger/api/player/")
      .then((res) => this.setState({ playerList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/tagger/api/player/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post(`/tagger/api/player/`, item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/tagger/api/player/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { player_name: "", player_number: "", roster_set: [], };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const newItems = this.state.playerList

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`player-name mr-2`}
          title={item.player_name}
        >
          {item.player_name}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            View
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add Player
                </button>
              </div>
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        <Link to="/">
          <button>
            Back
          </button>
        </Link>
        {this.state.modal ? (
          <PlayerModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default PlayerList;
