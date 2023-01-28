"use client";

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
    filledTitle && filledMessage && filledFrom;
  const [title, setTitle] = useState(filledTitle);
  const [message, setMessage] = useState(filledMessage);
  const [from, setFrom] = useState(filledFrom);

  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/letters/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, message, from }),
    });

    setTitle("");
    setMessage("");
    setFrom("");
    router.refresh();
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={create} className={styles.formWrapper}>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <textarea
          className={styles.textArea}
          placeholder="content"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <input
          className={styles.fromInput}
          type="text"
          placeholder="from"
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        ></input>
        {!isViewingSomebodyElsesLetter && (
          <button type="submit">Send letter</button>
        )}
      </form>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          router.replace("/");
        }}
      >
        Back
      </button>
    </div>
  );
}
