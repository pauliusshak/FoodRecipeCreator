import React, {useContext} from 'react';
import MainContext from "../MainContext/MainContext";
import {useNavigate} from "react-router-dom";

const Favorites = () => {
    const {favorites, setFavorites, recipe, setStar} = useContext(MainContext)
    const nav = useNavigate()

    // function deleteCard(index) {
    //     const newResult = favorites.filter((x, i) => i !== index)
    //     setFavorites([...newResult])
    //     favorites[index].liked=false
    // }

    return (
        <div>
            <div className="center flex">
                <div>
                    <h1>YOUR ALL FAVORITE RECIPES IN ONE PLACE!</h1>
                </div>
            </div>
            {<div className="flex wrap">
                {favorites.map((x, i) =>
                    <div onClick={() => nav(`/recipes/${x.title}`)} className="favoriteCard flex" key={i}>
                        <h1>{x.title.toUpperCase()}</h1>
                        <div className="flex">
                            {x.photo.map((x, i) =>
                                <div key={i}>
                                    <img src={x} alt=""/>
                                </div>)}
                        </div>
                        <div className="flex center">
                           <h2>Preparation</h2> <img className="smallLogo2" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png" alt=""/>
                           <h2>{x.prepTime}min</h2>
                        </div>

                    </div>)}
            </div>}


        </div>

    );
};

export default Favorites;