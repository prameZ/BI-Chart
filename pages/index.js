import Link from "next/link";

const btnClass =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2";

const FirstPage = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Link href="/first/">
          <button className={btnClass}>1</button>
        </Link>

        <Link href="/second/">
          <button className={btnClass}>2</button>
        </Link>
      </div>
    </div>
  );
};
export default FirstPage;
