import React from "react"
import Joke from "./components/Joke.jsx"

export default function App() {
    return(
        <>
            <h1>My Skeleton Joke Page</h1>
            <Joke 
                setup="How many skeleton jokes are on this page?"
                punchline="A Skele-tonne"
            />
            <Joke 
                setup="What do you call a skeleton who doesn't style his page with css?"
                punchline="Lazy bones"
            />
            <Joke 
                setup="Why did the skeleton not do pair-programming?"
                punchline="He has no body to code with"
            />
        </>
    )
}