import classes from './Projects.module.css'
import expenseTrackerImg from '../assets/expenseTracker.png'
import reactMealsImage from '../assets/ReactMeals.png'
import greenyEarthImg from '../assets/greenyEarth.png'

const Projects = () => {
    return <section className={classes.projects} id='projects'>
        <h2 className={classes.projectsTitle}>Some of my recent projects</h2>
        <div className={classes.projectsContainer}>
            <div className={[classes.projectContainer, classes.projectCard].join(' ')}>
                <img
                    src={expenseTrackerImg}
                    alt='greenyEarthImg'
                    loading='lazy'
                    className={classes.projectPic}
                />
                <h3 className={classes.projectTitle}>Expense tracker</h3>
                <p className={classes.projectDetails}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                    ratione vel inventore labore commodi modi quos culpa aut saepe!
                    Alias!
                </p>
                <a href='#' target='_blank' className={classes.projectLink}>Check it out</a>
            </div>
            <div className={[classes.projectContainer, classes.projectCard].join(' ')}>
                <img
                    src={reactMealsImage}
                    alt='ReactMeals project'
                    loading='lazy'
                    className={classes.projectPic}
                />
                <h3 className={classes.projectTitle}>ReactMeals</h3>
                <p className={classes.projectDetails}>
                    In this project, started following a react course, I built a fully working plaform to manage online food orders
                </p>
                <a href='#' target='_blank' className={classes.projectLink}>Check it out</a>
            </div>
            <div className={[classes.projectContainer, classes.projectCard].join(' ')}>
                <img
                    src={greenyEarthImg}
                    alt='greenyEarthImg'
                    loading='lazy'
                    className={classes.projectPic}
                />
                <h3 className={classes.projectTitle}>Greeny earth</h3>
                <p className={classes.projectDetails}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                    ratione vel inventore labore commodi modi quos culpa aut saepe!
                    Alias!
                </p>
                <a href='#' target='_blank' className={classes.projectLink}>Check it out</a>
            </div>
        </div>
    </section>
}

export default Projects