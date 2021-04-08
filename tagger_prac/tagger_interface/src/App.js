import './App.css';

function App() {
  return (
    <div class="App">
      <header>
        <span class="gameTitle">Game Title</span> <span class="date">Current date</span>
      </header>
      <div class="Content">
        <div class="lineup">
          <Lineup />
        </div>
        <div class="tagging">
          <Tagging />
        </div>
        <div class="stats">
          <Stats />
        </div>
      </div>
    </div>
  );
}

function Lineup(){
  return (
    <div> Lineup Goes Here </div>
  )
}

function Tagging(){
  return(
    <div>
      <div id="tagUpper">Tagging Goes Here</div>
      <div id="taglower">buttons here</div>
    </div>
  )
}

function Stats(){
  return(
    <div>Stats Go Here</div>
  )
}

export default App;
