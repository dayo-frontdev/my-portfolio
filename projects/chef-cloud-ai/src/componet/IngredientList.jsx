import React from 'react'
import CloudRecipe from './CloudRecipe'
import '../App.css'

function IngredientList(props){
    
    

    const ingredientsList = props.setDefualt.map((ingridient, index) =>{  
        return(
            <li key={index}>{ingridient}</li>
        )
    })

    return(
        <>
         { props.setDefualt.length > 0 && <section className='ingredient-section'>
        <h1 className='ingredient-head'><b>Ingredient on hand:</b></h1>
            <ul className='ingredient-list'>
                {ingredientsList}
            </ul>
            {props.setDefualt.length > 3 && <div className='recipe'>
            <div ref={props.ref}>
                <h2>Ready for a recipe?</h2>
              <div>  <p>Generate a recipe from your list of Ingredients.</p>
            <button onClick={props.handleGetRecipe}>Get a recipe</button>
            </div>
            </div>
            </div>}
            { props.getRecipe && <CloudRecipe getRecipe ={props.getRecipe}/>
                        }
            </section> 
            
            }

        </>
    )
}

export default IngredientList