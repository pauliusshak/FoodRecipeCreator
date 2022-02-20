import Demo from "../components/Demo";
import MainContext from "../MainContext/MainContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

const CreateRecipe = () => {
    const nav = useNavigate()
    const {
        setPhoto, recipe, setRecipe, photo, ingredient, setIngredient, prepSteps,
        setPrepSteps, title, setTitle, prepTime, setPrepTime, photoRef,
        ingredientsRef, prepStepsRef, titleRef, prepTimeRef, photos, setPhotos, ingredients, setIngredients,
        preparationSteps, setPreparationSteps, liked, setLiked
    } = useContext(MainContext)

    function addPhoto() {
        if (photo.length < 3) {
            const newPhoto = photoRef.current.value
            setPhoto([...photo, newPhoto])
            photoRef.current.value = ""
        }

    }

    function addIngredient() {
        if (ingredientsRef.current.value.length > 0) {
            const newIngredient = ingredientsRef.current.value
            setIngredient([...ingredient, newIngredient])
            ingredientsRef.current.value = ""
        }
    }

    function addPrepStep() {
        if (prepStepsRef.current.value.length > 0) {


            const newPrepStep = prepStepsRef.current.value
            setPrepSteps([...prepSteps, newPrepStep])
            prepStepsRef.current.value = ""
        }
    }

    function createNewRecipe() {
        if (title.length >= 4 && title.length <= 20 && photo.length >= 2 && ingredient.length >= 2 && prepTimeRef.current.value > 0 && prepSteps.length >= 2) {
            const newRecipe = {
                title: titleRef.current.value,
                photo: photo,
                ingredients: ingredient,
                prepTime: prepTimeRef.current.value,
                prepSteps: prepSteps,
                liked: [],
                review: [],
                rating:[],
                nickname:[],
            }
            setRecipe([...recipe, newRecipe])
            setPhotos([...photos, photo])
            setIngredients([...ingredients, ingredient])
            setPreparationSteps([...preparationSteps, prepSteps])
            nav("/")
            setTitle("")
            setPhoto([])
            setIngredient([])
            setPrepTime("")
            setPrepSteps([])
        } else {
            alert("FILL IN ALL THE INFORMATION!")
        }

    }

    return (
        <div className="flex center">
            <div className="cardBox center">
                <h1>SHARE YOUR RECIPE WITH OTHERS!</h1>
                <div>
                    <input ref={titleRef} onChange={() => setTitle(titleRef.current.value.toUpperCase())} type="text"
                           placeholder="Title (min 4 max 20 characters)"/>
                    <div className="flex center">
                        <input ref={photoRef} type="text" placeholder="Photo link (min 2 max 3 photo)"/>
                        <button onClick={addPhoto}>Add photo</button>
                    </div>


                    <div className="flex center">
                        <input ref={ingredientsRef} type="text" placeholder="Ingredients (min 2 ingredients)"/>
                        <button onClick={addIngredient}>Add ingredient</button>
                    </div>
                    <div>
                        <input ref={prepTimeRef} onChange={() => setPrepTime(prepTimeRef.current.value)} type="number"
                               placeholder="Preparation time (minutes)"/>
                    </div>
                    <div className="flex center">
                        <input ref={prepStepsRef} type="text" placeholder="Preparation steps (min 2 steps)"/>
                        <button onClick={addPrepStep}>Add step</button>
                    </div>

                    <div>
                        <button onClick={createNewRecipe} className="ml170">Add recipe</button>
                    </div>


                </div>

            </div>

            <Demo photo={photo} ingredient={ingredient}
                  prepSteps={prepSteps} title={title}
                  prepTime={prepTime} setPhoto={setPhoto} setIngredient={setIngredient} setPrepStep={setPrepSteps}/>

        </div>

    );
};

export default CreateRecipe;