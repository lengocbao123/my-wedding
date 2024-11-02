'use client';

const HeroSection = () => {
  return (
    <section>
      <div className="relative h-[500px] w-full flex items-end justify-center bg-cover bg-center sm:bg-[center_top_25%] bg-no-repeat bg-[url('https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07023_pzmFi0N65.JPG?updatedAt=1730508632364')]">
        <div className="absolute inset-0 opacity-50 bg-black"/>
        <div className="z-20 w-fit h-fit overflow-hidden text-center py-8">
          <h1 className="text-4xl sm:text-6xl font-semibold text-white">
            The destination
          </h1>
          <h1 className="text-4xl sm:text-6xl font-semibold text-white">
            for your next one
          </h1>
          <h2 className="text-base sm:text-lg text-white py-3">
            HAFH IS A DISCOVERY PLATFORM FOR THE MODERN TRAVELER
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
