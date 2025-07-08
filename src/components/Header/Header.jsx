import { Link } from 'react-router'
import { Menus } from '../../App'

const Header = () => {
    return (
        <div>
            {
                Menus.map((ele) => (
                    <Link key={ele.title} to={ele.path}>{ele.title}</Link>
                ))
            }
        </div>
    )
}

export default Header
