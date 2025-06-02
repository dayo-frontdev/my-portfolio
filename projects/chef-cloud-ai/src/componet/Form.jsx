import '../App.css'
import React from 'react'
import IngredientsList from './IngredientList'
import {getRecipeFromMistral} from './ai'


function Form(){
   
    const [setDefualt, setIngridient] = React.useState(
        []
    )
    
    function HanddleAddIngredient(formData){
        const inputValue = formData.get("ingridient")
      setIngridient(prev => [...prev ,inputValue])
       }
       
       const [getRecipe, setRecipe] = React.useState('')
/**
     * Challenge:
     * Add a new effect that calls `recipeSection.current.scrollIntoView()`
     * only if recipe is not an empty string and recipeSection.current is not null.
     * Think carefully about what value(s) you would want to include in
     * the dependencies array.
     */
       const recipeSection = React.useRef(null)
    
       React.useEffect(()=>{  if(recipeSection.current !== null && getRecipe !== ''){ 
        recipeSection.current.scrollIntoView({behavior: "smooth"})
       }
    },
[getRecipe]
    )

      async function handleGetRecipe(){
        const recipeMarkdown =  await getRecipeFromMistral(setDefualt)
           return setRecipe(recipeMarkdown)
       }
    return(
        <>
        <div className='portfolio'>
      <button className='portfolio-button'>
        <a href="https://dayofrontdev.space">Back to portfolio</a> 
      </button>
      </div>
       
        <form action={HanddleAddIngredient} className="add-form">
          
            <input  id='input' className='add-input'
            aria-label="Add ingridient"
            placeholder="e.g salt"
            type="text"
            name='ingridient' required />
            <button className='add-button'
            >Add ingridient</button>
        </form>
        <div className='instruct'>
      { setDefualt.length < 4 && <p > 
        Add more ingredient minimum of {4 - setDefualt.length}
        </p>}</div>    
         <IngredientsList 
          ref = {recipeSection}
          setDefualt={setDefualt} 
          getRecipe = {getRecipe}
          handleGetRecipe={handleGetRecipe}/>
        </>
    )
}

export default Form