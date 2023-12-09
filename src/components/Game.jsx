import React, { useState } from 'react';  //importing dependencies
import { NewReviewForm } from './NewReviewForm';
import { GamesAPI } from './GamesAPI';

export const Game = (props) => {  //exporting Game function with props as input
    const { game, updateGame } = props; //destructuring the props object to extract two specific props
    const [editReviewId, setEditReviewId] = useState(null); //using state hook to initialize two pieces of the component state starting at null
    const [editedReviewScore, setEditedReviewScore] = useState(''); //again using useState hook to initialize, this time with an empty string
    const [editedReviewText, setEditedReviewText] = useState(''); //useState hook for our review text

    const deleteGame = async () => { //asynchronous function wrapped in a try/catch block to delete games based on game.id and then upding the reveiws to an empty array
        try {
            await GamesAPI.delete({ id: game.id });
            updateGame({ ...game, reviews: [] });
        } catch (error) {
            console.error('Error deleting the game:', error);
        }
    }

    const deleteReview = (reviewId) => { //function that filters reviews into an array with ... and then deletes a reviews with the corrisponding ID and then updates the game with the updated reviews
        const updatedGame = {
            ...game,
            reviews: game.reviews ? game.reviews.filter((x) => x.id !== reviewId) : []
        };
        updateGame(updatedGame);
    }

    const startEditingReview = (reviewId, initialScore, initialText) => {  //function to initialize the editing of a review with intial id, score, text
        setEditReviewId(reviewId);
        setEditedReviewScore(initialScore);
        setEditedReviewText(initialText);
    }

    const saveEditedReview = (reviewId) => { //function that takes a rewview id argument and saves the changes made to the review after editing and then updates the game's reviews and sets the edit review id back to null
        if (editReviewId !== null) { //conditional statement to check if the review is currently being edited (not null)
            const updatedReviews = game.reviews.map((review) => {  //new variable that maps over the game reviews to create a new array of reviews
                if (review.id === reviewId) { //checking if the review id passed in as an argument matches a review id
                    return { ...review, score: editedReviewScore, review: editedReviewText }; //if there is a match, returning new object using the spread operator to copy the properties of the existing review and updating the score value stored in editReviewScore
                }
                return review;
            });

            const updatedGame = { ...game, reviews: updatedReviews };//new variable representing new game object that takes the properties from the exiting game object using the spread operator and updates the reviews property which saves any changes.
            updateGame(updatedGame); //rerending the updated game component

            setEditReviewId(null); //returning id to null and score/text to empty string
            setEditedReviewScore('');
            setEditedReviewText('');
        }
    }

    const addNewReview = (review) => { //function to add a new review that takes a review as an arguement
        return updateGame({ ...game, reviews: [...(game.reviews || []), review] }); //returning the updated games by using the spread operator on game AND reviews (intially defaulted to an empty array incase of no existing reviews) and then adding the new review to the end of the spread game reviews array.
    };

    const reviews = () => (  //new function used to render the reviews list
        <ul> 
            {(game.reviews || []).map((review, index) => ( //using the map function to iterate over the game reviews and for each review returning an unordered list with of reviews each with their own key, name, reviewscore, reviewtext, delete button and edit score/text functionality.
                <li key={index}>
                    <div className='ReviewContainer'>
                    <label className='review-label'>{`Name: ${review.name} || Score: ${editReviewId === review.id ? editedReviewScore : review.score}`}</label>
                        {editReviewId === review.id ? (
                        <div>
                           <input
                                type="text"
                                value={editedReviewScore}
                                onChange={(e) => setEditedReviewScore(e.target.value)}
                            />
                            <textarea
                                className='ReviewText'
                                type="text"
                                value={editedReviewText}
                                onChange={(e) => setEditedReviewText(e.target.value)}
                            />
                            <button className='btn btn-primary form-control' onClick={() => saveEditedReview(review.id)}>Update</button>
                            <button className='btn btn-primary form-control' onClick={() => saveEditedReview(null)}>Cancel</button>
                        </div>
                        ) : (
                            <div>{review.review}</div>
                        )}
                    </div>
                    <button className='btn btn-primary form-control ReviewButton' onClick={(e) => deleteReview(review.id)}>Delete Review</button>
                    <button className='btn btn-primary form-control' onClick={(e) => startEditingReview(review.id, review.score, review.review)}>Edit Review</button>
                    <hr></hr>
                </li>
            ))}
        </ul>
    );
    

    return ( //returning named game with review form component and delete button
        <div className='container game-container'>
            <h3>{game.name}</h3>
            <button className='btn btn-primary form-control' onClick={deleteGame}>Delete Game</button>
            {reviews()}
            <NewReviewForm addNewReview={addNewReview} />
        </div>
    );
};
