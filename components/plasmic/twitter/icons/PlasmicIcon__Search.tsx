// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchIcon(props: SearchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "r-1re7ezh r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
      )}
      fill={"currentcolor"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.53 20.47l-3.66-3.66A8.98 8.98 0 0020 11a9 9 0 10-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 001.06 0 .747.747 0 00.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
        }
      ></path>
    </svg>
  );
}

export default SearchIcon;
/* prettier-ignore-end */
