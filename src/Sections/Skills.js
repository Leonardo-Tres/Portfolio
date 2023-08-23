import classes from './Skills.module.css'
import htmlImage from '../assets/html-5.svg'
import cssImage from '../assets/css3.svg'
import jsImage from '../assets/javascript.svg'
import bootstrapImage from '../assets/bootstrap.svg'
import reactImage from '../assets/react-native.svg'
import gitImage from '../assets/git.svg'


const Skills = () => {
    return <section className={classes.skills} id='skills'>
        <h2 className={classes.skillHeader}>My top skills</h2>
        <div className={classes.skillsWrapper}>
            <div className={classes.firstSet}>
                <img 
                    src={htmlImage}
                    alt='html'
                    loading='lazy'
                    className={[classes.icon, classes.iconCard].join(' ')}
                />
                <img 
                    src={cssImage}
                    alt='CSS'
                    loading='lazy'
                    className={[classes.icon, classes.iconCard].join(' ')}
                />
                <img 
                    src={jsImage}
                    alt='JavaScript'
                    loading='lazy'
                    className={[classes.icon, classes.iconCard].join(' ')}
                />
            </div>
            <div className={classes.secondSet}>
                <img 
                    src={bootstrapImage}
                    alt='bootstrap'
                    loading='lazy'
                    className={[classes.icon, classes.iconCard].join(' ')}
                />
                <img 
                    src={reactImage}
                    alt='react'
                    loading='lazy'
                    className={[classes.icon, classes.iconCard].join(' ')}
                />
                <img 
                    src={gitImage}
                    alt='git'
                    loading='lazy'
                    className={[classes.icon, classes.iconCard].join(' ')}
                />
            </div>
        </div>
    </section>
}

export default Skills