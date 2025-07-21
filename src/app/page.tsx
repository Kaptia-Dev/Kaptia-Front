// app/page.tsx or src/app/page.tsx (depends on your setup)
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { useRef } from "react";

export default function Home() {
  const whoAreWeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    whoAreWeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            DATOS QUE <span className={styles.highlight}>CULTIVAN</span> VENTAS
          </h1>
          <p
          className={styles.heroSubtitle}
          >
            Tu plataforma integral para la gestión y optimización de recursos
            agrícolas
          </p>
        </div>
        <button className={styles.arrowButton} onClick={scrollToSection}>
          <Image
            src="/arrow-down.png" // Make sure this file exists in /public
            alt="scroll down"
            width={24}
            height={24}
            className={styles.arrowIcon}
          />
        </button>
        <div className={styles.heroVisual}>
          <div className={styles.circle}></div>
        </div>
      </main>

      <section className={styles.whoAreWe} ref={whoAreWeRef}>
        <h1>¿Quiénes somos?</h1>
        <p>
          Somos un equipo de profesionales apasionados por la tecnología y la
          innovación, comprometidos en ofrecer soluciones que transformen la
          manera en que las personas interactúan con el mundo digital.
        </p>
      </section>
    </div>
  );
}
