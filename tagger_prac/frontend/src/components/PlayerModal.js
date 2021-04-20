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

export default class PlayerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rosterList: [],
      activeItem: this.props.activeItem,
    };
  }

  componentDidMount() {
    this.state.activeItem.roster_set.map((r) => (
      this.getRosterName(r)
    ));
  }

  // updates the rosterList to be rendered
  getRosterName = (r) => {
    axios
      .get(`/tagger/api/rosters/${r}`)
      .then((res) => this.setState({ rosterList: [...this.state.rosterList, res.data.roster_name] }));
  };

  renderNames = () => {
    const namesList = this.state.rosterList;

    return namesList.map((name) => (
      <li>{name}</li>
    ));
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
        <ModalHeader toggle={toggle}>Player List</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="player-name">Name</Label>
              <Input
                type="text"
                id="player-name"
                name="player_name"
                value={this.state.activeItem.player_name}
                onChange={this.handleChange}
                placeholder="Enter Player Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="player_number">Number</Label>
              <Input
                type="text"
                id="player_number"
                name="player_number"
                value={this.state.activeItem.player_number}
                onChange={this.handleChange}
                placeholder="Enter Player Number"
              />
            </FormGroup>
          </Form>
          <div>
            <p>Rosters</p>
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
