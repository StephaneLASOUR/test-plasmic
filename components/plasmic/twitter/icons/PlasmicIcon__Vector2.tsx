// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 12 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.422 4.982l-5-4.75a.865.865 0 00-1.178 0l-5 4.75a.764.764 0 000 1.119.852.852 0 00.589.232.852.852 0 00.59-.232L5 2.702v9.964c0 .438.372.792.833.792.46 0 .833-.354.833-.792V2.702l3.578 3.399a.852.852 0 00.589.232.852.852 0 00.59-.232.764.764 0 000-1.12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
