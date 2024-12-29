'use client';
import { useState } from 'react';

import { ColumnsPhotoAlbum, Photo } from 'react-photo-album';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'react-photo-album/columns.css';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Image from 'next/image';
import { greatVibes } from '../constants/font';
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/4bfb81a585613d3f647059_qVIFsQ6EA.jpg?updatedAt=1730508704220',
    width: 1920,
    height: 1280,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07396_vnHeM3AVe.jpg?updatedAt=1735456426552',
    height: 7008,
    width: 4672,
    alt: 'Purple petaled flowers near a mountain',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/61c6c9bbcd7f75212c6e61_KxTszEDD2.jpg?updatedAt=1730508708226',
    width: 482,
    height: 1023,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07508_2PCcNmZwm.jpg?updatedAt=1735456425512',
    height: 7008,
    width: 4672,
    alt: 'A person pointing at a beige map',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07443_mgzYHWWE5.jpg?updatedAt=1735456420822',
    height: 7008,
    width: 4672,
    alt: 'A silver and black coffee mug on a brown wooden table',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/lazada_run_2023_1_JCrI6ZyQ3.jpg?updatedAt=1735458056034',
    width: 2362,
    height: 1327,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07432_GBQLg6ODT.jpg?updatedAt=1735456426691',
    width: 7008,
    height: 4672,
    alt: 'Hiking boots',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07256_XW69zuv32.jpg?updatedAt=1735456413910',
    height: 7008,
    width: 4672,
    alt: 'A pine tree forest near a mountain at sunset',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07211_0Qgzzx6SX.jpg?updatedAt=1735456331656',
    width: 7008,
    height: 4672,
    alt: 'Silhouette photo of three hikers near tall trees',
  },

  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07197_WSjnosTx8.jpg?updatedAt=1735456330901',
    width: 4542,
    height: 6813,
    alt: 'A person sitting near a bonfire surrounded by trees',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07163_YopmCnEJV.jpg?updatedAt=1735456330128',
    width: 4294,
    height: 6442,
    alt: 'Green moss on gray rocks in a river',
  },

  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07116_kkam7SH6E.jpg?updatedAt=1735456328060',
    height: 7008,
    width: 4672,
    alt: 'A pathway between green trees during daytime',
  },

  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07102_V1Xp9RZhQ.jpg?updatedAt=1735456327644',
    width: 4341,
    height: 6512,
    alt: 'Green pine trees under white clouds during the daytime',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO06996-1_eKGSVNNXm.jpg?updatedAt=1735456326841',
    width: 7008,
    height: 4672,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07035_M_GKwS4eK.jpg?updatedAt=1735456328039',
    height: 7008,
    width: 4672,
    alt: 'Landscape photography of mountains',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/fdd401c10405bc5be51471_U8zAg_9eaB.jpg?updatedAt=1730508726324',
    width: 2522,
    height: 2560,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/004428d222169a48c30776_y0YQSFR7Z.jpg?updatedAt=1730508711415',
    width: 1920,
    height: 2560,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/3e430f33c51d7d43240c20_CRZ0jV5Ti.jpg?updatedAt=1730508705123',
    width: 1444,
    height: 2568,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/08cecbb0cf74772a2e6563_SNU02I8vB.jpg?updatedAt=1730508704673',
    width: 2560,
    height: 1706,
    alt: 'A hiker sitting near the cliff',
  },

  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/21fca44b6065d83b817410_bNddJHyFs.jpg?updatedAt=1730508707390',
    width: 1480,
    height: 2568,
    alt: 'A hiker sitting near the cliff',
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: asset,
      alt,
      width,
      height,
      srcSet: breakpoints.map(breakpoint => ({
        src: asset,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    } as Photo),
);

export default function App() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="bg-[#F2EDED] p-16 flex flex-col items-center space-y-4">
      <div className="flex">
        <h2
          className={`${greatVibes.className} text-center text-6xl text-black font-extrabold`}
        >
          Khoảnh khắc yêu thương
        </h2>
        <Image
          src={'https://media-public.canva.com/TxOBk/MAFZYqTxOBk/1/tl.png'}
          alt=""
          width={48}
          height={24}
        />
      </div>

      <p className="text-center">
        <strong> 03 năm</strong> không dài cũng không ngắn nhưng đủ để cả hai
        quyết định đi một chặng đường dài hơn có nhau và cùng nhau.
      </p>
      <ColumnsPhotoAlbum
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
