import React, { useState } from 'react'; //importing dependencies
import { GamesAPI } from './GamesAPI'; 

export const NewGameForm = (props) => { //exporting new game form function with props as argument
    const [name, setName] = useState('');  //new viariable with usestate hook to track value of name input

    const onSubmit = async (e) => { // asynchronous event handler submit function 
        e.preventDefault(); //preventing reload
        
        if (name) { //checking to make sure name input isn't empty, if not, within a try/catch block a new game object is created with an empty reveiws array.
            try {
                const newGame = {
                    name,
                    reviews: []
                };

                
                const createdGame = await GamesAPI.post(newGame);  //API request to post the new game object

                
                console.log('Created Game:', createdGame);

                
                props.fetchGames();  //updating game games list
                
                
                setName(''); //setting name back to empty string
            } catch (error) {
                console.error('Error adding new game:', error);
            }
        } else {
            console.log('Invalid input');
        }
    };

    return ( //retunring a new game form with header, name input and submit button
        <div className='container game-form'>
            <h2>Add a new Game:</h2>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Game name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                {}
                <button className='btn btn-primary form-control' type='submit'>Add Game</button>
            </form>
        </div>
    );
};
