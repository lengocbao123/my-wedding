'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const FeatureImagesSection = () => {
  const images = [
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07035_M_GKwS4eK.jpg?updatedAt=1735456328039',
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07443_mgzYHWWE5.jpg?updatedAt=1735456420822',
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07508_2PCcNmZwm.jpg?updatedAt=1735456425512',
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07116_kkam7SH6E.jpg?updatedAt=1735456328060',
    'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07163_YopmCnEJV.jpg?updatedAt=1735456330128',
  ];

  return (
    <Marquee className="relative w-full flex overflow-hidden">
      {images.map((image, index) => (
        <div key={`section-1-${index}`} className="flex w-full h-full">
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
