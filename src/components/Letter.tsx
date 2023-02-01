"use client";

import {
  MAX_FROM_LENGTH,
  MAX_MESSAGE_LENGTH,
  MAX_TITLE_LENGTH,
} from "@/consts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Letter.module.css";

interface LetterProps {
  filledTitle: string;
  filledMessage: string;
  filledFrom: string;
}

export default function Letter({
  filledTitle = "",
  filledMessage = "",
  filledFrom = "",
}: LetterProps) {
  const isViewingSomebodyElsesLetter =
    !!filledTitle && !!filledMessage && !!filledFrom;
  const [title, setTitle] = useState(filledTitle);
  const [message, setMessage] = useState(filledMessage);
  const [from, setFrom] = useState(filledFrom);
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const isValid = (): boolean => {
    if (title.length > MAX_TITLE_LENGTH) {
      setErrorMsg("Your title field is too long!");
      return false;
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      setErrorMsg("Your message field is too long!");
      return false;
    } else if (from.length > MAX_FROM_LENGTH) {
      setErrorMsg("Your from field is too long!");
      return false;
    } else if (
      from.length === 0 ||
      message.length === 0 ||
      title.length === 0
    ) {
      setErrorMsg("You're missing a field!");
      return false;
    } else {
      setErrorMsg("");
    }
    return true;
  };

  const create = async (e: any) => {
    e.preventDefault();
    const isValidLetter = isValid();
    if (isValidLetter) {
      await fetch("http://127.0.0.1:8090/api/collections/letters/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, message, from }),
      });
      router.replace("/");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={create}>
        <div className={styles.formWrapper}>
          <input
            data-testid={"title-input"}
            readOnly={isViewingSomebodyElsesLetter}
            className={styles.titleInput}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrorMsg("");
            }}
          ></input>
          <textarea
            readOnly={isViewingSomebodyElsesLetter}
            className={styles.textArea}
            placeholder="message..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setErrorMsg("");
            }}
          ></textarea>
          <input
            readOnly={isViewingSomebodyElsesLetter}
            className={styles.fromInput}
            type="text"
            placeholder="your signature"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              setErrorMsg("");
            }}
          ></input>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.button} ${styles.backButton}`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              router.replace("/");
            }}
          >
            Back
          </button>
          {!isViewingSomebodyElsesLetter && (
            <button
              className={`${styles.button} ${styles.sendButton}`}
              type="submit"
            >
              Send letter
            </button>
          )}
        </div>
        {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
      </form>
    </div>
  );
}
