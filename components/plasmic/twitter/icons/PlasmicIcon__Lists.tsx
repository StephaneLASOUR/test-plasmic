// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListsIcon(props: ListsIconProps) {
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
          "M20.573 22.917H4.427a2.347 2.347 0 01-2.344-2.344V4.427a2.347 2.347 0 012.344-2.344h16.146a2.347 2.347 0 012.344 2.344v16.146a2.347 2.347 0 01-2.344 2.344zM4.427 3.646a.782.782 0 00-.781.781v16.146c0 .43.35.781.781.781h16.146a.782.782 0 00.781-.781V4.427c0-.43-.35-.781-.781-.781H4.427z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.708 9H7.292a.782.782 0 010-1.563h10.416a.78.78 0 110 1.563zm0 4.281H7.292a.782.782 0 010-1.562h10.416a.782.782 0 010 1.562zM12.5 17.562H7.292a.78.78 0 110-1.562H12.5a.782.782 0 010 1.563z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ListsIcon;
/* prettier-ignore-end */
