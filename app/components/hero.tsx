'use client';

import { greatVibes } from "../constants/font";

const HeroSection = () => {
  return (
    <section>
      <div className="relative h-[500px] w-full flex items-end justify-center bg-cover bg-center sm:bg-[center_top_25%] bg-no-repeat bg-[url('https://ik.imagekit.io/gsozk5bngn/Wedding/Marquee/SHO07023_5YZY9XwCOH.jpg?updatedAt=1735456327972')]">
        <div className="absolute inset-0 opacity-50 bg-black" />
        <div className="z-20 w-fit h-fit overflow-hidden text-center py-8">
          <div className="flex flex-col items-center">
            <h1
              className={`${greatVibes.className} text-4xl sm:text-7xl font-semibold text-white`}
            >
              Bảo Châu
            </h1>
            <h1
              className={`${greatVibes.className} text-4xl sm:text-7xl font-semibold text-white`}
            >
              &
            </h1>
            <h1
              className={`${greatVibes.className} text-4xl sm:text-7xl font-semibold text-white`}
            >
              Ngọc Bảo
            </h1>
          </div>

          <h2
            className={`${greatVibes.className} text-base sm:text-3xl text-white py-3`}
          >
            Một hành trình mới bắt đầu. Hạnh phúc không phải là bến đỗ mà là con
            đường ta đang đi, đang vun đắp từng ngày
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
