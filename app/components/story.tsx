'use client';
import Image from 'next/image';
import { greatVibes } from '../constants/font';

const Story = ({}) => {
  return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[url('https://ik.imagekit.io/gsozk5bngn/Wedding/bg_u5Nz57l79.png')] p-12 overflow-hidden h-[800px]">
          <div className="col-span-1 flex flex-col items-start justify-center gap-4">
            <h2
              className={`${greatVibes.className} text-center text-6xl text-black font-extrabold`}
            >
              Câu chuyện
            </h2>
            <p className="text-black">
              Mọi chuyện bắt đầu từ một cuộc gặp gỡ bạn bè rất bình thường,
              nhưng lại trở thành một điều không thể thiếu trong cuộc sống của
              cả hai. Sau bao nhiêu buổi hẹn hò, những cột mốc lớn nhỏ, hành
              trình ấy đã dẫn chúng ta đến đây.
            </p>
            <div className="bg-stone-300 rounded-lg py-1 px-2">
              Rất cảm ơn bạn N*** đã kéo hai đứa lại với nhau.
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="relative flex items-end justify-end">
              <div className="h-96 w-96 bg-[#c5d0d7] -rotate-[20deg] hidden sm:block"></div>
              <Image
                className="h-auto sm:h-[436px] w-full sm:w-[436px] max-w-[436px] border-0 rounded sm:border-[20px] static sm:absolute inset-0"
                src={
                  'https://ik.imagekit.io/gsozk5bngn/Wedding/Copy%20of%20SHO07052_QAH6n4n5q_5sbNergSG.JPG'
                }
                alt=""
                width={346}
                height={346}
              />
              <div className="w-fit h-18 p-4 bg-[#c4d7e7]/60 z-1 right-0 absolute z-10 -bottom-20  items-center justify-center hidden sm:flex whitespace-nowrap">
                <h2 className={`${greatVibes.className} text-4xl font-bold`}>
                  We&apos;re getting married
                </h2>
              </div>
            </div>
          </div>

          <Image
            className="absolute z-10"
            height={600}
            width={300}
            alt=""
            src="https://ik.imagekit.io/gsozk5bngn/Wedding/invitation-left-img_13syK4oDa.png"
          />
          <Image
            className="absolute z-10 bottom-0 right-0"
            height={629}
            width={495}
            alt=""
            src="https://ik.imagekit.io/gsozk5bngn/Wedding/invitation-right-image_7wG9RMgBa.png"
          />
        </div>
  );
};
export default Story;
