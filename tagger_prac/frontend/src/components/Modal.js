import React, { Component } from "react";


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

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
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
            {this.state.activeItem.player_set.map((p) => (
              <li>{p}</li>
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