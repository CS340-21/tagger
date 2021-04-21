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
} from "reactstrap";

export default class GameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rosterList: [],
      team1: "",
      team2: "",
      team1_name: "",
      team2_name: "",
      team1_set: 0,
      team2_set: 0,
      activeItem: this.props.activeItem,
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

  handleTeam1 = (team_name, id) => {
    const item = { game_title: "asdf",
                    team1: id,
                    team2: this.state.activeItem.team2};

    this.setState({team1_set: 1});
    this.setState({team1: team_name});

    /*if(this.team1_set && this.team2_set){
      item.game_title = this.state.activeItem.team1 + " vs. " + this.state.activeItem.team2;
      console.log(item.game_title);
    }*/

    this.setState({activeItem: item})
  }

  handleTeam2 = (team_name, id) => {
    const item = { game_title: "asdf",
                    team1: this.state.activeItem.team1,
                    team2: id};

                    this.setState({team2_set: 1});
                    this.setState({team2: team_name});

    if(item.team1 > 0 && item.team2 > 0){
      item.game_title = this.state.team1 + " vs. ";
      //item.game_title += this.state.team2;
      console.log(item.game_title);
      console.log(this.state.team2);
      console.log(team_name);
    }

    this.setState({activeItem: item})
  }

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Game</ModalHeader>
        <ModalBody>
          <Form>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
              Team 1: {this.state.team1}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {this.state.rosterList.map((item) => (
                  <Dropdown.Item
                  onSelect={this.handleTeam1.bind(this, item.roster_name, item.id)}>
                  {item.roster_name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
              Team 2: {this.state.team2}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {this.state.rosterList.map((item) => (
                  <Dropdown.Item onSelect={this.handleTeam2.bind(this, item.roster_name, item.id)}>
                  {item.roster_name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form>
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
