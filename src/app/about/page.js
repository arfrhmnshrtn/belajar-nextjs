import React from "react";
import Image from "next/image";
import aboutBanner from "public/abut-banner.jpeg";
import styles from "./page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className="">
      <div className={styles.imgContainer}>
        <Image
          fill={true}
          className="object-cover grayscale"
          src={aboutBanner}
          alt=""
        />
        <div className="absolute bottom-5 left-5 bg-green-400 text-white">
          <h1 className="text-2xl font-bold">Digital Storytellesrs</h1>
          <h2 className="text-xl font-bold">
            Handcrifting award wining digital experinces
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-16 mt-5 px-5 md:flex-nowrap">
        <div className="md:basis-1/2">
          <h1 className="font-bold text-4xl">Who Are We?</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, <br /> <br /> optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="md:basis-1/2">
          <h1 className="font-bold text-4xl">What We Do?</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations <br /> <br /> - Dynamic Websites <br /> - Fast and Handy <br /> - Mobile
            Apps
          </p>
          <button className="bg-green-400 px-4 py-2 mt-5 text-white">
            <Link href={'/contact'}>Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
