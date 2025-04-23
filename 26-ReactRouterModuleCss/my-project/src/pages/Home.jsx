import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
    <section className={styles.section} >
      <div className={styles.container}>
        <h1 className={styles.headtext}>Present your business in a whole new way</h1>
        <p className={styles.minitext}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div className={styles.twobutton}>
          <button className={styles.buttonblue}>Get Started</button>
          <button className={styles.buttonblack}>Learn More</button>
        </div>
      </div>
    </section>
    <section className={styles.secondsection}>
      <div className={styles.secondcontainer}>
        <div className={styles.cards}>

        </div>
        <div className={styles.cards}>
          <h5>Featured title</h5>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <p>Call to action</p>
        </div>
        <div className={styles.cards}> <h5>Featured title</h5>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <p>Call to action</p></div>
          <div className={styles.cards}> <h5>Featured title</h5>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <p>Call to action</p></div>

      </div>
      </section></>
  )
}

export default Home