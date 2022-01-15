import React, { useRef } from 'react'

function Hello({ increment }) {

    const ref = useRef(0)

    

    return (
        <>
            <button onClick={increment} >+</button>
        </>
    )
}

export default Hello