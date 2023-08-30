import classes from './Projects.module.css'
import reactMealsImage from '../assets/ReactMeals.png'

const Projects = () => {
    return <section className={classes.projects} id='projects'>
        <h2 className={classes.projectsTitle}>Some of my recent projects</h2>
        <div className={classes.projectsContainer}>
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
                <a href='https://github.com/Leonardo-Tres/ReactMeals' className={classes.projectLink}>Check it out</a>
            </div>
        </div>
    </section>
}

export default Projects