import type { Components, JSX } from "../types/components";

interface TrueHeader extends Components.TrueHeader, HTMLElement {}
export const TrueHeader: {
  prototype: TrueHeader;
  new (): TrueHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
