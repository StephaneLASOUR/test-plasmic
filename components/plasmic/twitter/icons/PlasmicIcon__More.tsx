// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoreIcon(props: MoreIconProps) {
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
          "M17.187 10.677c-1.005 0-1.823.82-1.823 1.823 0 1.003.817 1.823 1.823 1.823A1.826 1.826 0 0019.01 12.5a1.826 1.826 0 00-1.823-1.823zm0 2.604a.782.782 0 11.001-1.563.782.782 0 010 1.563zM12.5 10.677c-1.006 0-1.823.82-1.823 1.823 0 1.003.818 1.823 1.823 1.823a1.826 1.826 0 001.823-1.823 1.825 1.825 0 00-1.823-1.823zm0 2.604a.782.782 0 110-1.563.782.782 0 010 1.563zm-4.688-2.604c-1.005 0-1.823.82-1.823 1.823 0 1.003.818 1.823 1.823 1.823A1.826 1.826 0 009.635 12.5c0-1.004-.82-1.823-1.823-1.823zm0 2.604a.782.782 0 11.001-1.563.782.782 0 010 1.563z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12.5 23.698c-6.175 0-11.198-5.023-11.198-11.198 0-6.175 5.023-11.198 11.198-11.198 6.175 0 11.198 5.023 11.198 11.198 0 6.175-5.023 11.198-11.198 11.198zm0-20.833c-5.313 0-9.636 4.323-9.636 9.635 0 5.313 4.323 9.635 9.636 9.635 5.312 0 9.635-4.323 9.635-9.635 0-5.312-4.323-9.635-9.635-9.635z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoreIcon;
/* prettier-ignore-end */
