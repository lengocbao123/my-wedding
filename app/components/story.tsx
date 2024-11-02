import Image from 'next/image';

const Story = ({}) => {
  return (
    <div className="grid grid-cols-3 bg-[#f3f4e7] p-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl text-black font-extrabold">18 năm</h2>
        <p className="text-black">
          là khoảng thời gian mà hai đứa quen biết nhau, là hai người bạn cũ đã
          lâu không liên lạc cho tới một ngày một người bạn kéo cả hai lại...
        </p>
        <div className="bg-stone-300 rounded-lg py-1 px-2">
          Rất cảm ơn bạn 2 bạn N giấu tên . . .
        </div>
      </div>
      <div className="col-span-2 space-x-4">
        <div className="flex justify-end">
          <Image
            className="h-[400px] w-auto rounded-lg"
            alt=""
            src={
              'https://ik.imagekit.io/gsozk5bngn/Wedding/width_1066_oF17DE8AS.webp'
            }
            width={1066}
            height={1599}
          />
        </div>
        <div className="flex justify-center -mt-16">
          <Image
            className="h-[400px] w-auto rounded-lg"
            alt=""
            src={
              'https://ik.imagekit.io/gsozk5bngn/Wedding/bao_CwheqUDmC'
            }
            width={1066}
            height={1599}
          />
        </div>
      </div>
    </div>
  );
};
export default Story;
