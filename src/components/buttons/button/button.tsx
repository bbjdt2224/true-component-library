import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';
import { ActionType } from '../../../interface';
import { removeButtonFocus, trySubmitForm } from '../button-common';
import { ButtonTextSize } from './button.interface';
/**
 * @virtualProp {"light" | "dark"} theme - The theme determines which platform styles to use.
 *
 * @slot - Content is placed in the default slot.
 */
@Component({
    tag: 'true-button',
    styleUrl: 'button.scss',
    shadow: true
})
export class Button {
    /**
     * The intended action of the button (primary, secondary, destructive)
     */
    @Prop({ reflect: true }) type: ActionType = 'primary';
    /**
     * the size of the text to use in the button
     */
    @Prop({ reflect: true }) textSize: ButtonTextSize = 's';
    /**
     * Whether or not to render the button as a submit button
     */
    @Prop() submit = false;
    /**
     * `true` if the button is disabled and cannot be interacted with
     */
    @Prop({ mutable: true, reflect: true }) disabled = false;
    /**
     * How the button text should be aligned
     */
    @Prop({ reflect: true }) textAlign: 'center' | 'left' = 'center';
    /**
     * `true` if the overlay should be rendered over the button
     */
    @Prop({ reflect: true }) hasOverlay: boolean;

    @Element() element!: Element;

    @Listen('click')
    hostClick(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }

        trySubmitForm(this.submit, this.element);
    }

    render() {
        return (
            <Host
                style={{
                    '--text-align': this.textAlign
                }}
                aria-disabled={this.disabled ? 'true' : null}>
                {this.hasOverlay ? <div class='overlay'></div> : null}
                <button
                    disabled={this.disabled}
                    onClick={e => removeButtonFocus(e)}
                    type={this.submit === true ? 'submit' : 'button'}>
                    <true-text-base
                        size={this.textSize}
                        weight='medium'>
                        <slot></slot>
                    </true-text-base>
                    <slot name='end'></slot>
                </button>
            </Host>
        );
    }
}
