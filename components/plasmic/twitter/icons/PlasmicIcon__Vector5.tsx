// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 19 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.809 9.318a.593.593 0 00-.84 0l-1.757 1.758V2.969A2.972 2.972 0 0013.243 0h-4.63a.594.594 0 000 1.188h4.63c.982 0 1.782.8 1.782 1.781v8.107l-1.758-1.758a.593.593 0 10-.839.84l2.77 2.77a.586.586 0 00.42.174.586.586 0 00.42-.174l2.77-2.77a.591.591 0 000-.84zm-8.44 2.597H5.74c-.982 0-1.782-.8-1.782-1.781V2.027l1.758 1.758a.595.595 0 00.84 0 .593.593 0 000-.84L3.785.175a.592.592 0 00-.84 0l-2.77 2.77a.593.593 0 10.84.84L2.77 2.027v8.107a2.972 2.972 0 002.969 2.968h4.631a.594.594 0 000-1.187h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
