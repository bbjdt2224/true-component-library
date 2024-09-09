import type { Components, JSX } from "../types/components";

interface TrueTextBase extends Components.TrueTextBase, HTMLElement {}
export const TrueTextBase: {
  prototype: TrueTextBase;
  new (): TrueTextBase;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
