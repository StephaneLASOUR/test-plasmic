// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
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
          "M16.625 9.188V7.7h-3.85v5.6h1.488v-1.75h1.75v-1.488h-1.75v-.874h2.362zM10.238 7.7h1.487v5.6h-1.487V7.7zm-3.15 1.4c.35 0 .787.175 1.05.438l1.05-.876a2.795 2.795 0 00-2.1-.962 2.764 2.764 0 00-2.8 2.8c0 1.575 1.225 2.8 2.8 2.8.875 0 1.575-.35 2.1-.963V10.15h-2.45v1.05h1.05v.525a1.648 1.648 0 01-.7.175c-.788 0-1.4-.613-1.4-1.4 0-.7.612-1.4 1.4-1.4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.938 1.768H3.063a1.97 1.97 0 00-1.97 1.966v13.568a1.97 1.97 0 001.97 1.965h14.874a1.97 1.97 0 001.97-1.965V3.734a1.97 1.97 0 00-1.97-1.966zm.656 15.534a.656.656 0 01-.657.653H3.063a.656.656 0 01-.656-.653V3.734c0-.36.294-.654.656-.654h14.876c.362 0 .656.293.656.654v13.568z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
