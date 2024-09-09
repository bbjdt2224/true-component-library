import type { Components, JSX } from "../types/components";

interface TrueText extends Components.TrueText, HTMLElement {}
export const TrueText: {
  prototype: TrueText;
  new (): TrueText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
