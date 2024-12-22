import Image from 'next/image';
import { greatVibes } from '../constants/font';

const Story = ({}) => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[url('https://ik.imagekit.io/gsozk5bngn/Wedding/bg_u5Nz57l79.png')] p-12 overflow-hidden h-[800px]">
      <Image
        className="absolute -left-[100px] -top-2 hidden sm:block"
        src="/flower-1.png"
        alt=""
        width={346}
        height={346}
      />
      <div className="col-span-1 flex flex-col items-start justify-center gap-4">
        <h2 className={`${greatVibes.className} text-center text-6xl text-black font-extrabold`}>Câu chuyện</h2>
        <p className="text-black">
          5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho
          chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và
          cùng nỗ lực vượt qua những khó khăn trong cuộc sống.
        </p>
        <div className="bg-stone-300 rounded-lg py-1 px-2">
          Rất cảm ơn bạn N giấu tên với cuộc hện bất ngờ vào một chiều chủ nhật
          . . .
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
            <h2 className={`${greatVibes.className} text-4xl font-bold`}>We&apos;re getting married</h2>
          </div>
        </div>
      </div>

      <Image
        className="absolute -right-[100px] transform -scale-x-[1] hidden sm:block"
        src="/flower-1.png"
        alt=""
        width={346}
        height={346}
      />

      <Image
        className="absolute -right-[90px] top-[400px] hidden sm:block"
        src="/snow.png"
        alt=""
        width={180}
        height={128}
      />
    </div>
  );
};
export default Story;
