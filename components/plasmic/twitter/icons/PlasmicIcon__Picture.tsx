// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PictureIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PictureIcon(props: PictureIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.281 1.75H3.72a1.972 1.972 0 00-1.97 1.969V17.28c0 1.085.884 1.969 1.969 1.969H17.28a1.972 1.972 0 001.969-1.969V3.72a1.972 1.972 0 00-1.969-1.969zM3.72 3.063h13.56c.362 0 .657.294.657.656v8.466L14.562 8.81a.656.656 0 00-.464-.192h-.003a.647.647 0 00-.465.196L9.852 12.65l-1.586-1.58a.656.656 0 00-.464-.193c-.168-.026-.345.07-.468.199l-4.271 4.362V3.719c0-.362.294-.656.656-.656zm-.651 14.245l4.74-4.843 5.497 5.473H3.72a.655.655 0 01-.651-.63zm14.213.63h-2.117l-4.381-4.364 3.318-3.369 3.836 3.836v3.24a.658.658 0 01-.656.657z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M7.76 8.62a1.35 1.35 0 100-2.699 1.35 1.35 0 000 2.699z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PictureIcon;
/* prettier-ignore-end */
