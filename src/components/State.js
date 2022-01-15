import React, {useState, useRef, useLayoutEffect} from 'react'
import { useForm } from './useForm'
import Hello from './Hello'
import { useMeasure } from './useMeasure'

function State() {

    const [values, handleChange] = useForm({ email: '', password: '' })
    const [showHello, setShowHello] = useState(true)

    const inputRef = useRef()

    const helloRef = useRef(() => console.log("Focusing"))

    useLayoutEffect(() => {
        console.log(inputRef.current.getBoundingClientRect())
    }, [])

    const [rect, inputRef2] = useMeasure([])

    return (
        <>
            <div className="">
                {showHello && <Hello />}
                <button onClick={() => setShowHello(!showHello)}>Toggle</button>
                <button onClick={() => { inputRef.current.focus(); helloRef.current(); }}>focus</button>
                <input ref={inputRef} type="text" name='email' value={values.email} onChange={handleChange} placeholder='Email' />
                <input ref={inputRef2} type="password" name='password' value={values.password} onChange={handleChange} placeholder='Password' />
                <div>{JSON.stringify(rect, null, 2)}</div>
            </div>
        </>
    )
}

export default State