import React, { useState } from "react";

interface TooltipProps {
  beforeClick?: string;
  afterClick?: string;
  className?: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  beforeClick = "Not Clicked",
  afterClick = "Clicked!",
  className,
  children,
}) => {
  const [value, setValue] = useState<string>(beforeClick);
  const [show, setShow] = useState<boolean>(false);

  const onClick = () => setValue(afterClick);
  const onHover = () => setShow(true);
  const onHoverLeave = () => setShow(false);

  return (
    <div
      className={`inline relative ${className}`}
      onClick={onClick}
      onMouseOver={onHover}
      onMouseLeave={onHoverLeave}
    >
      {children}
      {show && (
        <div className="absolute w-max text-sm py-1 px-1.5 left-[48%] translate-x-[-51%] bg-slate-900 text-white text-center -top-8 rounded-md animate-fadeUp duration-75">
          {value}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
