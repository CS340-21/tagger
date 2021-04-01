import './Tagger.css';

function Tagger() {
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
    <div>Tagging Goes Here</div>
  )
}

function Stats(){
  return(
    <div>Stats Go Here</div>
  )
}

export default Tagger;