"use client";

import { useRouter } from "next/navigation";
import styles from "./CreateLetterButton.module.css";

export default function CreateLetterButton() {
  const router = useRouter();

  return (
    <div className={styles.createLetterButtonContainer}>
      <div
        className={`${styles.buttonContainer} ${styles.left}`}
        onClick={(e) => {
          e.preventDefault();
          router.replace("/letters/new");
        }}
      >
        <div className={`${styles.button} ${styles.round}`}>
          <i>+</i>
          <span></span>
        </div>
      </div>
    </div>
  );
}
