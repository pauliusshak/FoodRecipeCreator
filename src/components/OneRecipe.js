import {useNavigate} from "react-router-dom";

const OneRecipe = ({x, i}) => {

    const nav = useNavigate()
    const sum = x.rating.reduce((a, b) => Math.round(Math.ceil(Number(a))) + Math.round(Math.ceil(Number(b))), 0)/x.rating.length
    // const average = (array) => array.reduce((a, b) => a + b) / array.length;
    return (
        <div className="flex center">
            <div key={i} className="postCard">
                <div className="flex center">
                    <h1>{x.title.toUpperCase()}</h1>
                </div>
                <div className="flex">
                    {!!sum &&
                    <div className="starLogo flex ml20">
                        <h2>Rating:{Math.round(Math.ceil(sum))}</h2>
                        <img src="https://cdn.picpng.com/star/icon-star-32065.png" alt=""/>
                    </div>}
                    {!sum && <h2 className="ml20">No ratings yet</h2>}
                </div>
                <div className="flex center mt20">
                    {x.photo.map((x, i) => <img key={i} src={x} alt=""/>)}
                </div>

                <div className="ml50">
                    <h1>Preparation time:</h1><h2>~{x.prepTime} minutes</h2>
                </div>
                <div  className="ml50">
                    <h1>Ingredients: </h1><br/> {x.ingredients.map((x,i)=><h1 key={i}>{x}</h1>)}
                </div>
                <div onClick={() => nav(`/recipes/${x.title}`)} className="flex">
                    <img className='clickHere'
                         src="https://thesantaacademy.com/wp-content/uploads/2021/12/Lacus-Button-Click-here.png"
                         alt=""/>
                </div>


            </div>
        </div>


    );
};
export default OneRecipe;