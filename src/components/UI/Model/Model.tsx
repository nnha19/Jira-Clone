import React, { useState } from "react";

import { createPortal } from "react-dom";

import Backdrop from "../Backdrop";
import ModelTitle from "./ModelTitle";

interface IProps {
  triggerBtn: JSX.Element;
  children: React.ReactNode;
  title: JSX.Element | string;
}

const Model = ({ triggerBtn, children, title }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ModelBtn = React.cloneElement(triggerBtn, {
    onClick: () => setIsOpen(true),
  });

  return (
    <>
      {ModelBtn}
      {isOpen &&
        createPortal(
          <div>
            <Backdrop onClick={() => setIsOpen(false)} show />
            <div className="fixed top-[50%] left-[50%] w-9/12 bg-white transform translate-x-[-50%] translate-y-[-50%]">
              <ModelTitle title={title} />
              <div className="p-4">{children}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Model;
