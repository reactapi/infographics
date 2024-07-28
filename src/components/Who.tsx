import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.png"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          DEMO Tuần 2 - Thời gian: 04/03/2024 - 15/03/2024
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          Người thực hiện: Nguyễn Văn Huỳnh <br />
          Phụ trách: anh Nguyễn Cao Nguyên <br />
          Tuần 1: Học cách sử dụng, thao tác cơ bản trên FIS <br />
          Tuần 2: Tìm hiểu một số màn hình FIS
        </p>
      </div>
    </div>
  );
};

export default Who;
