// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 22 21"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.104 8.822l-5.383-2.1-2.07-6.23a.72.72 0 00-1.365 0l-2.07 6.229-5.386 2.1a.72.72 0 00.001 1.34l5.386 2.1 2.07 6.23a.72.72 0 001.364 0l2.07-6.23 5.386-2.1a.72.72 0 000-1.339h-.003zm-6.22 2.224a.717.717 0 00-.42.44l-1.496 4.5-1.495-4.498a.721.721 0 00-.42-.442L7.072 9.493l3.98-1.554c.2-.077.355-.24.422-.443L12.97 3l1.495 4.498c.067.203.22.366.42.444l3.982 1.552-3.982 1.555v-.002zM5.668 2.407H3.865V.72a.72.72 0 00-1.438 0v1.688H.72a.719.719 0 000 1.438h1.708v1.688a.719.719 0 001.437 0V3.845h1.802a.718.718 0 100-1.438zm2.429 14.971H7.042v-.973a.718.718 0 10-1.438 0v.973H4.62a.719.719 0 000 1.438h.987v.974a.718.718 0 101.438 0v-.974h1.052a.719.719 0 000-1.438z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
