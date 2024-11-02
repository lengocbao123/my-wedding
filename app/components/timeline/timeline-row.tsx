'use client';
import { useState } from 'react';
import { cx } from 'class-variance-authority';
import Image from 'next/image';
const TimelineRow = ({
  event,
  location,
  date,
  image,
}: {
  event: string;
  location: string;
  date: string;
  image: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 py-4 cursor-pointer border-t text-gray-500 hover:text-gray-900 border-gray-500 hover:border-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex min-h-[80px] gap-4 items-center uppercase text-sm font-light overflow-hidden">
        <Image
          alt=""
          className={cx(
            'w-[127px] h-[80px] rounded transition-all ease-in duration-500',
            !isHovered ? '-translate-x-[127px]' : 'translate-x-0',
          )}
          width={127}
          height={80}
          src={image}
        />
        <div
          className={cx(
            'transition-all duration-500 ease-in',
            !isHovered ? '-translate-x-[127px]' : 'translate-x-0',
          )}
        >
          {event}
        </div>
      </div>
      <div className="flex items-center text-sm font-light">{location}</div>
      <div className="uppercase hidden sm:flex gap-3 items-center text-sm font-light">
        <div className="flex items-center text-sm font-light">{date}</div>
      </div>
    </div>
  );
};

export default TimelineRow;
