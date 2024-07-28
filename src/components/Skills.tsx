import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

import Image1 from "../assets/imgs/auditor.png";
import Image2 from "../../public/imgs/book.png";
import Image3 from "../../public/imgs/claim.png";
import Image4 from "../../public/imgs/information-technology.png";
import Image5 from "../../public/imgs/planning.png";
import Image6 from "../../public/imgs/reinsurance.png";

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        Một số đặc trưng của FIS
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Hệ thống FIS có 180 màn hình tính tới version 1.0.6.71
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]">
        {/* {skills.map((skill) => (
          <a
            key={skill.link}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={skill.image}
              alt=""
            />
            <p className="text-center">{skill.title}</p>
          </a>
        ))} */}
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src="/imgs/reinsurance.png"
              alt="Image1"
            />
            <p className="text-center">Phòng tái: 29</p>
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src="/imgs/claim.png"
              alt="Image1"
            />
            <p className="text-center">Phòng claim: 42</p>
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src="/imgs/information-technology.png"
              alt="Image1"
            />
            <p className="text-center">Phòng IT: 135</p>
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src="/imgs/actuary.png"
              alt="Image1"
            />
            <p className="text-center">Phòng Actuary: 59</p>
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src="/imgs/planning.png"
              alt="Image1"
            />
            <p className="text-center">Phòng kế hoạch: 44</p>
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
            style={{marginLeft: '12px'}}
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src="/imgs/auditor.png"
              alt="Image1"
            />
            <p className="text-center">Phòng Auditor: 110</p>
          </a>
      </div>
      <img src="/quytac.png" alt="quytac" style={{marginTop: '16px'}}/>
    </div>
  );
};

export default Skills;
