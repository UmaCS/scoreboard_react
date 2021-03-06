import React,{Component} from 'react';
import './App.css';

import Header from './Components/Header';
import Player from './Components/Player';
import AddPlayerForm from './Components/AddPlayerForm';

class App extends Component {
  state = {
    players:[
      {
        name: "Umid",
        score: 0,
        id: 1
      },
      {
        name: "Guil",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  }
  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index,delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return{
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      console.log(prevState)
      return {
        players:prevState.players.filter(p => p.id !== id)
      }
    })
  }

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if(highScore){
      return highScore;
    }else {
      return null;
    }
  }

  render(){
    const highScore = this.getHighScore();

    return (
      <div className='scoreboard'>
        <Header players={this.state.players} />

        {/* Players List */}
        {this.state.players.map( (player,index) =>
          <Player
          name={player.name}
          score={player.score}
          index={index}
          id={player.id}
          key={player.id.toString()}
          removePlayer={this.handleRemovePlayer}
          changeScore={this.handleScoreChange}
          isHighScore={highScore === player.score}
           />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>

    );
  }

}


export default App;
