/* eslint-disable react/prop-types */
import styles from "./Hero.module.css";
import { useEffect } from "react";
import { useMemo } from "react";

function Hero({ inputEmail, setInputEmail, isError, setIsError, setThankYou }) {
  const regex = useMemo(() => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }, []);

  useEffect(
    function () {
      setIsError(
        inputEmail === ""
          ? false
          : inputEmail.match(regex)?.length
          ? false
          : true
      );
    },
    [regex, inputEmail, setIsError]
  );

  function handleSubmitForm(e) {
    e.preventDefault();

    if (inputEmail === "" || isError) return;
    setThankYou(true);
  }

  return (
    <section className={styles.hero}>
      <img
        srcSet="./images/hero-mobile.jpg 900w, ./images/hero-desktop.jpg 1000w"
        src="./images/hero-desktop.jpg"
        alt=""
      />

      <div className={styles.heroContent}>
      <img src="./images/bg-pattern-desktop.svg" alt="" className={styles.heroBgDesktop} />

        <div className={styles.heroContentContent}>
        <img src="./images/logo.svg" alt="" className={styles.heroLogo} />
        <h1>
          <span>we&apos;re</span> coming soon
        </h1>
        <p>
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>

        <form onSubmit={(e) => handleSubmitForm(e)}>
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <img
            src="./images/icon-error.svg"
            alt=""
            className={`${styles.errorIcon} ${isError ? styles.visible : ""}`}
          />
          <label className={`${isError ? styles.visible : ""}`} htmlFor="email">
            Please provide a valid email
          </label>
          <button type="submit">
            <img src="./images/icon-arrow.svg" alt="" />
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
