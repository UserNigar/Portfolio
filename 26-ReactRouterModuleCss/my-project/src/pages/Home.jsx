import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <section className={styles.section}>
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
          <div className={styles.cardFirst}>
            <div className={styles.bluecard}>
              <i className="fas fa-folder-open"></i>
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#">Call to action</a>
          </div>

          <div className={styles.cardFirst}>
            <div className={styles.bluecard}>
              <i className="fas fa-folder-open"></i>
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#">Call to action</a>
          </div>

          <div className={styles.cardFirst}>
            <div className={styles.bluecard}>
              <i className="fas fa-folder-open"></i>
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#">Call to action</a>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.title}>Customer testimonials</h2>
        <p className={styles.subtitle}>Our customers love working with us</p>

        <div className={styles.cards}>
        <div className={styles.card}>
            <i className="fas fa-quote-left" style={{color:"blue",
              fontSize:"26px"
            }}></i>
            <div className={styles.disp}>
            <p>
              The whole team was a huge help with putting things together for our company and brand.
              We will be hiring them again in the near future for additional work!
            </p>
            <span className={styles.client}>- Client Name, Location</span>
          
            </div>
            </div>

          <div className={styles.card}>
          <i className="fas fa-quote-left" style={{color:"blue",
              fontSize:"26px"
            }}></i>
            <div className={styles.disp}>
            <p>
              The whole team was a huge help with putting things together for our company and brand.
              We will be hiring them again in the near future for additional work!
            </p>
            <span className={styles.client}>- Client Name, Location</span>
          
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;
