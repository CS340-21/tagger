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
      activeItem: this.props.activeItem,
    };
  }

  getPlayerName = (p) => {
    /*const promise = axios.get(`/tagger/api/player/${p}`)
    const data = promise.then((res) => res.data.player_name);
      //.then((res) => console.log(res.data.player_name));
      //.then((res) => this.setState({ nameList: res.data.player_name }));
      console.log(data);
    return;*/
    return axios
      .get(`/tagger/api/player/${p}`)
      .then((res) => res.data.player_name)
      .then((name) => console.log(name));
  };

  /*renderNames = () => {
    this.getPlayerName(22);
    const newList = this.state.nameList;

    return newList.map((names) => (
      <li>{names}</li>
    ));
  }*/

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
            {this.state.activeItem.player_set.map((p) => (
              <li>{this.getPlayerName(p)}</li>
            ))}
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
