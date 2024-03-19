import MotionWrapper from "@/components/motion-wrapper";
import styles from "./page.module.css";
import BackgroundImage from "@/components/background-image";
import Name from "@/components/name";
import Navbar from "@/components/navbar";

export default function Home() {
  const fadeInTransition = (child: React.ReactNode, fadeDelay: number) => {
    return (
      <MotionWrapper
        motionProps={{
          initial: { opacity: 0, x: "-10%" },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: fadeDelay },
        }}
      >
        {child}
      </MotionWrapper>
    );
  };
  return (
    <main className={styles.main}>
      <BackgroundImage containerClassName={styles.bgImage}>
        <div className={styles.bgGradient}></div>
      </BackgroundImage>
      <section className={styles.header}>
        {fadeInTransition(
          <>
            <Name containerClassName={styles.title} />
            <h2 className={styles.addGap}>
              Web Design & Front-End Development
            </h2>
            <p className={styles.addGap}>
              Hello, I’m a <strong>Web Designer</strong> and{" "}
              <strong>Front-End Developer</strong> who is skilled in{" "}
              <strong>Figma</strong>, <strong>Webflow</strong>, and{" "}
              <strong>Next.js</strong>. I’m interested in helping small
              businesses and individuals achieve their online goals.
            </p>
          </>,
          0.4,
        )}
      </section>
      <Navbar />
      <section id="about">About Me</section>
      <section id="portfolio">Portfolio</section>
      <section id="contact">Contact</section>
      <footer>Footer</footer>
    </main>
  );
}
