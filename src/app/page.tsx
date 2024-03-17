import Image from "next/image";
import styles from "./page.module.css";
import BackgroundImage from "@/components/background-image";

export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundImage containerClassName={styles.bgImage}>
        <div className={styles.bgGradient}></div>
      </BackgroundImage>
      <section className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.initial}>J</span>
          <span className={styles.dot}>.</span>
          <span className={styles.initial}>T</span>
          <span className={styles.dot}>.</span> Ziolo
        </h1>
        <h2 className={styles.addGap}>Web Design & Front-End Development</h2>
        <p className={styles.addGap}>
          Hello, I’m a <strong>Web Designer</strong> and{" "}
          <strong>Front-End Developer</strong> who is skilled in{" "}
          <strong>Figma</strong>, <strong>Webflow</strong>, and{" "}
          <strong>Next.js</strong>. I’m interested in helping small businesses
          and individuals achieve their online goals.
        </p>
      </section>
    </main>
  );
}
