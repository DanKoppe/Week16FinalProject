import React, { useState } from 'react'; //importing dependencies
import { v4 as uuidv4 } from 'uuid';

export const NewReviewForm = (props) => { //new review form function with props as an arguement
    const [name, setName] = useState(''); //using the useState hook to create state variables to track name and score
    const [score, setScore] = useState('');
    const [review, setReview] = useState('')

    const handleScoreInput = (e) => { //event handler function for the score input field
        const int = parseInt(e.target.value, 10);
        setScore(int >= 0 ? int : '');  //making sure number entered is not less than 0
    }

    const onSubmit = (e) => { //event handler function for the submit button
        e.preventDefault(); //preventing reload when button is clicked
        if (name && score) { //if statement to check if variables are valid
            const newReview = {  //creating a new review object with unique id, name and inputted (parsed) score
                id: uuidv4(),
                name,
                score: parseInt(score, 10),
                review,
            };

            props.addNewReview(newReview); //function passed as a prop to add the new review to the list of reviews and setting the name and score back to empty strings
            setName('');
            setScore('');
            setReview('')
        } else {
            console.log('invalid input');
        }
    };

    return (  //returning a new review form with inputs for name, score, and review text.
        <div>
            <h4>Add a new Review:</h4>
            <form onSubmit={onSubmit}>
                <input
                    className='NewReviewName'
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='score'
                    onChange={handleScoreInput}
                    value={score}
                />
                <textarea
                    className='ReviewText'
                    placeholder='Review'
                    onChange={(e) => setReview(e.target.value)}
                    value={review}
                />
                <button className='btn btn-primary form-control AddReviewButton' type='submit'>Add Review</button>
            </form>
        </div>
    )
};
