import classes from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<p>&copy; Copyright 2021</p>
			<p>
				Built with &#x2661; by
				<a href="https://github.com/Leonardo-Tres" target="_blank" rel="noreferrer"> Leonardo Tres</a>
			</p>
		</footer>
	);
};

export default Footer;
