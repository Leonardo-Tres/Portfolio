import classes from './ScrollToTheTop.module.css'
import scrollUpImg from '../assets/upward-arrow.png'

const ScrollToTheTop = () => {

	const scrollHandler = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<i className={classes.scrollUp} onClick={scrollHandler} id="scroll-up">
			<img
				src={scrollUpImg}
				className={classes.upArrow}
				alt="scroll-up"
			/>
		</i>
	);
};

export default ScrollToTheTop;
