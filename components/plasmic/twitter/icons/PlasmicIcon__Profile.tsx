// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProfileIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProfileIcon(props: ProfileIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.5 12.308c1.411 0 2.992-.156 4-1.308.848-.969 1.123-2.467.84-4.575-.396-2.943-2.206-4.7-4.84-4.7S8.056 3.482 7.66 6.427c-.283 2.106-.008 3.604.84 4.573 1.008 1.153 2.588 1.308 4 1.308zM9.208 6.633c.17-1.25.82-3.345 3.292-3.345s3.123 2.096 3.292 3.345c.215 1.615.059 2.737-.47 3.339-.473.542-1.318.774-2.822.774s-2.349-.232-2.823-.774c-.528-.602-.684-1.725-.469-3.339zm11.917 13.405c-.914-3.673-4.46-6.24-8.625-6.24s-7.712 2.567-8.625 6.24c-.18.72-.03 1.458.411 2.02a2.271 2.271 0 001.806.855h12.816a2.27 2.27 0 001.805-.855 2.33 2.33 0 00.41-2.02h.002zm-1.642 1.058c-.131.166-.329.256-.575.256H6.092c-.245 0-.444-.088-.575-.256a.784.784 0 01-.125-.681c.74-2.974 3.663-5.052 7.108-5.052s6.369 2.077 7.108 5.052c.063.252.018.5-.125.68z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ProfileIcon;
/* prettier-ignore-end */
