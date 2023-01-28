"use client";

import { useRouter } from "next/navigation";
import styles from "./CreateLetterButton.module.css";

export default function CreateLetterButton() {
  const router = useRouter();

  return (
    <div className={styles.createLetterButtonContainer}>
      <div
        onClick={(e) => {
          e.preventDefault();
          router.replace("/letters/new");
        }}
      >
        <div className={`${styles.button} ${styles.round}`}>
          <i className={styles.buttonText}>+</i>
          <span></span>
        </div>
      </div>
    </div>
  );
}
