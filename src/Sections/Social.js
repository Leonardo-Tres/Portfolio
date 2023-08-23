import classes from './Social.module.css'

import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

const Social = () => {
	return (
		<div className={classes.socials}>
			<a href="https://www.linkedin.com/in/leonardo-tres-7a2205185/" target="_blank">
				<img src={linkedinIcon} alt="Linkedin" loading="lazy" className={classes.socIcon} />
			</a>
			<a href="https://github.com/Leonardo-Tres?tab=repositories" target="_blank">
				<img src={githubIcon} alt="Github" className={classes.socIcon} />
			</a>
		</div>
	);
};

export default Social;
