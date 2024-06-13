import React from "react"

export default function Joke(prop) {
    return (
        <>
            <h2>{prop.setup}</h2>
            <p>{prop.punchline}</p>
            <hr />
        </>
    )
}