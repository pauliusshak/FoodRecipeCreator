import React from 'react';

const Demo = ({photo, ingredient, prepSteps, title, prepTime, setPhoto, setIngredient, setPrepStep}) => {

    function deletePhoto(index) {
        const newResult = photo.filter((x, i) => i !== index)
        setPhoto([...newResult])
    }

    function deleteIngredient(index) {
        const newResult = ingredient.filter((x, i) => i !== index)
        setIngredient([...newResult])
    }

    function deletePrepStep(index) {
        const newResult = prepSteps.filter((x, i) => i !== index)
        setPrepStep([...newResult])
    }

    return (
        <div className="ml50 flex column center">
            <h1>Your recipe preview </h1>
            <div className="postCard">
                <div className="flex center"><h1>{title}</h1></div>
                <div className="flex center">
                    {photo && photo.map((x, i) =>
                        <div key={i} className="flex">
                            <img src={x} alt=""/>
                            <span className="smallLogo">
                                <img onClick={() => deletePhoto(i)}
                                     src="http://www.clker.com/cliparts/V/S/1/q/m/Q/red-x-small-hi.png" alt=""/>
                            </span>
                        </div>
                    )}

                </div>
                <div>
                    <h2>Ingredients:
                        {ingredient && ingredient.map((x, i) =>
                            <div key={i} className="flex">
                                <div className="oneComm">
                                    <div className="m10">{x}</div>

                                </div>
                                <span className="smallLogo">
                                <img onClick={() => deleteIngredient(i)}
                                     src="http://www.clker.com/cliparts/V/S/1/q/m/Q/red-x-small-hi.png" alt=""/>
                            </span>
                            </div>)}</h2>


                </div>
                <div><h2>
                    Preparation time: {prepTime} minutes
                </h2>

                </div>
                <div>
                    <h2>
                        Preparation steps:
                        {prepSteps && prepSteps.map((x, i) =>
                            <div key={i} className="flex">

                                <div>
                                    <ul>
                                        <li>{x}</li>
                                    </ul>
                                </div>
                                <span className="smallLogo">
                                <img onClick={() => deletePrepStep(i)}
                                     src="http://www.clker.com/cliparts/V/S/1/q/m/Q/red-x-small-hi.png" alt=""/>
                            </span>
                            </div>)}
                    </h2>

                </div>


            </div>
        </div>

    );
};

export default Demo;