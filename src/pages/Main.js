import React, {useContext, useRef, useState} from 'react';
import MainContext from "../MainContext/MainContext";
import OneRecipe from "../components/OneRecipe";


const Main = () => {
    const [ingredientSearch, setIngredientSearch] = useState("")
    const [products, setProducts] = useState("")
    const [prepTimeSearch, setPrepTimeSearch] = useState("")
    const [reviewAmount, setReviewAmount] = useState("")
    const [averageRating, setAverageRating] = useState("")

    const [searchTitle, setSearchTitle] = useState("")
    const searchTitleRef = useRef()
    const averageRef = useRef()
    const reviewAmountRef = useRef()
    const productsSearchRef = useRef()
    const ingredientsSearchRef = useRef()
    const prepTimeSearchRef = useRef()
    const {recipe} = useContext(MainContext)

    return (

        <div className="flex column">
            <div className="hello"></div>
            <div className="flex spc-a border">
                <input className="ml20" ref={searchTitleRef} type="text" placeholder="Search by title"
                       onChange={() => setSearchTitle(searchTitleRef.current.value)}/>

                <input className="ml20" ref={ingredientsSearchRef} type="text" placeholder="Search by ingredient"
                       onChange={() => setIngredientSearch(ingredientsSearchRef.current.value)}/>

                <input className="ml20" ref={productsSearchRef} type="number"
                       placeholder="Search by amount of ingredients"
                       onChange={() => setProducts(productsSearchRef.current.value)}/>

                <input className="ml20" ref={prepTimeSearchRef} type="number"
                       placeholder="Search by preparation time(min)"
                       onChange={() => setPrepTimeSearch(prepTimeSearchRef.current.value)}/>

                <input className="ml20" ref={reviewAmountRef} type="number" placeholder="Search by amount of reviews"
                       onChange={() => setReviewAmount(reviewAmountRef.current.value)}/>

                <div className="flex ml20 smallLogo3 column">
                    <div>
                        Sort by rating <img src="https://starpng.com/public/uploads/preview/star-vector-png-transparent-image-101577006037rxrzrffonm.png" alt=""/>
                    </div>

                    <input className='slider' ref={averageRef} id="rangeInput" type="range"
                           defaultValue="0"
                           min="0"
                           max="5"
                           onChange={() => setAverageRating(averageRef.current.value)}/>
                    <div className="flex spc-a">
                        <span>All</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>

                </div>


            </div>


            <div className="flex wrap center">
                {recipe.filter((filteredRecipe) => {
                    if (searchTitle === "") {
                        return filteredRecipe
                    }
                    if (filteredRecipe.title.includes(searchTitle.toLowerCase())) {
                        return filteredRecipe
                    }
                }).filter((filteredRecipe) => {
                    if (averageRating === "" || Number(averageRating) === 0) {
                        return filteredRecipe
                    }
                    if (Math.ceil(filteredRecipe.rating.reduce((a, b) => a+b,0)/filteredRecipe.rating.length) === Number(averageRating)) {

                        return filteredRecipe
                    }
                }).filter((filteredRecipe) => {
                    if (reviewAmount === "") {
                        return filteredRecipe
                    }
                    if (filteredRecipe.review.length === Number(reviewAmount)) {
                        return filteredRecipe
                    }
                }).filter((filteredRecipe) => {
                    if (prepTimeSearch === "") {
                        return filteredRecipe
                    }
                    if (filteredRecipe.prepTime === prepTimeSearch) {
                        return filteredRecipe
                    }
                }).filter((filteredRecipe) => {
                    if (ingredientSearch === "") {
                        return filteredRecipe
                    }
                    if (filteredRecipe.ingredients.includes(ingredientSearch.toLowerCase())) {
                        return filteredRecipe
                    }
                }).filter((filteredRecipe) => {
                    if (products === "") {
                        return filteredRecipe
                    }
                    if (filteredRecipe.ingredients.length === Number(products)) {
                        return filteredRecipe
                    }
                }).map((x, i) =>
                    <OneRecipe x={x} key={i} index={i}/>)}
            </div>


        </div>
    );
};

export default Main;