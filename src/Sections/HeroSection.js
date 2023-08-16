import classes from './HeroSection.module.css'
import sticker from '../assets/sticker.png'

const HeroSection = () => {
    return <section className={classes.hero} id="about">
      <img
        src={sticker}
        alt="Leo_sticker"
        loading="lazy"
      />
      <div className={classes.bio}>
        <h2>Hello, nice to meet you!</h2>
        <p>
          I'm Leonardo. Selftaught frontend web-developer. <br/>
          If you have a project and you're looking for a professional web-developer to realize it, 
          check out my portfolio below.
        </p>
      </div>
    </section>
}

export default HeroSection