// app/page.tsx or src/app/page.tsx (depends on your setup)
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
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
          <p className={styles.heroSubtitle}>
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
        <div className={styles.whoAreWeLeft}>
          <div className={styles.whoAreWeHeaderContainer}>
            <h1 className={styles.whoAreWeTitle}>¿Quiénes somos?</h1>
          </div>
          <div className={styles.whoAreWeDescriptionContainer}>
            <p className={styles.whoAreWeDescription}>
              Tu mejor opción de agente inteligente para impulsar la venta de
              fertilizantes orgánicos a base de sargazo. Utilizamos datos y
              análisis inteligente para prospectar clientes y hacer seguimiento
              a cada venta.
            </p>
          </div>
        </div>
        <div className={styles.whoAreWeRight}>
          <div className={styles.leftDecoContainer}>
            <Image
              src="/left-deco.png"
              alt="left decoration"
              width={100}
              height={100}
              className={styles.leftDeco}
            />
          </div>
          <div className={styles.rightDecoContainer}>
            <Image
              src="/right-deco.png"
              alt="right decoration"
              width={100}
              height={100}
              className={styles.rightDeco}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
