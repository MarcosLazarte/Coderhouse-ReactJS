import React from 'react'
import { useParams } from 'react-router'
function Test () {
    let { asdf } = useParams()
    return(
        <div>
            <h1>{asdf}</h1>
        </div>
    )
}
export default Test