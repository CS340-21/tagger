import logo from './images/baseball-test.png';
import './App.css';
import { Container, Row, Col, Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to EZScore!
        </p>
      </header>
      <Container>
        <Row>
          <Col>
            <h1>
              <DropdownButton className="hidden-dropdown"
                  as={ButtonGroup}
                  key={'right'}
                  id={`dropdown-button-drop-${'right'}`}
                  size='lg'
                  drop={'right'}
                  title={'Roster 1'}
                >
                  <Dropdown.Item eventKey="1">Season Stats:</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="1">Record: 2-0</Dropdown.Item>
              </DropdownButton>
            </h1>
            <ul>
              <li>
                <DropdownButton
                  as={ButtonGroup}
                  key={'right'}
                  id={`dropdown-button-drop-${'right'}`}
                  drop={'right'}
                  variant="secondary"
                  title={'Jim'}
                >
                  <ul>
                    <li>Jim S. Plonk</li>
                    <Dropdown.Divider />
                    <li>Height: 6'4</li>
                    <li>Age: 34</li>
                    <li>Position: Pitcher</li>
                  </ul>
                </DropdownButton>
              </li>
              <li>
                <DropdownButton
                  as={ButtonGroup}
                  key={'right'}
                  id={`dropdown-button-drop-${'right'}`}
                  drop={'right'}
                  variant="secondary"
                  title={'Joe'}
                >
                  <Dropdown.Item eventKey="1">Height: 5</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="2">Age: 27</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Position: Shortstop</Dropdown.Item>
                </DropdownButton>
              </li>
              <li>
              <DropdownButton
                  as={ButtonGroup}
                  key={'right'}
                  id={`dropdown-button-drop-${'right'}`}
                  drop={'right'}
                  variant="secondary"
                  title={'Jack'}
                >
                  <Dropdown.Item eventKey="1">Height: 5'7</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="2">Age: 14</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Position: Left Fielder</Dropdown.Item>
                </DropdownButton>
              </li>
              <li>
              <DropdownButton
                  as={ButtonGroup}
                  key={'right'}
                  id={`dropdown-button-drop-${'right'}`}
                  drop={'right'}
                  variant="secondary"
                  title={'John'}
                >
                  <Dropdown.Item eventKey="1">Height: 9</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="2">Age: 31</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Position: Second Baseman</Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
            <h1>Team 2</h1>
            <ul>
              <li>Kim</li>
              <li>Jordan</li>
              <li>Poe</li>
              <li>Jeff</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

/*
{['up', 'down', 'left', 'right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={` Drop ${direction} `}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))}
*/
