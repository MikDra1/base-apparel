/* eslint-disable react/prop-types */
import styles from "./ThankYou.module.css";

function ThankYou({ setThankYou, inputEmail, setInputEmail }) {
  return (
    <section className={styles.thankYou}>
      <div className={styles.thankYouContainer}>
        <img src="./images/thank-you.png" alt="" />
        <h1>Thank&apos;s for sharing!</h1>
        <p>
          We sent a verification link to{" "}
          <span className={styles.mail}>{inputEmail}</span>
        </p>
        <button
          onClick={() => {
            setThankYou(false);
            setInputEmail("");
          }}
        >
          Go back
        </button>
      </div>
    </section>
  );
}

export default ThankYou;
