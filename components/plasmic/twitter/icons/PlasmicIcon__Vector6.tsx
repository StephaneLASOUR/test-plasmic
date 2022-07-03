// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.956 14.974h-.01C5.9 14.936 0 9.604 0 4.555 0 2.13 1.999 0 4.277 0 6.09 0 7.31 1.25 7.955 2.161 8.6 1.252 9.82 0 11.633 0c2.28 0 4.278 2.13 4.278 4.556 0 5.048-5.901 10.379-7.946 10.416h-.009v.002zM4.278 1.188c-1.646 0-3.09 1.574-3.09 3.369 0 4.544 5.569 9.18 6.769 9.23 1.202-.05 6.769-4.685 6.769-9.23 0-1.795-1.443-3.369-3.09-3.369-2.001 0-3.12 2.325-3.129 2.348-.182.445-.915.445-1.098 0-.01-.024-1.128-2.348-3.13-2.348z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
