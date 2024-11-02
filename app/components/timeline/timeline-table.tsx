import React from 'react';
import TimelineRow from './timeline-row';
import Image from 'next/image';

const TimelineTable = () => {
  return (
    <div className="flex flex-col items-center p-16 gap-4">
      <h2 className='text-4xl text-black font-extrabold'>Cột mốc cuộc đời</h2>
      <Image alt="" width={48} height={58} src={'/icon.svg'} />
      <p>
        Thật hạnh phúc khi Bảo và Châu được thông báo Ngày Trọng Đại đến tất cả
        Quý họ hàng, bạn bè, đồng nghiệp, người quen,..
      </p>
    
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 py-4">
          <div className="uppercase text-base text-black font-light">
            Sự kiện
          </div>
          <div className="uppercase text-base text-black font-light">
            Địa điểm
          </div>
          <div className="hidden sm:block uppercase text-base text-black font-light">
            Thời gian
          </div>
        </div>
        <TimelineRow
          event="Tiệc cưới"
          date="08-01-2025"
          location="Tuy Hoà, Phú Yên"
          image="https://ik.imagekit.io/gsozk5bngn/Wedding/Bi%CC%80a-3_lkJOLr2cY0.jpeg"
        />
        <TimelineRow
          event="Lễ cưới"
          date="09-01-2025"
          image="https://ik.imagekit.io/gsozk5bngn/Wedding/tierra-huong-dan-trang-tri-ban-tho-gia-tien-dung-cach-cho-ngay-cuoi-5-cglKq32pxX_XvW1M2q39.jpg"
          location="Tuy Hoà, Phú Yên"
        />
        <TimelineRow
          event="Tiệc báo hỷ"
          date="22-02-2025"
          image="https://ik.imagekit.io/gsozk5bngn/Wedding/thomas-william-nAvodiKjbTM-unsplash_H73aPOoPW.jpg"
          location="Thành phố Hồ Chí Minh"
        />
      </div>
    </div>
  );
};

export default TimelineTable;
