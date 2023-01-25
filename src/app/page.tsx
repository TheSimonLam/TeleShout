import CreateLetterButton from "@/components/CreateLetterButton";
import Link from "next/link";
import styles from "./page.module.css";

const getLetters = async () => {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/letters/records?page=1&perPage=30",
    { next: { revalidate: 5 } }
  );
  const data = await res.json();
  return data?.items as any[];
};

export default async function HomePage() {
  const letters = await getLetters();

  return (
    <div>
      {letters?.map((letter) => (
        <Link key={letter.id} href={`/letters/${letter.id}`}>
          <span className={styles.letter}>{"✉️"}</span>
        </Link>
      ))}
      <CreateLetterButton />
    </div>
  );
}
