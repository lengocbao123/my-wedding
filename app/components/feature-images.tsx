'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const FeatureImagesSection = () => {
  const images = [
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07102_kiGkZBBYx.JPG',
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07256_Zc70HAGIn.JPG?',
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO06925_cvLTVRqSwM.JPG',
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07443_RgVmKr4zq.JPG',
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07163_O9FjJwoHYM.JPG',
  ];

  return (
    <Marquee className="relative w-full flex overflow-hidden">
      {images.map((image, index) => (
        <div
          key={`section-1-${index}`}
          className="flex w-full h-full"
        >
          <Image
            className="h-full w-full object-cover"
            alt=""
            src={image}
            width={300}
            height={200}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default FeatureImagesSection;
