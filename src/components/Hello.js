import React, {useState, useEffect} from 'react'
import { useFetch } from './useFetch'

function Hello() {

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
    const {loading, data} = useFetch(`http://numbersapi.com/${count}/trivia`)

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    return (
        <>
            { !data ? 'loading...' : data }
            <button onClick={() => { setCount(() => count + 1); }}>+</button>
        </>
    )
}

export default Hello