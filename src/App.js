import MainContext from "./MainContext/MainContext";
import './App.css';
import Favorites from "./pages/Favorites";
import CreateRecipe from "./pages/CreateRecipe";
import Main from "./pages/Main";
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import {useState} from "react";
import {useRef} from "react";
import SingleRecipe from "./pages/SingleRecipe";


function App() {
    const [photo, setPhoto] = useState([]);
    const [ingredient, setIngredient] = useState([]);
    const [ingredients,setIngredients]= useState([]);
    const [preparationSteps,setPreparationSteps]=useState([]);
    const [prepSteps, setPrepSteps] = useState([]);
    const [title, setTitle] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [recipe,setRecipe]=useState([]);
    const[photos,setPhotos]=useState([]);
    const [review,setReview]=useState([]);
    const [nickname,setNickname]=useState([])
    const [star, setStar] = useState();
    const [favorites, setFavorites] = useState([]);
    const [liked,setLiked]=useState([]);
    const photoRef = useRef();
    const ingredientsRef = useRef();
    const prepStepsRef = useRef();
    const titleRef = useRef();
    const prepTimeRef = useRef();
    const {singleRecipe} = useParams()
    const oneRecipe = recipe.find(x => x.title === singleRecipe)


    function removeFromFavorites() {
        const index = favorites.findIndex(x => x === oneRecipe)
        const newResult = favorites.filter((x, i) => i !== index)
        setFavorites([...newResult])
        setStar(false)
        // oneRecipe.liked.pop()
    }

    return (
        <div className="App">
            <MainContext.Provider value={{
                ingredients,setIngredients,
                preparationSteps,setPreparationSteps,
                photoRef,ingredientsRef,prepStepsRef,titleRef,prepTimeRef,
                photo, setPhoto, ingredient,
                setIngredient, prepSteps,
                setPrepSteps, title, setTitle,
                prepTime, setPrepTime,liked,setLiked,review,setReview,nickname,setNickname,
                recipe,setRecipe,photos,setPhotos,favorites, setFavorites,setStar,star,removeFromFavorites
            }}>
                <BrowserRouter>
                    <Toolbar/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/create" element={<CreateRecipe/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/recipes/:singleRecipe" element={<SingleRecipe/>}/>
                    </Routes>
                </BrowserRouter>
            </MainContext.Provider>
        </div>
    );
}

export default App;
