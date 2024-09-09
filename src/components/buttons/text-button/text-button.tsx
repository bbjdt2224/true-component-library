import { Component, Element, h, Host, Prop } from '@stencil/core';
import { ActionType } from '../../../interface';
import { TextWeight } from '../../typography/text-base/text-base.interface';
import { removeButtonFocus } from '../button-common';
import { TextButtonSizes } from './text-button.interface';
/**
 * @virtualProp {"light" | "dark"} theme - The theme determines which platform styles to use.
 *
 * @slot - Content is placed in the default slot.
 */
@Component({
    tag: 'true-text-button',
    styleUrl: 'text-button.scss',
    shadow: true
})
export class TextButton {
    /**
     * `true` if the button is disabled and cannot be interacted with.
     */
    @Prop({ reflect: true }) disabled = false;
    /**
     * The color display of the button.
     */
    @Prop({ reflect: true }) type: ActionType = 'primary';
    /**
     * The size of the text button, defaults small.
     */
    @Prop() size: TextButtonSizes = 's';
    /**
     * The weight of the text in the button.
     */
    @Prop() weight: TextWeight = 'medium';
    /**
     * A link href. If provided the button will render as a link using an a tag
     */
    @Prop() location: string;
    /**
     * If a location is provided, add this attribute to have the link open in a new tab
     */
    @Prop({ reflect: true }) newTab: boolean;
    /**
     * If true allow element to be focusable
     */
    @Prop({ mutable: true }) focusable = true;

    @Element() host!: Element;

    componentDidLoad() {
        // Removes issue where router link adds tab index and steals focus from the button
        this.host.removeAttribute('tabindex');
    }

    renderText() {
        const textBase = (
            <true-text-base
                class='content'
                weight={this.weight}
                size={this.size}>
                <slot></slot>
            </true-text-base>
        );

        if (this.location) {
            return (
                <a href={this.location} target={this.newTab ? 'blank' : ''}>
                    {textBase}
                </a>
            );
        } else {
            return textBase;
        }
    }

    render() {
        return (
            <Host
                aria-disabled={this.disabled ? 'true' : null}
                class={{
                    'ion-activatable': true
                }}>
                <button
                    disabled={this.disabled}
                    onClick={e => removeButtonFocus(e)}
                    type='button'
                    tabindex={this.focusable ? 0 : -1}>
                    <slot name='start'></slot>

                    {this.renderText()}

                    <slot name='end'></slot>
                </button>
            </Host>
        );
    }
}
