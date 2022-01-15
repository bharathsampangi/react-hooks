import React, {useState} from 'react'
import Hello from './Hello'

function State() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Hello increment={() => setCount(count + 1)} />
            {count}
        </>
    )
}

export default State