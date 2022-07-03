// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.46.008L6.177 0h-.002C2.712 0 0 2.713 0 6.177 0 9.42 2.522 11.88 5.91 12.01v3.03c0 .086.035.227.095.32a.59.59 0 00.818.181c.21-.133 5.125-3.277 6.403-4.359 1.506-1.274 2.407-3.143 2.41-4.997v-.013C15.63 2.715 12.92.008 9.46.007zm2.998 10.27c-.897.76-3.849 2.695-5.36 3.675V11.43a.593.593 0 00-.594-.594H6.19c-2.897 0-5.002-1.96-5.002-4.66 0-2.797 2.192-4.989 4.988-4.989l3.283.008h.001c2.797 0 4.988 2.19 4.99 4.985-.003 1.512-.746 3.043-1.99 4.097h-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
