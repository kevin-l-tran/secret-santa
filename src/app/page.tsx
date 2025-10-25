export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen align-center bg-[url(/homepage_background.jpg)] bg-cover">
      <h1 className="text-8xl font-semibold text-[#bc4b40] font-sans-serif text-center">
        Secret Santa
      </h1>

      <nav className="flex flex-col">
        <button className="m-3 mt-10 p-3 text-lg font-semibold font-sans-serif rounded-lg text-white bg-[#376e53] text-center">
          Join Secret Santa Room
        </button>
        <button className="m-3 p-3 text-lg font-semibold font-sans-serif rounded-lg text-white bg-[#bc4a3f] text-center">
          Create Secret Santa Room
        </button>
      </nav>
    </div>
  );
}
