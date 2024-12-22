'use client';

import { greatVibes } from '../constants/font';
import { Calendar } from '@/components/ui/calendar';
import { differenceInDays } from 'date-fns';
import { CalendarIcon, MapPin } from 'lucide-react';
import Image from 'next/image';

export const CalendarSection = () => {
  const totalDays = differenceInDays(
    new Date('2025-02-22T00:00:00'),
    new Date(Date.now()),
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:p-28 bg-[url('https://ik.imagekit.io/gsozk5bngn/Wedding/bg_u5Nz57l79.png')] gap-10 relative">
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
      <div className="p-8 bg-white ">
        <div className="h-[480px] w-full flex items-center justify-center flex-col border-4 border-[#c89d9c] space-y-5 p-4">
          <h3 className={`${greatVibes.className} text-5xl`}>Save the Date</h3>
          <p>For the wedding of</p>
          <h3 className="text-2xl">Ngọc Bảo & Bảo Châu</h3>
          <p className="text-lg">
            Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có
            thêm một niềm hạnh phúc!
          </p>

          <div className="w-full">
            <p>
              <strong>Thời gian</strong>: 19h00 22 Tháng 2 Năm 2025
            </p>
            <p>
            <strong>Địa điểm</strong>: Trung Tâm Hội Nghị - Tiệc Cưới Riverside Palace, 360D Đ. Bến Vân
              Đồn, Phường 1, Quận 4, Hồ Chí Minh.
            </p>
          </div>
        </div>
      </div>
      <div className="p-8 bg-white ">
        <div className="h-[480px] w-full flex items-center justify-center flex-col border-[5px] border-[#c89d9c]">
          <Calendar
            mode="single"
            disableNavigation
            defaultMonth={new Date('2025-02-28T00:00:00')}
            selected={new Date('2025-02-22T00:00:00')}
            className="border-0"
          />

          <div
            className={`${greatVibes.className} w-full border-t flex justify-center items-center gap-6`}
          >
            <p className="text-2xl">Cùng nhau đếm ngược</p>
            <p className={`text-6xl`}>{totalDays}</p>
            <p className="text-2xl">ngày</p>
          </div>
        </div>
      </div>
    </div>
  );
};
