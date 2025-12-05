import styles from "./about.module.scss";

export default function AboutSection() {
  return (
    <section className={styles.wrapper} aria-labelledby="about-heading">
      <div className={styles.inner}>

        
        <div className={styles.grid3x2}>

          <div className={styles.titleCell}>
            <div className={styles.kickerRow}>
              <span className={styles.kickerBar} aria-hidden />
              <span className={styles.kickerText}>About Us</span>
            </div>

            <h2 id="about-heading" className={styles.title}>
              Lillypad is the only Real <br />
              Estate Investment tool <br />
              you need for your business
            </h2>
          </div>

         
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>
                <img src="/globe.svg" alt="" />
              </div>
              <h3 className={styles.cardTitle}>Become a Data-Driven Investor</h3>
            </div>
            <p className={styles.cardDesc}>
              Lilypads is the cloud-based real estate investment platform that helps you make
              data-driven investment decisions and assists with reaching your long term investment
              objectives.
            </p>
          </article>

       
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>
                <img src="/next.svg" alt="" />
              </div>
              <h3 className={styles.cardTitle}>Lillypads can help you make smarter decisions.</h3>
            </div>
            <p className={styles.cardDesc}>
              Streamline your investment evaluation process and collaborate in reaching your long
              term investment objectives
            </p>
          </article>

         
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>
                <img src="/file.svg" alt="" />
              </div>
              <h3 className={styles.cardTitle}>Manager Due Diligence</h3>
            </div>
            <p className={styles.cardDesc}>
              Evaluate managers against your objectives using traditional risk metrics with the
              addition of factor analysis. All it takes is a set of returns
            </p>
          </article>

         
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>
                <img src="/vercel.svg" alt="" />
              </div>
              <h3 className={styles.cardTitle}>Optimize Asset Allocation</h3>
            </div>
            <p className={styles.cardDesc}>
              Understand the underlying risk drivers in your portfolio using the Lilypads analysis
              factors and then optimize that portfolio based on objectives
            </p>
          </article>

         
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>
                <img src="/window.svg" alt="" />
              </div>
              <h3 className={styles.cardTitle}>Our Subscribers</h3>
            </div>
            <p className={styles.cardDesc}>
              Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks,
              Family offices, Asset managers, Wealth Managers
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}
