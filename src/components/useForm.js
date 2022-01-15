import {useState} from "react"

export const useForm = (data) => {
    const [values, setValues] = useState(data)

    const handleChange = (e) => {
        setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }))
    }

    return [ values, 
        handleChange
    ]
}