import React, {useState, useEffect} from 'react'
import { useFetch } from './useFetch'
import {useMeasure} from './useMeasure'

function Hello() {

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
    const {loading, data} = useFetch(`http://numbersapi.com/${count}/trivia`)

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    const [rect, divRef] = useMeasure([data])

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div ref={divRef}>{ !data ? 'loading...' : data }</div>
            </div>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            <button onClick={() => { setCount(() => count + 1); }}>+</button>
        </>
    )
}

export default Hello