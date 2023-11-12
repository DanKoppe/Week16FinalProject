import React from 'react';  //importing dependencies including React, Game, GamesAPI, and NewGame Form.
import { Game } from './Game';
import { GamesAPI } from './GamesAPI.js';
import { NewGameForm } from './NewGameForm.js';

export class GamesList extends React.Component {  //creating an exported react component called GamesList
    state = {  //initializing the component's state with an empty array to hold created games
        games: []
    }

    componentDidMount() {  //when the component is mounted to hte DOM, calling fetchGames to populate games from the API
        this.fetchGames();
    }

    fetchGames = async () => {  //asynchronous method wrapped in a try/catch block using the GET meothod from our API component to fetch games from the server and update the state with the retrieved games
        try {
          const games = await GamesAPI.get(); 
          this.setState({ games }); 
        } catch (error) {
          console.error('Error fetching games:', error);
        }
      };

    updateGame = async (updatedGame) => { //asynchronous method calling the gamesAPI PUT to send update game to the server and then fetch the list of games.
        await GamesAPI.put(updatedGame);
        this.fetchGames();
    };

    render() {  //render method to render our list of games 
        return ( //returning div with NewGameForm component with fetchGames prop to trigger a game list refresh when new game is added.  Followed by maping through the games in the components state and rendering each game with a key and the updateGame function as a prop to the Game component.
            <div className='game-list'>
                <NewGameForm fetchGames={this.fetchGames} />
                {this.state.games.map((game) => (
                    <Game
                        game={game}
                        key={game.id}
                        updateGame={this.updateGame}
                        />
                ))}   
            </div>
        )
    }
}
