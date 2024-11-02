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
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07023_pzmFi0N65.JPG?updatedAt=1730508632364',
    width: 1080,
    height: 780,
    alt: 'Hiking boots',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07163_O9FjJwoHYM.JPG?updatedAt=1730508593816',
    width: 1080,
    height: 1620,
    alt: 'Purple petaled flowers near a mountain',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO06996_0B4KEe6wzH.JPG?updatedAt=1730508473734',
    width: 1080,
    height: 720,
    alt: 'A person pointing at a beige map',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/004428d222169a48c30776_y0YQSFR7Z.jpg?updatedAt=1730508711415',
    width: 1080,
    height: 1620,
    alt: 'A silver and black coffee mug on a brown wooden table',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/70b60e090bcdb393eadc67_Xm42ymczJ.jpg?updatedAt=1730508708788',
    width: 1080,
    height: 608,
    alt: 'A pine tree forest near a mountain at sunset',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/4bfb81a585613d3f647059_qVIFsQ6EA.jpg?updatedAt=1730508704220',
    width: 1080,
    height: 720,
    alt: 'Silhouette photo of three hikers near tall trees',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/51924a974f53f70dae4272_Woo3IkjpT.jpg?updatedAt=1730508711885',
    width: 1080,
    height: 1549,
    alt: 'A person sitting near a bonfire surrounded by trees',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/65cd557b9155290b70449_iB-OlGQwc.jpg?updatedAt=1730508707725',
    width: 1080,
    height: 720,
    alt: 'Green moss on gray rocks in a river',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07052_QAH6n4n5q.JPG?updatedAt=1730508473332',
    width: 1080,
    height: 694,
    alt: 'Landscape photography of mountains',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/ddbc693f6cfbd4a58dea66_QBg7sHueQ.jpg?updatedAt=1730508726260',
    width: 1080,
    height: 1620,
    alt: 'A pathway between green trees during daytime',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07432_W2eHfx6EO.JPG?updatedAt=1730508480687',
    width: 1080,
    height: 720,
    alt: 'A man wearing a black jacket and backpack standing on a grass field during sunset',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07508_f-kPSj2WbE.JPG?updatedAt=1730508593373',
    width: 1080,
    height: 1440,
    alt: 'Green pine trees under white clouds during the daytime',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07116_sR0UM-89A.JPG?updatedAt=1730508593190',
    width: 1080,
    height: 1620,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO06925_cvLTVRqSwM.JPG?updatedAt=1730508473585',
    width: 1080,
    height: 1620,
    alt: 'A hiker sitting near the cliff',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/08cecbb0cf74772a2e6563_SNU02I8vB.jpg?updatedAt=1730508704673',
    width: 1080,
    height: 810,
    alt: 'A tall mountain with a waterfall running down its side',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07214_fn-hJlteC.JPG?updatedAt=1730508477064',
    width: 1080,
    height: 595,
    alt: 'Blue mountains',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07129_Vx6j7nLJ_.JPG?updatedAt=1730508476543',
    width: 1080,
    height: 595,
    alt: 'Blue mountains',
  },
  {
    asset:
      'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07102_kiGkZBBYx.JPG?updatedAt=1730508473796',
    width: 1080,
    height: 1620,
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
    <div className="bg-[#f3f4e7] p-16 flex flex-col items-center space-y-4">
      <div className="flex">
        <h2 className="text-center text-4xl text-black font-extrabold">Our love moments</h2>
        <Image
          src={'https://media-public.canva.com/TxOBk/MAFZYqTxOBk/1/tl.png'}
          alt=""
          width={48}
          height={24}
        />
      </div>

      <p className='text-center'>
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
