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
      className="grid grid-cols-3 py-4 gap-3 cursor-pointer border-t text-gray-500 hover:text-gray-900 border-gray-500 hover:border-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex min-h-[80px] gap-4 items-center uppercase font-light overflow-hidden">
        <Image
          alt=""
          className={cx(
            'hidden sm:block w-[127px] h-[80px] rounded transition-all ease-in duration-500',
            !isHovered ? '-translate-x-[127px]' : 'translate-x-0',
          )}
          width={127}
          height={80}
          src={image}
        />
        <div
          className={cx(
            'text-sm sm:text-base transition-all duration-500 ease-in',
            !isHovered ? 'sm:-translate-x-[127px]' : 'translate-x-0',
          )}
        >
          {event}
        </div>
      </div>
      <div className="text-sm sm:text-base flex items-center font-light">{location}</div>
      <div className="text-sm sm:text-base flex items-center font-light whitespace-nowrap">{date}</div>
    </div>
  );
};

export default TimelineRow;
