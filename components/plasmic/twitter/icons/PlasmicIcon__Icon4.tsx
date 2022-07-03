// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
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
          "M17.694 8.015h-1.167a1.47 1.47 0 00.024-.242V5.749c0-.858-.697-1.555-1.555-1.555H3.062V2.938a.656.656 0 00-1.312 0v15.288a.656.656 0 101.313 0v-1.255h9.236c.857 0 1.556-.697 1.556-1.554v-2.024c0-.083-.013-.164-.025-.244h3.865c.858 0 1.556-.698 1.556-1.555V9.573c0-.86-.698-1.558-1.556-1.558zm-2.696-2.509c.133 0 .242.109.242.243V7.77c0 .135-.11.245-.243.245H3.063V5.504h11.934v.002zm-2.457 7.888v2.023a.243.243 0 01-.243.242H3.062v-2.51H12.3c.134 0 .242.11.242.246v-.001zm5.396-1.8a.242.242 0 01-.243.242H3.063V9.328h14.631c.134 0 .244.108.244.242v2.024z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
