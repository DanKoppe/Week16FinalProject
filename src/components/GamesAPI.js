const GAMES_API = 'https://654d72b2cbc32535574193b6.mockapi.io/games'; //defining our API endpoint

class GamesAPIService {  //class to handle API interaction methods
    get = async () => {  //asynchronous GET method wrapped in a try/catch block that fetches data from the API and conversts it into JSON and then returns the data
        try {
            const resp = await fetch(GAMES_API);
            const data = await resp.json();
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    put = async (game) => {  //asynchronous PUT method wrapped in a try/catch block that sends a put request to the API as a JSON string and returns that data in JSON format.
        try {
            const resp = await fetch(`${GAMES_API}/${game.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(game)
            });
            return await resp.json(); 
        } catch(error) {
            throw new Error(error.message);
        }    
    }

    post = async (game) => { //asynchronous POST method wrapped in a try/catch block that sends a post request to the API with JSON string data and returns json data
        try {
            const resp = await fetch(GAMES_API, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(game)
            });

            if (!resp.ok) {
                throw new Error('Failed to create a new game')
            }

            return await resp.json();
        } catch(error) {
            throw new Error(error.message);
        }
    };

    delete = async (game) => { //asynchronous DELETE method wrapped in a try/catch block that sends a delte request to the API in string JSON format and returns the data in json format
        try {
            const resp = await fetch(`${GAMES_API}/${game.id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(game)
            });

            if (!resp.ok) {
                throw new Error('Failed to delete a game')
            }

            return await resp.json();
        } catch(error) {
            throw new Error(error.message);
        }
    }
}

export const GamesAPI = new GamesAPIService(); //exporting an instance of GamesAPIService as GamesAPI