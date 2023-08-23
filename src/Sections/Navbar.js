import classes from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const toggleMobileMenuHandler = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	return (
		<nav className={classes.nav}>
			<h1 className={classes.title}>Leonardo Tres</h1>
			<ul
				className={`${classes.navigation} ${
					showMobileMenu ? classes.show : ""
				}`}
			>
				<li>
					<a href="#about" className={classes.navLink} onClick={toggleMobileMenuHandler}>
						About
					</a>
				</li>
				<li>
					<a href="#skills" className={classes.navLink} onClick={toggleMobileMenuHandler}>
						Skills
					</a>
				</li>
				<li>
					<a href="#projects" className={classes.navLink} onClick={toggleMobileMenuHandler}>
						Projects
					</a>
				</li>
				<li>
					<a href="#contact" className={classes.navLink} onClick={toggleMobileMenuHandler}>
						Contact
					</a>
				</li>
			</ul>
			<button className={classes.burgerMenu} onClick={toggleMobileMenuHandler}>
				<FaBars className={classes.bars} name="menu-outline"></FaBars>
			</button>
		</nav>
	);
};

export default Navbar;
