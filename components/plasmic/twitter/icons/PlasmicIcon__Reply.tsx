// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReplyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ReplyIcon(props: ReplyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.12 1.775l-3.284-.008h-.002c-3.462 0-6.175 2.713-6.175 6.177 0 3.244 2.523 5.704 5.91 5.834v3.03c0 .086.035.227.095.32a.59.59 0 00.819.181c.209-.133 5.124-3.278 6.403-4.359 1.506-1.274 2.406-3.143 2.409-4.997V7.94c-.005-3.458-2.716-6.165-6.175-6.166zm2.998 10.27c-.898.76-3.85 2.695-5.361 3.675v-2.523a.593.593 0 00-.594-.594h-.314c-2.897 0-5.001-1.96-5.001-4.66 0-2.797 2.191-4.988 4.987-4.988l3.283.007h.002c2.796 0 4.987 2.19 4.989 4.985-.003 1.512-.746 3.043-1.99 4.097h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ReplyIcon;
/* prettier-ignore-end */
