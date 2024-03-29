import React, { Component } from "react";
import RosterModal from "./components/RosterModal";
import axios from "axios";
import { Link } from "react-router-dom";

class RosterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rosterList: [],
      modal: false,
      activeItem: {
        id: 0,
        roster_name: "",
        num_players: "",
        player_set: [],
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/tagger/api/rosters/")
      .then((res) => this.setState({ rosterList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/tagger/api/rosters/${item.id}/`, item)
        .then((res) => this.refreshList());

      /*this.setState({ id: item.id });
      item.player_set.map((p) => (
        p.roster_set.concat(item.id)
      ));*/
      return;
    }
    axios
      .post(`/tagger/api/rosters/`, item)
      .then((res) => this.refreshList());

    /*this.setState({ id: item.id });
    item.player_set.map((p) => (
      p.roster_set.concat(item.id)
    ));*/
  };

  handleDelete = (item) => {
    axios
      .delete(`/tagger/api/rosters/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { roster_name: "", num_players: "", player_set: [], };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const newItems = this.state.rosterList

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`roster-name mr-2`}
          title={item.num_players}
        >
          {item.roster_name}
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
                  Add Roster
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
          <RosterModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>

    );
  }
}

export default RosterList;
