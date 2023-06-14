import Image from "next/image";
import React from "react";
import ilustration from "public/Illustration.png";
import website from "public/websites.jpg";
import apps from "public/apps.jpg";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="mt-5">
      <h1 className="md:text-8xl font-bold text-center text-4xl">Karya Kami</h1>
      <h3 className="md:text-5xl text-2xl text-center font-bold mt-3">Pilih Galeri</h3>
      <div className="flex gap-10 flex-wrap grid-cols-3 mt-5 w-full justify-center ">
        {/* <div>a</div>
        <div>a</div>
        <div>a</div> */}
        <Link
          href={"/portfolio/illustrations"}
          className="relative border-8 border-green-400"
        >
          <Image className="w-80 h-96 object-cover" src={ilustration} alt="ilustration" />
          <h1 className="absolute bottom-5 left-5 text-3xl text-white p-2 font-bold bg-green-400">
            Ilustration
          </h1>
        </Link>
        <Link
          href={"/portfolio/websites"}
          className="relative border-8 border-green-400"
        >
          <Image className="w-80 h-96 object-cover" src={website} alt="ilustration" />
          <h1 className="absolute bottom-5 left-5 text-3xl text-white p-2 font-bold bg-green-400">
            Websites
          </h1>
        </Link>
        <Link
          href={"/portfolio/applications"}
          className="relative border-8 border-green-400"
        >
          <Image className="w-80 h-96 object-cover" src={apps} alt="ilustration" />
          <h1 className="absolute bottom-5 left-5 text-3xl text-white p-2 font-bold bg-green-400">
            Aplicattion
          </h1>
        </Link>
      </div>
    </div>
  );
}
