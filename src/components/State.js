import React, {useState, useEffect, useRef} from 'react'
import { useForm } from './useForm'
import Hello from './Hello'

function State() {

    const [values, handleChange] = useForm({ email: '', password: '' })
    const [showHello, setShowHello] = useState(true)

    const inputRef = useRef()

    return (
        <>
            <div className="">
                {showHello && <Hello />}
                <button onClick={() => setShowHello(!showHello)}>Toggle</button>
                <button onClick={() => { console.log(inputRef.current.focus()) }}>focus</button>
                <input ref={inputRef} type="text" name='email' value={values.email} onChange={handleChange} placeholder='Email' />
                <input type="password" name='password' value={values.password} onChange={handleChange} placeholder='Password' />
            </div>
        </>
    )
}

export default State