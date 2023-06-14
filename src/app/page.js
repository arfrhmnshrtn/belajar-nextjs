import Image from "next/image";
import hero from "../../public/hero.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex justify-between flex-col content-center h-screen px-10 md:mx-0 md:flex-row">
      <div className="text-title flex flex-col justify-center pt-10">
        <h1 className="font-extrabold text-5xl text-center md:w-6/12 md:text-left">
          Desain Lebih Baik untuk Produk Digital Anda{" "}
          <span className="text-green-400">.</span>
        </h1>
        <p className="mt-5 md:w-6/12 font-normal text-center md:text-left">
          Mengubah ide Anda menjadi kenyataan. Kami menyatukan tim dari industri
          teknologi global.
        </p>
        <button className="mt-10 text-center md:text-start">
          <Link href="/" className=" w-auto p-3 bg-green-400 text-white">
            See Our Works
          </Link>
        </button>
      </div>
      <div className="flex flex-col justify-center ">
        <Image width={500} height={500} src={hero} alt="hero image" />
      </div>
    </div>
  );
}
