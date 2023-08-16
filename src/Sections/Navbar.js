import classes from './Navbar.module.css'
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    return <nav className={classes.nav}>
        <h1 className={classes.title}>Leonardo Tres</h1>
        <ul className={classes.navigation}>
            <li><a href='#about' className={classes.navLink}>About</a></li>
            <li><a href='#skills' className={classes.navLink}>Skills</a></li>
            <li><a href='#projects' className={classes.navLink}>Projects</a></li>
            <li><a href='#contact' className={classes.navLink}>Contact</a></li>
        </ul>
        <button className={classes.burgerMenu} id='burger-menu'>
            <FaBars className={classes.bars} name='menu-outline'></FaBars>
        </button>
    </nav>
}

export default Navbar