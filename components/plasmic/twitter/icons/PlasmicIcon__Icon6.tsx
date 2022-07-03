// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#_-2cw_sJbema)"} fill={"#000"}>
        <path
          d={
            "M-33.163 15.75c-.087-.088-.087-.088-.087-.175.087 0 .087.088.087.175zM15.75 1.925h-1.137v-.262a.69.69 0 00-.7-.7.69.69 0 00-.7.7v.262H6.738v-.262a.69.69 0 00-.7-.7.69.69 0 00-.7.7v.262H4.2a2.166 2.166 0 00-2.188 2.188v11.462c0 1.225.963 2.188 2.188 2.188h2.537c.35 0 .7-.263.7-.7a.69.69 0 00-.7-.7H4.2a.877.877 0 01-.875-.875V6.913c0-.263.35-.613.875-.613h11.55c.525 0 .875.35.875.612v1.576c0 .35.262.7.7.7.35 0 .7-.263.7-.7V4.113c-.087-1.226-1.05-2.188-2.275-2.188zm.875 3.237c-.262-.087-.613-.175-.875-.175H4.2c-.35 0-.613.088-.875.175v-1.05c0-.525.438-.875.875-.875h1.138v.438c0 .35.262.7.7.7.35 0 .7-.263.7-.7v-.438H13.3v.438c0 .35.262.7.7.7.35 0 .7-.263.7-.7v-.438h1.05c.525 0 .875.438.875.875v1.05z"
          }
        ></path>

        <path
          d={
            "M13.562 9.1c-2.974 0-5.425 2.45-5.425 5.425 0 2.975 2.45 5.425 5.425 5.425 2.975 0 5.425-2.45 5.425-5.425 0-2.975-2.45-5.425-5.425-5.425zm0 9.625a4.108 4.108 0 01-4.112-4.113 4.108 4.108 0 014.112-4.112 4.108 4.108 0 014.113 4.113c0 2.187-1.838 4.112-4.113 4.112z"
          }
        ></path>

        <path
          d={
            "M16.538 16.363c-.088.175-.35.35-.526.35-.087 0-.262 0-.35-.088l-2.712-1.75V12.25c0-.35.263-.7.7-.7.35 0 .7.262.7.7v1.925l2.1 1.313c.175.175.262.524.088.875z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"_-2cw_sJbema"}>
          <path fill={"#fff"} d={"M0 0h21v21H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
