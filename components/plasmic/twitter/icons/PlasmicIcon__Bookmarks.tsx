// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarksIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarksIcon(props: BookmarksIconProps) {
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
          "M20.73 24.48a.787.787 0 01-.461-.15l-7.77-5.655-7.768 5.656A.781.781 0 013.49 23.7V5.833A2.347 2.347 0 015.832 3.49h13.332a2.347 2.347 0 012.343 2.343v17.865a.78.78 0 01-.781.781h.002zm-8.23-7.553a.77.77 0 01.458.15l6.99 5.086V5.834a.784.784 0 00-.781-.78H5.833a.784.784 0 00-.781.78v16.33l6.99-5.086a.77.77 0 01.458-.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookmarksIcon;
/* prettier-ignore-end */
