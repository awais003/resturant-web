"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "../../data/galleryData";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";
import { Lightbox } from "./Lightbox";

const spanClasses = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export const Gallery = () => {
  const [index, setIndex] = useState(null);

  return (
    <section
      id="gallery"
      className="border-y border-white/5 bg-[var(--surface)] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A Glimpse of Lumière"
            subtitle="Plates, people, and the atmosphere that surrounds them."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[150px] grid-flow-row-dense grid-cols-2 gap-3 md:auto-rows-[190px] md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, i) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${image.alt}`}
              className={`group relative overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] ${
                spanClasses[i % spanClasses.length]
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <Lightbox
          images={galleryImages}
          index={index}
          onClose={() => setIndex(null)}
          onNavigate={setIndex}
        />
      )}
    </section>
  );
};
