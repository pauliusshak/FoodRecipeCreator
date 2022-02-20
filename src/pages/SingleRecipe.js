import React, {useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import MainContext from "../MainContext/MainContext";
import {useContext} from "react";
import ReviewBox from "../components/ReviewBox";
import SimpleImageSlider from "react-simple-image-slider";

const SingleRecipe = () => {
    const {recipe, favorites, setFavorites, setStar} = useContext(MainContext)
    const {singleRecipe} = useParams()
    const oneRecipe = recipe.find(x => x.title === singleRecipe)
    const index = favorites.findIndex(x => x.title === oneRecipe.title)
    const nav = useNavigate()
    const [rev, setRev] = useState(false)
    const revRef = useRef()
    const ratingRef = useRef()
    const nicknameRef = useRef()



    function addToFavorites() {
        if (favorites.filter(x => x.title === oneRecipe.title).length > 0) {
            const index = favorites.findIndex(x => x.title === oneRecipe.title)
            setFavorites([...favorites])
            setStar(true)
            oneRecipe.liked.push(true)
        } else {
            const newFavorite = {
                title: oneRecipe.title,
                photo: oneRecipe.photo,
                ingredients: oneRecipe.ingredients,
                prepTime: oneRecipe.prepTime,
                prepSteps: oneRecipe.prepSteps,
                liked: oneRecipe.liked,
                review: oneRecipe.review,
                // rating: Math.round(Math.ceil(oneRecipe.rating/oneRecipe.rating.length)),
                rating:oneRecipe.rating,
                nickname: oneRecipe.nickname
            }
            setFavorites([...favorites, newFavorite])
            setStar(true)
            oneRecipe.liked.push(true)
        }

    }

    function removeFromFavorites() {
        const index = favorites.findIndex(x => x.title === oneRecipe.title)
        const newResult = favorites.filter((x, i) => i !== index)
        setFavorites([...newResult])
        setStar(false)
        oneRecipe.liked.pop()
    }


    function addReview() {

        if(revRef.current.value.length > 0 && nicknameRef.current.value.length > 4
            && nicknameRef.current.value.length < 15
            && ratingRef.current.value==="1"
            || ratingRef.current.value==="2"
            || ratingRef.current.value==="3"
            || ratingRef.current.value==="4"
            || ratingRef.current.value==="5"){
            oneRecipe.review.push(revRef.current.value)
            oneRecipe.rating.push(Math.round(Math.ceil(ratingRef.current.value)))
            oneRecipe.nickname.push(nicknameRef.current.value)
            setRev(!rev)
        } else{
            alert("Please fill in information that is required correctly!")
        }

    }

    return (

        <div className='flex center column'>
            <div className="singleRecipe">
                <div className="smallLogo1 flex spc-btw">
                    <h1 className="fontBig" onClick={addToFavorites}>{oneRecipe.title.toUpperCase()}</h1>
                    {oneRecipe.liked.map((x, i) =>
                        <h1 key={i}>{x}</h1>)}

                    <div>
                        {!oneRecipe.liked.includes(true) && <div className="flex">
                            <h1>Add to favorites</h1>
                            <img onClick={addToFavorites}
                                 src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png" alt=""/>
                        </div>}
                        {oneRecipe.liked.includes(true) && <div className="flex">
                            <h1> Added</h1>
                            <img onClick={removeFromFavorites}
                                 src="https://www.freeiconspng.com/uploads/favorites-icon-png-16.png" alt=""/>
                        </div>}
                    </div>

                </div>


                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={oneRecipe.photo.map((x) => { return { url: x }})}
                    showBullets={true}
                    showNavs={true}
                />

                {}



                <div>
                    <h1>INGREDIENTS:</h1>
                    {oneRecipe.ingredients.map((x, i) =>
                        <div key={i} className="oneComm">
                            <h2 className="ml10">{x}</h2>
                        </div>)}
                </div>
                <div>
                    <h1>PREPARATION TIME: {oneRecipe.prepTime} minutes</h1>
                </div>
                <div className="center">
                    <h1>PREPARATION STEPS:</h1>
                    {oneRecipe.prepSteps.map((x, i) => <div key={i}>
                        <h1 className="ml10">
                            <ul>
                                <li>{x}</li>
                            </ul>
                        </h1>
                    </div>)}
                </div>
                <div className="ratingBox flex spc-btw">

                    <div className="flex column">Name:
                        {oneRecipe.nickname.map((x, i) =>
                            <div key={i} className="flex">
                                <h1>{x}</h1>
                            </div>)}
                    </div>

                    <div className="flex column">Review:
                        {oneRecipe.review.map((x, i) => <h1 key={i}>{x}</h1>)}
                    </div>
                    <div className="flex column">Rating:
                        {oneRecipe.rating.map((x, i) =>
                            <div key={i} className='flex'>
                                <h1>{x}</h1>
                                <div className="starLogo">
                                    <img src="https://cdn.picpng.com/star/icon-star-32065.png" alt=""/>
                                </div>

                            </div>
                        )}
                    </div>


                </div>


                <div onClick={() => setRev(!rev)} className="showBox">
                    {!rev && <span>Add a review</span>}
                    {rev && <span>Show less</span>}
                </div>


            </div>
            {!!rev &&
            <ReviewBox revRef={revRef} addReview={addReview} ratingRef={ratingRef} nicknameRef={nicknameRef}/>}
        </div>

    );
};

export default SingleRecipe;