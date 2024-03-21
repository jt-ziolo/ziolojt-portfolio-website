import MotionWrapper from "@/components/motion-wrapper";
import styles from "./page.module.css";
import BackgroundImage from "@/components/background-image";
import Name from "@/components/name";
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import SocialBtn from "@/components/social-btn";
import { codePenUrl, gitHubUrl, linkedInUrl } from "@/site-info";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

export default function ProdPlaceholder() {
  // Animation wrapper
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

  // Social buttons
  const socialBtnFactory = (
    iconComponent: React.ReactNode,
    href: string,
    accessibleText: string,
  ) => {
    return (
      <SocialBtn
        href={href}
        linkAccessibleText={accessibleText}
        buttonProps={{
          className: styles.iconBtn,
          highContrast: true,
          size: "3",
        }}
        iconProps={{ className: styles.icon }}
        iconComponent={iconComponent}
      />
    );
  };
  const gitHubBtn = socialBtnFactory(
    <FaGithub />,
    gitHubUrl,
    "JT Ziolo's GitHub profile",
  );
  const linkedInBtn = socialBtnFactory(
    <FaLinkedinIn />,
    linkedInUrl,
    "JT Ziolo's LinkedIn profile",
  );
  const codePenBtn = socialBtnFactory(
    <FaCodepen />,
    codePenUrl,
    "JT Ziolo's CodePen page",
  );

  // Layout
  const spacer = () => <div className={styles.spacer}></div>;

  // Page
  return (
    <main className={styles.main}>
      <BackgroundImage
        containerClassName={styles.bgImageContainer}
        imageClassName={styles.bgImage}
      >
        <>
          <div className={styles.bgGradient}></div>
        </>
      </BackgroundImage>
      <section className={styles.header}>
        {fadeInTransition(
          <>
            <Name containerClassName={styles.title} />
            {spacer()}
            <h2>Web Design & Front-End Development</h2>
            {spacer()}
            {spacer()}
            <p>
              Hello, I&apos;m a <strong>Web Designer</strong> and{" "}
              <strong>Front-End Developer</strong> who is skilled in{" "}
              <strong>Figma</strong>, <strong>Webflow</strong>, and{" "}
              <strong>Next.js</strong>. If you are looking to collaborate with a
              dedicated and innovative developer, I&apos;d love to hear from
              you! You can find my resume with my contact details below.
            </p>
            {spacer()}
            {spacer()}
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button color="gray" highContrast={true} size="3">
                View My Resume (PDF)
              </Button>
            </Link>
          </>,
          0.4,
        )}
      </section>
      <div className={styles.socialBar}>
        {gitHubBtn}
        {linkedInBtn}
        {codePenBtn}
      </div>
    </main>
  );
}
