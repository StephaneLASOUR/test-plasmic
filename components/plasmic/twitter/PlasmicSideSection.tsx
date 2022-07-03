// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXtxfUL95PU6ZxWcFtpsj
// Component: BjOUYhoMAIAL
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Trend from "../../Trend"; // plasmic-import: WunYD34zulRt/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_twitter.module.css"; // plasmic-import: tXtxfUL95PU6ZxWcFtpsj/projectcss
import sty from "./PlasmicSideSection.module.css"; // plasmic-import: BjOUYhoMAIAL/css

export type PlasmicSideSection__VariantMembers = {};

export type PlasmicSideSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicSideSection__VariantsArgs;
export const PlasmicSideSection__VariantProps = new Array<VariantPropType>();

export type PlasmicSideSection__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSideSection__ArgsType;
export const PlasmicSideSection__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicSideSection__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSideSectionProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicSideSection__RenderFunc(props: {
  variants: PlasmicSideSection__VariantsArgs;
  args: PlasmicSideSection__ArgsType;
  overrides: PlasmicSideSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign(
    {},

    props.args
  );
  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__jekOc)}>
        <div className={classNames(projectcss.all, sty.freeBox__lshYo)}>
          {p.renderPlasmicSlot({
            defaultContents: "What's happening",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___54KtJ)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <Trend
                className={classNames("__wab_instance", sty.trend__aFc1Q)}
              />

              <Trend
                className={classNames("__wab_instance", sty.trend__pkUzq)}
              />
            </React.Fragment>
          ),
          value: args.slot
        })}
      </div>

      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(
          projectcss.all,
          projectcss.a,
          projectcss.__wab_text,
          sty.link
        )}
        component={Link}
        href={"#" as const}
        platform={"nextjs"}
      >
        {"Show more"}
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideSection__VariantsArgs;
    args?: PlasmicSideSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSideSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSideSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSideSection__ArgProps,
      internalVariantPropNames: PlasmicSideSection__VariantProps
    });

    return PlasmicSideSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideSection";
  } else {
    func.displayName = `PlasmicSideSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSideSection = Object.assign(
  // Top-level PlasmicSideSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSideSection
    internalVariantProps: PlasmicSideSection__VariantProps,
    internalArgProps: PlasmicSideSection__ArgProps
  }
);

export default PlasmicSideSection;
/* prettier-ignore-end */
