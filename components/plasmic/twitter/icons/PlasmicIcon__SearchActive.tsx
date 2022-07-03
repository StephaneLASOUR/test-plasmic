// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchActiveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchActiveIcon(props: SearchActiveIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
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
          "M22.06 19.94l-3.73-3.73A8.94 8.94 0 0020 11a9 9 0 10-9 9 8.95 8.95 0 005.21-1.67l3.73 3.73c.292.294.676.44 1.06.44s.768-.146 1.06-.44a1.498 1.498 0 000-2.12zM11 17c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6z"
        }
      ></path>
    </svg>
  );
}

export default SearchActiveIcon;
/* prettier-ignore-end */
