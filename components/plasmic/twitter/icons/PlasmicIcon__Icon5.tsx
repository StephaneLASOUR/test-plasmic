// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
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
          "M10.5 19.906c-5.187 0-9.406-4.219-9.406-9.406S5.313 1.094 10.5 1.094s9.406 4.219 9.406 9.406-4.219 9.406-9.406 9.406zm0-17.5c-4.463 0-8.094 3.631-8.094 8.094 0 4.463 3.631 8.094 8.094 8.094 4.463 0 8.094-3.632 8.094-8.094 0-4.463-3.632-8.094-8.094-8.094z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10.5 14.976a4.82 4.82 0 01-4.074-2.226.655.655 0 111.104-.708 3.517 3.517 0 002.97 1.623 3.521 3.521 0 002.972-1.622.654.654 0 01.907-.197.655.655 0 01.198.906A4.827 4.827 0 0110.5 14.98l-.001-.003zm2.396-5.407a1.293 1.293 0 100-2.586 1.293 1.293 0 000 2.586zm-4.792 0a1.293 1.293 0 100-2.586 1.293 1.293 0 000 2.586z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
