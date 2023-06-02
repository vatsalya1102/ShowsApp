import { Link } from 'react-router-dom'
import './Navbar.css'
import { LocalMovies } from '@mui/icons-material'

const Navbar = () => {

    return (
        <div>
            <nav>
                <label className='logo'><Link to='/'>Movies App <LocalMovies /></Link></label>
            </nav>
        </div>
    )
}

export default Navbar