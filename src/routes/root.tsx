import React from "react";
import { Outlet } from "react-router-dom";

import { RiRoadMapLine } from "react-icons/ri";
import { HiBookOpen } from "react-icons/hi";
import { TfiBook } from "react-icons/tfi";
import { TbFileReport } from "react-icons/tb";
import { FaBoxTissue } from "react-icons/fa";

import Appbar from "../components/Common/Appbar/Appbar";
import Typography from "../components/UI/Typography";

const sidebarLinks = [
  { text: "Roadmap", icon: <RiRoadMapLine /> },
  { text: "Backlog", icon: <HiBookOpen /> },
  {
    text: "Active sprints",
    icon: <TfiBook />,
  },
  { text: "Reports", icon: <TbFileReport /> },
  { text: "Issues", icon: <FaBoxTissue /> },
];

export default function Root() {
  return (
    <>
      <Appbar />
      <div className="flex">
        <div className="w-64 bg-[#FAFBFC] border-r-2">
          <div className="p-2 ">
            <div className="p-4">
              <Typography variant="header">Jira Clone</Typography>
              <Typography className="text-[12px] text-[#6B778C]">
                Software Project
              </Typography>
            </div>
            <div className="bg-primary-light rounded p-2">
              {sidebarLinks.map(({ text, icon }) => (
                <button className="w-full p-2 hover:bg-primary-light rounded flex items-center text-textPrimary text-md">
                  {React.cloneElement(icon, { className: "text-xl" })}
                  <Typography className="ml-4">{text}</Typography>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
