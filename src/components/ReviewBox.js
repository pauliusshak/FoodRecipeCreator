import React from 'react';

const ReviewBox = ({revRef, addReview,ratingRef,nicknameRef}) => {
    return (
        <div className="modalBox">
            <h1>Write a review about recipe</h1>
            <input ref={nicknameRef} placeholder="Your name (min 4 max 15)" type="text"/>
            {/*<input className="commInp" ref={revRef} type="text" placeholder="Your comment"/>*/}
            <textarea ref={revRef} className="comment"> </textarea>



            <input  ref={ratingRef} type="text" placeholder="Your rating (1-5)" maxLength="1"
            />





            <button onClick={addReview}>POST REVIEW</button>



        </div>
    );
};

export default ReviewBox;