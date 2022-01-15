import {useEffect, useState, useRef} from 'react'

export const useFetch = (url) => {

    const isActive = useRef(true)
    const [state, setState] = useState({ loading: false, data: null })

    useEffect(() => {
        return () => {
            isActive.current = false
        }
    })

    useEffect(() => {
        setState((prevState) => ({loading: true, data: prevState.data}))
        fetch(url)
            .then((res) => res.text())
            .then((response) => {
                if(isActive)
                setTimeout(() => {
                    setState({ loading: false, data: response })
                }, 2000)
            })
    }, [url, setState])

    return state

}