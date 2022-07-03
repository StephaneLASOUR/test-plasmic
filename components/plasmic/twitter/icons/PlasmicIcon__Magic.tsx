// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MagicIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MagicIcon(props: MagicIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.823 10.068l-5.384-2.1-2.07-6.23a.72.72 0 00-1.364 0l-2.07 6.229-5.386 2.1a.72.72 0 000 1.34l5.386 2.1 2.07 6.23a.72.72 0 001.365 0l2.07-6.23 5.386-2.1a.72.72 0 000-1.339h-.003zm-6.22 2.224a.717.717 0 00-.421.44l-1.495 4.5-1.495-4.498a.722.722 0 00-.42-.442L7.79 10.739l3.981-1.554c.2-.077.355-.24.422-.443l1.495-4.498 1.495 4.499c.067.203.22.366.42.444l3.981 1.552-3.981 1.554v-.001zM6.386 3.653H4.584V1.965a.72.72 0 00-1.438 0v1.688H1.438a.719.719 0 000 1.438h1.707v1.688a.719.719 0 001.438 0V5.091h1.801a.718.718 0 100-1.438h.001zm2.43 14.971H7.76v-.973a.718.718 0 10-1.438 0v.973h-.985a.719.719 0 000 1.438h.987v.973a.718.718 0 101.438 0v-.973h1.052a.719.719 0 000-1.438z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MagicIcon;
/* prettier-ignore-end */
