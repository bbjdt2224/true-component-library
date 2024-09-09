import type { Components, JSX } from "../types/components";

interface TrueIconPreview extends Components.TrueIconPreview, HTMLElement {}
export const TrueIconPreview: {
  prototype: TrueIconPreview;
  new (): TrueIconPreview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
