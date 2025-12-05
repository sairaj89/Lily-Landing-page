"use client";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.left}>
          <form
            className={styles.newsForm}
            onSubmit={(e) => {
              e.preventDefault();
              const input = (e.currentTarget.elements as any).email;
              alert(`Subscribed: ${input?.value ?? ""}`);
              e.currentTarget.reset();
            }}
          >
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email Here"
              aria-label="Email"
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe To Newsletter
            </button>
          </form>

          <h3 className={styles.signupTitle}>Signup and start enjoying the benefits today!</h3>

          <button className={styles.primaryCTA} type="button">Sign Up To Lillypads</button>

          <div className={styles.socialRow} aria-hidden>
            <div className={styles.socialCircle}>f</div>
            <div className={styles.socialCircle}>t</div>
            <div className={styles.socialCircle}>in</div>
            <div className={styles.socialCircle}>▶</div>
            <div className={styles.socialCircle}>M</div>
            <div className={styles.socialCircle}>p</div>
          </div>
        </div>

        <div className={styles.divider} aria-hidden />

        <div className={styles.right}>
          <div className={styles.logoWrap}>
            <img src="/file.svg" alt="Lillypad logo" className={styles.logo} />
            <address className={styles.address}>
              Reach Us At
              <br />
              6751 Columbia Gateway Dr.,
              <br />
              3rd floor, Columbia,
              <br />
              MD 21046
            </address>
          </div>

          <div className={styles.linkColumns}>
            <div className={styles.col}>
              <h4>Network</h4>
              <ul>
                <li>Community</li>
                <li>Investor</li>
                <li>Broker</li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Product</h4>
              <ul>
                <li>Invest</li>
                <li>Discover</li>
                <li>Transact</li>
                <li>Manage</li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Our Story</h4>
              <ul>
                <li>Approach</li>
                <li>AboutUs</li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Technology</h4>
              <ul>
                <li>Artificial Intelligence</li>
                <li>Block Chain</li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Highlights</h4>
              <ul>
                <li>Impact of COVID-19 on the food and beverage industry and the retail sector</li>
                <li>Commercial lending during COVID-19: navigating the impact</li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Knowledge Center</h4>
              <ul>
                <li>Resource</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
