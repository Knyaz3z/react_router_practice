import './Thanks.scss'
import {replace, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Thanks() {

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/', {replace: true})
        }, 5000)

        return ()=> clearTimeout(timer)
    }, [navigate])

    return (
        <div>
            You will be redirecting to the Home page in 5 seconds...
        </div>
    )
}

export default Thanks