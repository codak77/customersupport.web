import React from "react";
import styles from "./pageB.module.scss";
import imag3d from "./assets/Other 14.webp";
import upload from "./assets/Group 1000000932.png";
import NavBar from "../../components/navBar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import CustomerReview from "../HomePageA/CustomerReview/index.jsx";
import BrandsLogo from "../HomePageA/BrandLogos/index.jsx";
import Hero from "../HomePageA/HeroSection/index.jsx";

function HomePageB() {
  return (
    <>
      <NavBar />
      <Hero />
      <BrandsLogo />
      <section className={styles.container}>
        <div className={styles.getStarted}>
          <h2 className={styles.getStarted__h2}>LETS GET STARTED</h2>
          <div className={styles.getStarted__content}>
            <div className={styles.getStarted__details}>
              <div className="o">
                <h3 className={styles.getStarted__title}>
                  Start transcribing your age nts call recordings
                </h3>
                <p>Upload and transcribe your recording</p>
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0632 39.8197C29.6673 39.8197 29.2715 39.6738 28.959 39.3613C28.3548 38.7572 28.3548 37.7572 28.959 37.153L40.5007 25.6113L28.959 14.0697C28.3548 13.4655 28.3548 12.4655 28.959 11.8613C29.5632 11.2572 30.5632 11.2572 31.1673 11.8613L43.8132 24.5072C44.4173 25.1113 44.4173 26.1113 43.8132 26.7155L31.1673 39.3613C30.8548 39.6738 30.459 39.8197 30.0632 39.8197Z"
                    fill="#0062E8"
                  />
                  <path
                    d="M42.3535 27.1738H7.29102C6.43685 27.1738 5.72852 26.4655 5.72852 25.6113C5.72852 24.7572 6.43685 24.0488 7.29102 24.0488H42.3535C43.2077 24.0488 43.916 24.7572 43.916 25.6113C43.916 26.4655 43.2077 27.1738 42.3535 27.1738Z"
                    fill="#0062E8"
                  />
                </svg>
              </div>
              <div className="b">
                <h3 className={styles.getStarted__h3}>SCRYBE</h3>
                <p>
                  Powerful AI tool to give you insight to your customers words.
                </p>
              </div>
            </div>
            <div className={styles.getStarted__image}>
              <img src={imag3d} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.upload} ${styles.container}`}>
        <div className={styles.upload__content}>
          <div className={styles.upload__imag}>
            <img src={upload} alt="upload" />
          </div>
          <p className={styles.upload__btn}>Browes Files</p>
        </div>
      </section>
      <section className={styles.customer}>
        <h2 className={styles.customer__h2}>
          See what our clients are<span> saying</span>{" "}
        </h2>
        <CustomerReview />
      </section>
      <Footer />
    </>
  );
}

export default HomePageB;
