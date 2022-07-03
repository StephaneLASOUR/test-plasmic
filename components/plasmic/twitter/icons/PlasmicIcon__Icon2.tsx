// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
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
          "M21.875 7.643h-4.094l.388-4.45a.782.782 0 00-.71-.846.783.783 0 00-.846.711l-.4 4.584H9.63l.386-4.448a.782.782 0 00-.709-.847.782.782 0 00-.847.711l-.398 4.584H3.94a.782.782 0 000 1.562h3.987l-.573 6.59H3.125a.782.782 0 000 1.563h4.094l-.388 4.45a.782.782 0 00.71.846l.07.003a.781.781 0 00.776-.714l.4-4.584h6.583l-.386 4.448a.783.783 0 00.71.847l.07.003a.781.781 0 00.777-.714l.398-4.584h4.121c.43 0 .782-.35.782-.78a.783.783 0 00-.782-.782h-3.987l.573-6.59h4.229a.782.782 0 000-1.563zm-6.37 8.152H8.922l.573-6.59h6.583l-.573 6.59z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
