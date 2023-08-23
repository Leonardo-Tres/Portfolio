import classes from './ContactMe.module.css'

const ContactMe = () => {
    return <section className={classes.contact} id='contact'>
        <h2>Get in touch with me</h2>
        <div className={classes.contactFormContainer}>
            <div className={classes.contactForm}>
                <form action="https://formspree.io/f/xyylngw" method='POST'>
                    <div className={classes.formControl}>
                        <label for='name'>Name</label>
                        <input 
                            type='text'
                            id='name'
                            name='sender-name'
                            placeholder='Enter your name'
                            className={classes.inputField}
                            required
                        />
                    </div>
                    <div className={classes.formControl}>
                        <label for='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='sender-email'
                            placeholder='Enter your email'
                            className={classes.inputField}
                            required
                        />
                    </div>
                    <div className={classes.formControl}>
                        <label for='message'>Message</label>
                        <textarea
                        id='message'
                        cols='60'
                        rows='10'
                        placeholder='Enter your message'
                        name='message'
                        className={classes.inputField}
                        required
                        ></textarea>
                    </div>
                    <input
                    type='submit'
                    value='Submit' 
                    id='submit-btn'
                    className={classes.submitBtn}
                    />
                </form>
            </div>
        </div>
    </section>
}

export default ContactMe