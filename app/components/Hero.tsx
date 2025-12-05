import Link from "next/link"
import styles from "./hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.heroWrap}>
      <div className={styles.heroInner}>

        <div className={styles.left}>

          {/* --- Kicker Row (Red Line + Welcome Text) --- */}
          <div className={styles.kickerRow}>
            <span className={styles.kickerBar} aria-hidden="true"></span>
            <span className={styles.intro}>Welcome to the</span>
          </div>

          <h1 className={styles.headline}>
            Unprecedented
            <br />
            Era of <span className={styles.accent}>Real Estate</span>
            <br />
            Investing
          </h1>

          <p className={styles.lead}>
            Lillypads uses sophisticated technologies for data-driven decisions in investing, managing and funding commercial real estate assets
          </p>

          <div className={styles.ctaRow}>
            <Link href="#" className={styles.cta}>
              Start Investing Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNum}>658+</div>
              <div className={styles.statLabel}>Properties Registered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>685+</div>
              <div className={styles.statLabel}>Deals Cracked</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>255+</div>
              <div className={styles.statLabel}>Investors</div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.phones}>
            <div className={styles.phoneFront}>
              <div className={styles.phoneFrame}>
                <div className={styles.cardStack}>

                  <div className={styles.cardSmall}>
                    <div className={styles.thumbSmall} />
                    <div className={styles.cardText}>
                      <div className={styles.cardTitle}>Aurora</div>
                      <div className={styles.cardMeta}>+3.5% Yield</div>
                    </div>
                  </div>

                  <div className={styles.cardMedium}>
                    <div className={styles.thumbMedium} />
                    <div className={styles.cardText}>
                      <div className={styles.cardTitle}>Geminin Appartment</div>
                      <div className={styles.cardMeta}>Committed $105,555</div>
                    </div>
                  </div>

                  <div className={styles.cardSmall}>
                    <div className={styles.thumbSmall} />
                    <div className={styles.cardText}>
                      <div className={styles.cardTitle}>Genisis</div>
                      <div className={styles.cardMeta}>+3.5% Yield</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className={styles.phoneBack}>
              <div className={styles.profileFrame}>
                <div className={styles.profileTop}>
                  <div className={styles.avatarLarge} />
                  <div className={styles.profileName}>Julie Craig</div>
                </div>

                <div className={styles.profileStats}>
                  <div className={styles.statRow}>
                    <div>
                      <div className={styles.statVal}>$350,000</div>
                      <div className={styles.statLbl}>Borrowed</div>
                    </div>
                    <div>
                      <div className={styles.statVal}>$184,000</div>
                      <div className={styles.statLbl}>Paid</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
