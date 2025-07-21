import { useContext } from "react"
import Header from "../../components/header/Header"
import UserContext from "../../context/userContext"

const About = () => {
    const { setIsLoggedIn } = useContext(UserContext)

    return (
        <div>
            <Header />
            <button onClick={() => { setIsLoggedIn(true) }}>Login</button>
        </div>
    )
}

export default About
