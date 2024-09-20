/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ActionType, BackgroundColor, LabelColor } from "./interface";
import { ButtonTextSize } from "./components/buttons/button/button.interface";
import { HeaderSize } from "./components/typography/header/header.interface";
import { TextColor, TextSize, TextWeight } from "./components/typography/text-base/text-base.interface";
import { IconSizes } from "./components/icon/icon.interface";
import { IconButtonSize } from "./components/buttons/icon-button/icon-button.interface";
import { TextColor as TextColor1 } from "./components";
import { LoadingSpinnerSizes } from "./components/basic-app/loading-spinner/loading-spinner.interface";
import { TextButtonSizes } from "./components/buttons/text-button/text-button.interface";
export { ActionType, BackgroundColor, LabelColor } from "./interface";
export { ButtonTextSize } from "./components/buttons/button/button.interface";
export { HeaderSize } from "./components/typography/header/header.interface";
export { TextColor, TextSize, TextWeight } from "./components/typography/text-base/text-base.interface";
export { IconSizes } from "./components/icon/icon.interface";
export { IconButtonSize } from "./components/buttons/icon-button/icon-button.interface";
export { TextColor as TextColor1 } from "./components";
export { LoadingSpinnerSizes } from "./components/basic-app/loading-spinner/loading-spinner.interface";
export { TextButtonSizes } from "./components/buttons/text-button/text-button.interface";
export namespace Components {
    interface TrueBadge {
        "text": string;
        "value": number;
    }
    interface TrueBlock {
        /**
          * The background color of the block container.
         */
        "background": BackgroundColor;
    }
    interface TrueButton {
        /**
          * `true` if the button is disabled and cannot be interacted with
         */
        "disabled": boolean;
        /**
          * `true` if the overlay should be rendered over the button
         */
        "hasOverlay": boolean;
        /**
          * Whether or not to render the button as a submit button
         */
        "submit": boolean;
        /**
          * How the button text should be aligned
         */
        "textAlign": 'center' | 'left';
        /**
          * the size of the text to use in the button
         */
        "textSize": ButtonTextSize;
        /**
          * The theme determines which platform styles to use.
         */
        "theme"?: "light" | "dark";
        /**
          * The intended action of the button (primary, secondary, destructive)
         */
        "type": ActionType;
    }
    interface TrueCard {
        /**
          * Text in the header of the card
         */
        "header": string;
        /**
          * If true do not render card header text
         */
        "noHeader": boolean;
        /**
          * Sets padding of card to 0
         */
        "noPadding": boolean;
    }
    interface TrueChip {
        /**
          * `true` if the chip can be removed
         */
        "deletable": boolean;
        /**
          * `true` indicates focused state of the chip
         */
        "focused": boolean;
        /**
          * `true` if the chip should render box shadow.
         */
        "hasShadow": boolean;
    }
    interface TrueContainer {
        /**
          * Grid item alignment
         */
        "align": 'stretch';
        /**
          * Gap bewteen grid columns
         */
        "columnGap": string;
        /**
          * Grid comlumn template
         */
        "columns": string;
        /**
          * Grid content justification
         */
        "justify": string;
        /**
          * Maximum width of container
         */
        "maxWidth": 'max' | 'content' | 'none' | 'form' | 'detail';
    }
    interface TrueHeader {
        /**
          * Passthrough prop for the color of the header
         */
        "color": TextColor;
        /**
          * The maximum lines to display before truncating the header. Default behavior shows all lines of text with no truncation.
         */
        "maxLines": string;
        /**
          * The size of the header
         */
        "size": HeaderSize;
        /**
          * Passthrough prop for weight of the header
         */
        "weight": TextWeight;
    }
    interface TrueIcon {
        "color": LabelColor;
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "defaultLabel"?: string;
        /**
          * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy": boolean;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * The size of the icon: xxs through xl
         */
        "size"?: IconSizes;
    }
    interface TrueIconButton {
        /**
          * Number shown in a badge in the corner of the button
         */
        "badge": number;
        /**
          * `true` if the button is disabled and cannot be interacted with.
         */
        "disabled": boolean;
        /**
          * Flips the icon horizontally (h) of vertically (v) in css
         */
        "flip": 'h' | 'v';
        /**
          * `true` if the overlay should be rendered.
         */
        "hasOverlay": boolean;
        /**
          * The icon to display inside the button
         */
        "icon": string;
        /**
          * `true` if a box shadow should be shown (only suports primary type)
         */
        "shadow": boolean;
        /**
          * Size of the icon
         */
        "size": IconButtonSize;
        /**
          * The keyboard focus order
         */
        "tabindex": number;
        /**
          * `true` if button is in toggled state
         */
        "toggled": boolean;
        /**
          * The color display of the button.
         */
        "type": ActionType;
    }
    interface TrueIconPreview {
        "icons": string;
    }
    interface TrueLabel {
        /**
          * Passthrough prop for the color of the label
         */
        "color": TextColor;
        /**
          * The maximum lines to display before truncating the label. Default behavior shows all lines of label with no truncation.
         */
        "maxLines": string;
    }
    interface TrueLargeButton {
        /**
          * `true` if the button is in a busy state.
         */
        "busy": boolean;
        /**
          * `true` if the button is disabled and cannot be interacted with.
         */
        "disabled": boolean;
        /**
          * The icon to display on the right side of the button
         */
        "icon": string;
        /**
          * Whether or not to render the button as a submit button
         */
        "submit": boolean;
        /**
          * Whether to align the text left or center. Center is default
         */
        "textAlign": 'center' | 'left';
        /**
          * The importance of action the button is intended for (primary, secondary)
         */
        "type": ActionType;
    }
    interface TrueLargeIconButton {
        /**
          * `true` if the button is disabled and cannot be interacted with.
         */
        "disabled": boolean;
        /**
          * The icon to display inside the button
         */
        "icon": string;
        /**
          * The color display of the button.
         */
        "type": ActionType;
    }
    interface TrueLineProgress {
        /**
          * Color of the track the progress follows
         */
        "backgroundColor": BackgroundColor;
        /**
          * Number of complete items
         */
        "complete": number;
        /**
          * Color of the progress line
         */
        "progressColor": LabelColor;
        /**
          * `true` if showing the fraction to the right of the bar
         */
        "showFraction": boolean;
        /**
          * Color of the inner text
         */
        "textColor": TextColor1;
        /**
          * Number of total items
         */
        "total": number;
    }
    interface TrueLoadingSpinner {
        /**
          * Color of the loader line
         */
        "loaderColor": LabelColor;
        /**
          * Color of the track the loader follows
         */
        "pathColor": BackgroundColor;
        "size": LoadingSpinnerSizes;
    }
    interface TrueSubtext {
        /**
          * Passthrough prop for the color of the text
         */
        "color": TextColor;
        /**
          * The maximum lines to display before truncating the text. Default behavior shows all lines of text with no truncation.
         */
        "maxLines": string;
        /**
          * Passthrough prop for weight of the text
         */
        "weight": Extract<TextWeight, 'regular' | 'medium' | 'bold'>;
    }
    interface TrueText {
        /**
          * Passthrough prop for the color of the text
         */
        "color": TextColor;
        /**
          * The maximum lines to display before truncating the text. Default behavior shows all lines of text with no truncation.
         */
        "maxLines": string;
        /**
          * Passthrough prop for weight of the text
         */
        "weight": Extract<TextWeight, 'regular' | 'medium'>;
    }
    interface TrueTextBase {
        /**
          * Primary color of the text Uses predefined css variables
         */
        "color": TextColor;
        /**
          * Maximum lines to display before truncating the text If no value is given all lines will show
         */
        "maxLines": string;
        /**
          * Size of the text
         */
        "size": TextSize;
        /**
          * Weight of the text
         */
        "weight": TextWeight;
    }
    interface TrueTextButton {
        /**
          * `true` if the button is disabled and cannot be interacted with.
         */
        "disabled": boolean;
        /**
          * If true allow element to be focusable
         */
        "focusable": boolean;
        /**
          * A link href. If provided the button will render as a link using an a tag
         */
        "location": string;
        /**
          * If a location is provided, add this attribute to have the link open in a new tab
         */
        "newTab": boolean;
        /**
          * The size of the text button, defaults small.
         */
        "size": TextButtonSizes;
        /**
          * The theme determines which platform styles to use.
         */
        "theme"?: "light" | "dark";
        /**
          * The color display of the button.
         */
        "type": ActionType;
        /**
          * The weight of the text in the button.
         */
        "weight": TextWeight;
    }
}
export interface TrueChipCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTrueChipElement;
}
declare global {
    interface HTMLTrueBadgeElement extends Components.TrueBadge, HTMLStencilElement {
    }
    var HTMLTrueBadgeElement: {
        prototype: HTMLTrueBadgeElement;
        new (): HTMLTrueBadgeElement;
    };
    interface HTMLTrueBlockElement extends Components.TrueBlock, HTMLStencilElement {
    }
    var HTMLTrueBlockElement: {
        prototype: HTMLTrueBlockElement;
        new (): HTMLTrueBlockElement;
    };
    interface HTMLTrueButtonElement extends Components.TrueButton, HTMLStencilElement {
    }
    var HTMLTrueButtonElement: {
        prototype: HTMLTrueButtonElement;
        new (): HTMLTrueButtonElement;
    };
    interface HTMLTrueCardElement extends Components.TrueCard, HTMLStencilElement {
    }
    var HTMLTrueCardElement: {
        prototype: HTMLTrueCardElement;
        new (): HTMLTrueCardElement;
    };
    interface HTMLTrueChipElementEventMap {
        "deleted": any;
    }
    interface HTMLTrueChipElement extends Components.TrueChip, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTrueChipElementEventMap>(type: K, listener: (this: HTMLTrueChipElement, ev: TrueChipCustomEvent<HTMLTrueChipElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTrueChipElementEventMap>(type: K, listener: (this: HTMLTrueChipElement, ev: TrueChipCustomEvent<HTMLTrueChipElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTrueChipElement: {
        prototype: HTMLTrueChipElement;
        new (): HTMLTrueChipElement;
    };
    interface HTMLTrueContainerElement extends Components.TrueContainer, HTMLStencilElement {
    }
    var HTMLTrueContainerElement: {
        prototype: HTMLTrueContainerElement;
        new (): HTMLTrueContainerElement;
    };
    interface HTMLTrueHeaderElement extends Components.TrueHeader, HTMLStencilElement {
    }
    var HTMLTrueHeaderElement: {
        prototype: HTMLTrueHeaderElement;
        new (): HTMLTrueHeaderElement;
    };
    interface HTMLTrueIconElement extends Components.TrueIcon, HTMLStencilElement {
    }
    var HTMLTrueIconElement: {
        prototype: HTMLTrueIconElement;
        new (): HTMLTrueIconElement;
    };
    interface HTMLTrueIconButtonElement extends Components.TrueIconButton, HTMLStencilElement {
    }
    var HTMLTrueIconButtonElement: {
        prototype: HTMLTrueIconButtonElement;
        new (): HTMLTrueIconButtonElement;
    };
    interface HTMLTrueIconPreviewElement extends Components.TrueIconPreview, HTMLStencilElement {
    }
    var HTMLTrueIconPreviewElement: {
        prototype: HTMLTrueIconPreviewElement;
        new (): HTMLTrueIconPreviewElement;
    };
    interface HTMLTrueLabelElement extends Components.TrueLabel, HTMLStencilElement {
    }
    var HTMLTrueLabelElement: {
        prototype: HTMLTrueLabelElement;
        new (): HTMLTrueLabelElement;
    };
    interface HTMLTrueLargeButtonElement extends Components.TrueLargeButton, HTMLStencilElement {
    }
    var HTMLTrueLargeButtonElement: {
        prototype: HTMLTrueLargeButtonElement;
        new (): HTMLTrueLargeButtonElement;
    };
    interface HTMLTrueLargeIconButtonElement extends Components.TrueLargeIconButton, HTMLStencilElement {
    }
    var HTMLTrueLargeIconButtonElement: {
        prototype: HTMLTrueLargeIconButtonElement;
        new (): HTMLTrueLargeIconButtonElement;
    };
    interface HTMLTrueLineProgressElement extends Components.TrueLineProgress, HTMLStencilElement {
    }
    var HTMLTrueLineProgressElement: {
        prototype: HTMLTrueLineProgressElement;
        new (): HTMLTrueLineProgressElement;
    };
    interface HTMLTrueLoadingSpinnerElement extends Components.TrueLoadingSpinner, HTMLStencilElement {
    }
    var HTMLTrueLoadingSpinnerElement: {
        prototype: HTMLTrueLoadingSpinnerElement;
        new (): HTMLTrueLoadingSpinnerElement;
    };
    interface HTMLTrueSubtextElement extends Components.TrueSubtext, HTMLStencilElement {
    }
    var HTMLTrueSubtextElement: {
        prototype: HTMLTrueSubtextElement;
        new (): HTMLTrueSubtextElement;
    };
    interface HTMLTrueTextElement extends Components.TrueText, HTMLStencilElement {
    }
    var HTMLTrueTextElement: {
        prototype: HTMLTrueTextElement;
        new (): HTMLTrueTextElement;
    };
    interface HTMLTrueTextBaseElement extends Components.TrueTextBase, HTMLStencilElement {
    }
    var HTMLTrueTextBaseElement: {
        prototype: HTMLTrueTextBaseElement;
        new (): HTMLTrueTextBaseElement;
    };
    interface HTMLTrueTextButtonElement extends Components.TrueTextButton, HTMLStencilElement {
    }
    var HTMLTrueTextButtonElement: {
        prototype: HTMLTrueTextButtonElement;
        new (): HTMLTrueTextButtonElement;
    };
    interface HTMLElementTagNameMap {
        "true-badge": HTMLTrueBadgeElement;
        "true-block": HTMLTrueBlockElement;
        "true-button": HTMLTrueButtonElement;
        "true-card": HTMLTrueCardElement;
        "true-chip": HTMLTrueChipElement;
        "true-container": HTMLTrueContainerElement;
        "true-header": HTMLTrueHeaderElement;
        "true-icon": HTMLTrueIconElement;
        "true-icon-button": HTMLTrueIconButtonElement;
        "true-icon-preview": HTMLTrueIconPreviewElement;
        "true-label": HTMLTrueLabelElement;
        "true-large-button": HTMLTrueLargeButtonElement;
        "true-large-icon-button": HTMLTrueLargeIconButtonElement;
        "true-line-progress": HTMLTrueLineProgressElement;
        "true-loading-spinner": HTMLTrueLoadingSpinnerElement;
        "true-subtext": HTMLTrueSubtextElement;
        "true-text": HTMLTrueTextElement;
        "true-text-base": HTMLTrueTextBaseElement;
        "true-text-button": HTMLTrueTextButtonElement;
    }
}
declare namespace LocalJSX {
    interface TrueBadge {
        "text"?: string;
        "value"?: number;
    }
    interface TrueBlock {
        /**
          * The background color of the block container.
         */
        "background"?: BackgroundColor;
    }
    interface TrueButton {
        /**
          * `true` if the button is disabled and cannot be interacted with
         */
        "disabled"?: boolean;
        /**
          * `true` if the overlay should be rendered over the button
         */
        "hasOverlay"?: boolean;
        /**
          * Whether or not to render the button as a submit button
         */
        "submit"?: boolean;
        /**
          * How the button text should be aligned
         */
        "textAlign"?: 'center' | 'left';
        /**
          * the size of the text to use in the button
         */
        "textSize"?: ButtonTextSize;
        /**
          * The theme determines which platform styles to use.
         */
        "theme"?: "light" | "dark";
        /**
          * The intended action of the button (primary, secondary, destructive)
         */
        "type"?: ActionType;
    }
    interface TrueCard {
        /**
          * Text in the header of the card
         */
        "header"?: string;
        /**
          * If true do not render card header text
         */
        "noHeader"?: boolean;
        /**
          * Sets padding of card to 0
         */
        "noPadding"?: boolean;
    }
    interface TrueChip {
        /**
          * `true` if the chip can be removed
         */
        "deletable"?: boolean;
        /**
          * `true` indicates focused state of the chip
         */
        "focused"?: boolean;
        /**
          * `true` if the chip should render box shadow.
         */
        "hasShadow"?: boolean;
        /**
          * Emitted when the user clicks the delete button.
         */
        "onDeleted"?: (event: TrueChipCustomEvent<any>) => void;
    }
    interface TrueContainer {
        /**
          * Grid item alignment
         */
        "align"?: 'stretch';
        /**
          * Gap bewteen grid columns
         */
        "columnGap"?: string;
        /**
          * Grid comlumn template
         */
        "columns"?: string;
        /**
          * Grid content justification
         */
        "justify"?: string;
        /**
          * Maximum width of container
         */
        "maxWidth"?: 'max' | 'content' | 'none' | 'form' | 'detail';
    }
    interface TrueHeader {
        /**
          * Passthrough prop for the color of the header
         */
        "color"?: TextColor;
        /**
          * The maximum lines to display before truncating the header. Default behavior shows all lines of text with no truncation.
         */
        "maxLines"?: string;
        /**
          * The size of the header
         */
        "size"?: HeaderSize;
        /**
          * Passthrough prop for weight of the header
         */
        "weight"?: TextWeight;
    }
    interface TrueIcon {
        "color"?: LabelColor;
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "defaultLabel"?: string;
        /**
          * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy"?: boolean;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * The size of the icon: xxs through xl
         */
        "size"?: IconSizes;
    }
    interface TrueIconButton {
        /**
          * Number shown in a badge in the corner of the button
         */
        "badge"?: number;
        /**
          * `true` if the button is disabled and cannot be interacted with.
         */
        "disabled"?: boolean;
        /**
          * Flips the icon horizontally (h) of vertically (v) in css
         */
        "flip"?: 'h' | 'v';
        /**
          * `true` if the overlay should be rendered.
         */
        "hasOverlay"?: boolean;
        /**
          * The icon to display inside the button
         */
        "icon"?: string;
        /**
          * `true` if a box shadow should be shown (only suports primary type)
         */
        "shadow"?: boolean;
        /**
          * Size of the icon
         */
        "size"?: IconButtonSize;
        /**
          * The keyboard focus order
         */
        "tabindex"?: number;
        /**
          * `true` if button is in toggled state
         */
        "toggled"?: boolean;
        /**
          * The color display of the button.
         */
        "type"?: ActionType;
    }
    interface TrueIconPreview {
        "icons"?: string;
    }
    interface TrueLabel {
        /**
          * Passthrough prop for the color of the label
         */
        "color"?: TextColor;
        /**
          * The maximum lines to display before truncating the label. Default behavior shows all lines of label with no truncation.
         */
        "maxLines"?: string;
    }
    interface TrueLargeButton {
        /**
          * `true` if the button is in a busy state.
         */
        "busy"?: boolean;
        /**
          * `true` if the button is disabled and cannot be interacted with.
         */
        "disabled"?: boolean;
        /**
          * The icon to display on the right side of the button
         */
        "icon"?: string;
        /**
          * Whether or not to render the button as a submit button
         */
        "submit"?: boolean;
        /**
          * Whether to align the text left or center. Center is default
         */
        "textAlign"?: 'center' | 'left';
        /**
          * The importance of action the button is intended for (primary, secondary)
         */
        "type"?: ActionType;
    }
    interface TrueLargeIconButton {
        /**
          * `true` if the button is disabled and cannot be interacted with.
         */
        "disabled"?: boolean;
        /**
          * The icon to display inside the button
         */
        "icon"?: string;
        /**
          * The color display of the button.
         */
        "type"?: ActionType;
    }
    interface TrueLineProgress {
        /**
          * Color of the track the progress follows
         */
        "backgroundColor"?: BackgroundColor;
        /**
          * Number of complete items
         */
        "complete"?: number;
        /**
          * Color of the progress line
         */
        "progressColor"?: LabelColor;
        /**
          * `true` if showing the fraction to the right of the bar
         */
        "showFraction"?: boolean;
        /**
          * Color of the inner text
         */
        "textColor"?: TextColor1;
        /**
          * Number of total items
         */
        "total"?: number;
    }
    interface TrueLoadingSpinner {
        /**
          * Color of the loader line
         */
        "loaderColor"?: LabelColor;
        /**
          * Color of the track the loader follows
         */
        "pathColor"?: BackgroundColor;
        "size"?: LoadingSpinnerSizes;
    }
    interface TrueSubtext {
        /**
          * Passthrough prop for the color of the text
         */
        "color"?: TextColor;
        /**
          * The maximum lines to display before truncating the text. Default behavior shows all lines of text with no truncation.
         */
        "maxLines"?: string;
        /**
          * Passthrough prop for weight of the text
         */
        "weight"?: Extract<TextWeight, 'regular' | 'medium' | 'bold'>;
    }
    interface TrueText {
        /**
          * Passthrough prop for the color of the text
         */
        "color"?: TextColor;
        /**
          * The maximum lines to display before truncating the text. Default behavior shows all lines of text with no truncation.
         */
        "maxLines"?: string;
        /**
          * Passthrough prop for weight of the text
         */
        "weight"?: Extract<TextWeight, 'regular' | 'medium'>;
    }
    interface TrueTextBase {
        /**
          * Primary color of the text Uses predefined css variables
         */
        "color"?: TextColor;
        /**
          * Maximum lines to display before truncating the text If no value is given all lines will show
         */
        "maxLines"?: string;
        /**
          * Size of the text
         */
        "size"?: TextSize;
        /**
          * Weight of the text
         */
        "weight"?: TextWeight;
    }
    interface TrueTextButton {
        /**
          * `true` if the button is disabled and cannot be interacted with.
         */
        "disabled"?: boolean;
        /**
          * If true allow element to be focusable
         */
        "focusable"?: boolean;
        /**
          * A link href. If provided the button will render as a link using an a tag
         */
        "location"?: string;
        /**
          * If a location is provided, add this attribute to have the link open in a new tab
         */
        "newTab"?: boolean;
        /**
          * The size of the text button, defaults small.
         */
        "size"?: TextButtonSizes;
        /**
          * The theme determines which platform styles to use.
         */
        "theme"?: "light" | "dark";
        /**
          * The color display of the button.
         */
        "type"?: ActionType;
        /**
          * The weight of the text in the button.
         */
        "weight"?: TextWeight;
    }
    interface IntrinsicElements {
        "true-badge": TrueBadge;
        "true-block": TrueBlock;
        "true-button": TrueButton;
        "true-card": TrueCard;
        "true-chip": TrueChip;
        "true-container": TrueContainer;
        "true-header": TrueHeader;
        "true-icon": TrueIcon;
        "true-icon-button": TrueIconButton;
        "true-icon-preview": TrueIconPreview;
        "true-label": TrueLabel;
        "true-large-button": TrueLargeButton;
        "true-large-icon-button": TrueLargeIconButton;
        "true-line-progress": TrueLineProgress;
        "true-loading-spinner": TrueLoadingSpinner;
        "true-subtext": TrueSubtext;
        "true-text": TrueText;
        "true-text-base": TrueTextBase;
        "true-text-button": TrueTextButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "true-badge": LocalJSX.TrueBadge & JSXBase.HTMLAttributes<HTMLTrueBadgeElement>;
            "true-block": LocalJSX.TrueBlock & JSXBase.HTMLAttributes<HTMLTrueBlockElement>;
            "true-button": LocalJSX.TrueButton & JSXBase.HTMLAttributes<HTMLTrueButtonElement>;
            "true-card": LocalJSX.TrueCard & JSXBase.HTMLAttributes<HTMLTrueCardElement>;
            "true-chip": LocalJSX.TrueChip & JSXBase.HTMLAttributes<HTMLTrueChipElement>;
            "true-container": LocalJSX.TrueContainer & JSXBase.HTMLAttributes<HTMLTrueContainerElement>;
            "true-header": LocalJSX.TrueHeader & JSXBase.HTMLAttributes<HTMLTrueHeaderElement>;
            "true-icon": LocalJSX.TrueIcon & JSXBase.HTMLAttributes<HTMLTrueIconElement>;
            "true-icon-button": LocalJSX.TrueIconButton & JSXBase.HTMLAttributes<HTMLTrueIconButtonElement>;
            "true-icon-preview": LocalJSX.TrueIconPreview & JSXBase.HTMLAttributes<HTMLTrueIconPreviewElement>;
            "true-label": LocalJSX.TrueLabel & JSXBase.HTMLAttributes<HTMLTrueLabelElement>;
            "true-large-button": LocalJSX.TrueLargeButton & JSXBase.HTMLAttributes<HTMLTrueLargeButtonElement>;
            "true-large-icon-button": LocalJSX.TrueLargeIconButton & JSXBase.HTMLAttributes<HTMLTrueLargeIconButtonElement>;
            "true-line-progress": LocalJSX.TrueLineProgress & JSXBase.HTMLAttributes<HTMLTrueLineProgressElement>;
            "true-loading-spinner": LocalJSX.TrueLoadingSpinner & JSXBase.HTMLAttributes<HTMLTrueLoadingSpinnerElement>;
            "true-subtext": LocalJSX.TrueSubtext & JSXBase.HTMLAttributes<HTMLTrueSubtextElement>;
            "true-text": LocalJSX.TrueText & JSXBase.HTMLAttributes<HTMLTrueTextElement>;
            "true-text-base": LocalJSX.TrueTextBase & JSXBase.HTMLAttributes<HTMLTrueTextBaseElement>;
            "true-text-button": LocalJSX.TrueTextButton & JSXBase.HTMLAttributes<HTMLTrueTextButtonElement>;
        }
    }
}
