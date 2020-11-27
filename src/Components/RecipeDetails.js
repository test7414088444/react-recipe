import React,{ useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import './recipeDetails.css'
import backArrow from '../icons/backArrow.png';

function RecipeDetails(props) {

    const location = useLocation();
    const history = useHistory();
    const [recipe, setRecipe] = useState(location.state || null)
    if(!recipe) {
        history.replace('/')
    }
    const MouseOverTip = (e) => {
        if(e.target.children[0]) {            
            e.target.children[0].classList.add('toggleDisplay');
        }
    }
    const MouseOutTip = (e) => {
        if(e.target.children[0]) {
            e.target.children[0].classList.remove('toggleDisplay');
        }
    }

    const checkImage = (img) => {
        if(!img) {
            return {
                top: '-40px',
                left: '-60%'
            }
        }
    }

    return (recipe ? 
        <div className='recipeDetails'>
        <div className='recipeDetails_header'>
            <img onClick={() => history.goBack()} src={backArrow} width='30' />
            <h2>{recipe.label}</h2>
        </div>
        <div className='recipeDetails_container'>
            <div className='recipeDetails_body'>
                <img src={recipe.image} alt='rice' />
            </div>
            <div className=''>
                <h3 style={{paddingLeft: "10px", fontFamily: 'sans-sarif'}}>Ingredients: </h3>
                <ul className='ingredients'>
                    {recipe.ingredients.map((ingredient, i) => (
                        <li 
                        onMouseOver={(e) => MouseOverTip(e)} 
                        onMouseOut={(e) => MouseOutTip(e)} key={i}                        
                        >
                            {ingredient.text}
                            <div className='ingredient_tooltip' style={checkImage(ingredient.image)}>
                                <img width='150' src={ingredient.image} alt={ingredient.text}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
        </div> : null
    )
}

export default RecipeDetails
