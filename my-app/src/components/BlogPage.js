import React from "react";

import clockIcon from "../foto/clockicon.png";
import antDesignIcon from "../foto/ant-design.png";
import arrowImg from "../foto/arrow-right.png";
import { BlogePageData } from "../data/BlogPageData";

const BlogPage = () => {
  return (
    <div className="blog flex px-52 py-0 flex-wrap justify-center items-center">
      <div className="container flex flex-wrap items-center justify-center gap-20 py-40 px-0">
        {BlogePageData.map((item) => (
          <div
            key={item.id}
            className="row flex justify-center items-center gap-8"
          >
            <div className="col-md-6 flex flex-col items-center">
              <div className="content-card flex flex-col items-center bg-custom-white shadow-[0_2px_4px_0px_rgba(0,0,0,0.10)] w-[30rem] ">
                <div className="self-stretch relative">
                  <img className="w-[30rem]" src={item.img} />
                  <div className="tag absolute top-5 left-5 inline-flex items-center py-1 px-3 bg-[#E74040] rounded">
                    <h6 className="font-montserrat font-bold tracking-[0.0125rem] text-sm text-custom-white">
                      NEW
                    </h6>
                  </div>
                </div>
                <div className="frame-3 flex flex-col items-start gap-6 py-7 pr-8 ">
                  <div className="tags flex items-center gap-4">
                    <p className="font-montserrat font-normal text-xs tracking-[0.0125rem] text-[#8EC2F2]">
                      Google
                    </p>
                    <p className="font-montserrat font-normal text-xs tracking-[0.0125rem] text-custom-gray">
                      Trending
                    </p>
                    <p className="font-montserrat font-normal text-xs tracking-[0.0125rem] text-custom-gray">
                      New
                    </p>
                  </div>
                  <h4 className="font-montserrat text-lg font-normal tracking-[0.0125rem] text-[#252B42] w-10/12 ">
                    {item.title}
                  </h4>
                  <p className="font-montserrat text-sm font-normal tracking-[0.0125rem] text-custom-gray w-[17.5rem]">
                    {item.description}
                  </p>
                  <div className="frame-1 flex py-4 items-center self-stretch justify-between">
                    <div className="frame flex items-center gap-4">
                      <img src={clockIcon} alt="Clock Icon" />
                      <p className="font-montserrat text-xs font-normal tracking-[0.0125rem] text-custom-gray">
                        {item.date}
                      </p>
                    </div>
                    <div className="frame flex items-center gap-2">
                      <img src={antDesignIcon} alt="Ant Design Icon" />
                      <p className="font-montserrat text-xs font-normal tracking-[0.0125rem] text-custom-gray">
                        {item.comments} comments
                      </p>
                    </div>
                  </div>
                  <a className="flex items-center gap-3">
                    <h6 className="tex-sm font-montserrat font-bold tracking-[0.0125rem] text-custom-gray">
                      Learn More
                    </h6>
                    <img src={arrowImg} alt="Arrow Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
