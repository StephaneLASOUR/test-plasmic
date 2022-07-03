// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LikeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LikeIcon(props: LikeIconProps) {
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
          "M9.5 17.13h-.011c-2.045-.038-7.945-5.369-7.945-10.418 0-2.426 1.999-4.556 4.277-4.556 1.813 0 3.032 1.251 3.678 2.162.645-.91 1.864-2.162 3.678-2.162 2.28 0 4.278 2.13 4.278 4.557 0 5.047-5.901 10.378-7.946 10.415H9.5v.002zM5.822 3.345c-1.647 0-3.09 1.574-3.09 3.368 0 4.545 5.569 9.18 6.769 9.23 1.202-.05 6.769-4.685 6.769-9.23 0-1.794-1.444-3.368-3.09-3.368-2.002 0-3.12 2.324-3.129 2.347-.182.445-.915.445-1.098 0-.011-.024-1.128-2.347-3.13-2.347h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LikeIcon;
/* prettier-ignore-end */
