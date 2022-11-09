import * as React from "react";
import { DetailedHTMLFactory } from "react";

export type ComponentSimilarTo<
  E extends HTMLElement,
  A extends React.HTMLAttributes<E>
> = React.ClassType<Partial<DetailedHTMLFactory<A, E>>, any, any>;
