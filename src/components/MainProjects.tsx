import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { allDataType } from "../shared/types";

interface MainProjectsProps {
  projects: allDataType["projects"];
}

const MainProjects: FC<MainProjectsProps> = ({ projects }) => {
  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">Một số màn hình FIS đã nghiên cứu</h1>
      {/* {projects.map((project, index) => (
        <div
          key={project.id}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            index % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src={project.image.url}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{project.title}</h1>
            <p className="text-[20px] text-justify my-3">
              {project.description}
            </p>
          </div>
        </div>
      ))} */}

        {/* 10015 */}
        <div
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src="/10015-hinh1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">Màn hình 10015. Employee Management</h1>
            <p className="text-[20px] text-justify my-3">
              Màn hình quản lý nhân viên Fubon
            </p>
          </div>
        </div>

        {/* 10011 */}

        <div
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row-reverse`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src="/10015-hinh1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">Màn hình 10011. User Management</h1>
            <p className="text-[20px] text-justify my-3">
              Màn hình quản lý tài khoản User
            </p>
          </div>
        </div>

        {/* 50001 */}
        <div
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src="/10015-hinh1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">Màn hình 50001. Expired Policy</h1>
            <p className="text-[20px] text-justify my-3">
              Màn hình quản lý Expired Policy - Hợp đồng hết hạn
            </p>
          </div>
        </div>

        {/* 65030 */}
        <div
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row-reverse`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src="/10015-hinh1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">Màn hình 65030. Direct Loss Ratio</h1>
            <p className="text-[20px] text-justify my-3">
              Màn hình quản lý Direct Loss Ratio - Tỷ lệ tổn thất trực tiếp
            </p>
          </div>
        </div>

        {/* 00100 */}
        <div
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src="/10015-hinh1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">Màn hình 00100. Manual Voucher</h1>
            <p className="text-[20px] text-justify my-3">
              Màn hình Manual Voucher - quản lý chứng từ
            </p>
          </div>
        </div>
        
        {/* 83008 */}
        <div
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row-reverse`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src="/10015-hinh1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">Màn hình 83008. E-Sign Management</h1>
            <p className="text-[20px] text-justify my-3">
              Màn hình E-Sign Management - quản lý chữ ký điện tử
            </p>
          </div>
        </div>
    </>
  );
};

export default MainProjects;
