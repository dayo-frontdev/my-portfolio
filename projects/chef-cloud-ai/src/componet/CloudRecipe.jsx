import '../App.css'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
    
     
     return (
       <section className='suggested-recipe-container' aria-live='polite'>
        <h2>Chef Cloude Recommends:</h2>
        <ReactMarkdown
      children= {props.getRecipe}
           />
           </section>
    )
}