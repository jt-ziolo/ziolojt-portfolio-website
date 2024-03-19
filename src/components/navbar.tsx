// "use client";

import Link from "next/link";
import Name from "./name";
import styles from "./navbar.module.css";
import { useEffect, useRef } from "react";

export default function Navbar() {
  // const navRef = useRef(null);

  // useEffect(() => {
  // TODO: add sticky header functionality
  // window.scrollY > navRef.current
  // }, []);

  return (
    // <nav ref={navRef} className={styles.navbar}>
    <nav className={styles.navbar}>
      <Name
        containerClassName={styles.name}
        dotClassName={styles.dot}
        initialClassName={styles.initial}
        spaceClassName={styles.space}
      />
      <section className={styles.links}>
        <Link href="#about">About Me</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#contact">Contact</Link>
        <Link
          className={styles.resumeButton}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume (PDF)
        </Link>
      </section>
    </nav>
  );
}
