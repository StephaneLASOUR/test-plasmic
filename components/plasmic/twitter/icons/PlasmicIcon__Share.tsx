// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareIcon(props: ShareIconProps) {
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
          "M13.878 5.914L9.92 1.955a.593.593 0 00-.84 0L5.122 5.914a.593.593 0 10.84.84l2.944-2.946v8.067a.594.594 0 001.188 0V3.808l2.945 2.945a.59.59 0 00.839 0 .593.593 0 000-.84z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.602 17.372H3.398c-1 0-1.815-.814-1.815-1.814v-4.475a.594.594 0 011.188 0v4.475c0 .346.28.627.627.627h12.204a.627.627 0 00.627-.627v-4.475a.594.594 0 011.188 0v4.475c0 1-.814 1.814-1.815 1.814z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShareIcon;
/* prettier-ignore-end */
