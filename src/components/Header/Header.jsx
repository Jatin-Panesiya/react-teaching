import { Link } from 'react-router'

const Header = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Header
