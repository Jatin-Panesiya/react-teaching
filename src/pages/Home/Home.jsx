import { useContext } from "react";
import Header from "../../components/header/Header";
import UserContext from "../../context/userContext";
import ProductContext from "../../context/productsContext";

const Home = () => {
    const { isLoggedIn } = useContext(UserContext)
    const data = useContext(UserContext)
    console.log(data, 'data');

    return (
        <div>
            <Header />
            Hello {isLoggedIn && (<div>,You are loggedIn</div>)}
        </div >
    )
}

export default Home
