import React, { Component } from "react";
import axios from "axios"


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
      activeItem: this.props.activeItem,
    };
  }

  componentDidMount() {
    //console.log("hello");
    this.state.activeItem.player_set.map((p) => (
      this.getPlayerName(p)
    ));
  }

  // updates the playerList to be rendered
  getPlayerName = (p) => {
    //this.setState(this.state.playerList, []);
    /*const promise = axios.get(`/tagger/api/player/${p}`)
    const data = promise.then((res) => res.data.player_name);
      //.then((res) => console.log(res.data.player_name));
      //.then((res) => this.setState({ nameList: res.data.player_name }));
      console.log(data);
    return;*/
    axios
      .get(`/tagger/api/player/${p}`)
      //.then((res) => console.log(res.data.player_name));
      .then((res) => this.setState({ playerList: [...this.state.playerList, res.data.player_name] })); // THANK YOU https://www.pluralsight.com/guides/add-data-into-an-array-in-a-state-object
    //console.log(this.state.playerList);
    /*return (axios
      .get(`/tagger/api/player/${p}`)
      //.then((res) => console.log(res.data.player_name));
      .then((res) => res.data)).toJSON().player_name;*/
  };

  /* create the li's with one function call
  getPlayerNames = (player_set) => {
    const ids = [21, 22];
    const promises = ids.map((p) =>
      axios
        .get(`/tagger/api/player/${p}`)
        .then((res) => res.data.player_name)
        .then((name) => name)
    );
    const names = promises.map((prom) =>
      prom
    );
    console.log(names);

    return names.map((name) =>
      <li>{name}</li>
    );
  }*/

  renderNames = () => {
    const namesList = this.state.playerList;

    return namesList.map((name) => (
      <li>{name}</li>
    ));
    /*this.state.activeItem.player_set.map((p) => (
      <li>{this.getPlayerName(p)}</li>
    ))*/
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

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
            {this.renderNames()}
          </div>
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
