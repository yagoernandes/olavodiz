import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full md:flex-col items-center justify-between p-12 ">
      <div className="relative z-[-1] flex flex-col md:flex-row md:pt-12 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#f5ff3f] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="text-white flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-yellow-500 text-4xl">
              “<p className="text-2xl text-gray-500 font-bold mb-12">...</p>
            </div>

            <p className="text-gray-500 mt-4">Olavo de Carvalho</p>
          </div>
        </div>

        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] grayscale opacity-60 mask-gradient-bottom"
          src="/olavo.png"
          alt="Imagem de Olavo de Carvalho"
          width={360}
          height={37}
          priority
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        by: <a className="text-blue-600 hover:text-blue-800  cursor-pointer" href="https://www.instagram.com/yagoernandes">@YagoErnandes</a>
      </div>
    </main>
  );
}
