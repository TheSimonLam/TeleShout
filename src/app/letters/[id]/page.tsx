import Letter from "@/components/Letter";

const getLetter = async (letterId: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/letters/records/${letterId}`
  );
  const data = await res.json();
  return data;
};

export default async function LetterPage({ params }: any) {
  const letterId = params?.id !== "new" ? params?.id : undefined;
  const letter = letterId ? await getLetter(letterId) : undefined;
  return (
    <Letter
      filledTitle={letter?.title}
      filledMessage={letter?.message}
      filledFrom={letter?.from}
    ></Letter>
  );
}
