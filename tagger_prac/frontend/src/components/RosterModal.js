import React, { Component } from "react";
import axios from "axios"
import Dropdown from 'react-bootstrap/Dropdown';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class RosterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerList: [],
      player_name_list: [],
      activeItem: this.props.activeItem,
    };
  }

  componentDidMount() {
    //console.log("hello");
    this.refreshList();

    this.state.activeItem.player_set.map((r) => (
      this.getPlayerName(r)
    ));
  }

  refreshList = () => {
    axios
      .get("/tagger/api/player/")
      .then((res) => this.setState({ playerList: res.data }))
      .catch((err) => console.log(err));
  };

  refresh_name_list = () => {
    this.state.activeItem.player_set.map((r) => (
      this.getPlayerName(r)
    ));
  }

  // updates the rosterList to be rendered
  getPlayerName = (p) => {
    axios
      .get(`/tagger/api/player/${p}`)
      .then((res) => this.setState({ player_name_list: [...this.state.player_name_list, res.data.player_name] }));
  };
/*
  renderNames = () => {
    const namesList = this.state.playerList;

    return namesList.map((name) => (
      <li>{name}</li>
    ));
  }*/

  /*handleSubmit = (item) => {
    if (item.id) {
      axios
        .put(`/tagger/api/rosters/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post(`/tagger/api/rosters/`, item)
      .then((res) => this.refreshList());
  };*/

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  new_player = (item) => {
    const activeItem = {
      ...this.state.activeItem,
      player_set: [...this.state.activeItem.player_set, item.id]
    };

    this.setState({ activeItem });

    //this.handleSubmit(this.state.activeItem);

    this.setState({ player_name_list: [...this.state.player_name_list, item.player_name] });
  }

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Roster List</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="roster-name">Name</Label>
              <Input
                type="text"
                id="roster-name"
                name="roster_name"
                value={this.state.activeItem.roster_name}
                onChange={this.handleChange}
                placeholder="Enter Roster Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="roster-num_players">Number of Players</Label>
              <Input
                type="text"
                id="roster-num_players"
                name="num_players"
                value={this.state.activeItem.num_players}
                onChange={this.handleChange}
                placeholder="Enter Number of Players"
              />
            </FormGroup>
          </Form>
          <div>
            <p>Players</p>
            {this.state.player_name_list.map((item) => (
              <li> {item} </li>
            ))}
          </div>
          <br></br>
          <Label for="player-list">Add player</Label>
          <Dropdown id="player-list">
            <Dropdown.Toggle id="dropdown-basic">
              New Player
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.state.playerList.map((item) => (
                <Dropdown.Item
                onSelect={this.new_player.bind(this, item)}>
                {item.player_name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
