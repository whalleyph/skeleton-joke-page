import React from "react"
import Joke from "./components/Joke.jsx"
import JokesData from "./components/JokesData.jsx"

export default function App() {
    const JokeElements = JokesData.map(joke => <Joke setup={joke.setup} 
        punchline={joke.punchline}/>)
    return(
        <>
            <h1>My Skeleton Joke Page</h1>
            {JokeElements}
        </>
    )
}