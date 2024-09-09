import { Component, Element, h, Listen, Prop } from '@stencil/core';
import { ActionType } from '../../../interface';
import { trySubmitForm } from '../button-common';
/**
 * @slot - Content is placed in the default slot.
 */
@Component({
    tag: 'true-large-button',
    styleUrl: 'large-button.scss',
    shadow: true
})
export class LargeButton {
    /**
     * The icon to display on the right side of the button
     */
    @Prop() icon: string;
    /**
     * The importance of action the button is intended for (primary, secondary)
     */
    @Prop({ reflect: true }) type: ActionType = 'primary';
    /**
     * Whether or not to render the button as a submit button
     */
    @Prop() submit = false;
    /**
     * `true` if the button is disabled and cannot be interacted with.
     */
    @Prop({ reflect: true }) disabled = false;
    /**
     * `true` if the button is in a busy state.
     */
    @Prop() busy = false;
    /**
     * Whether to align the text left or center. Center is default
     */
    @Prop({ reflect: true }) textAlign: 'center' | 'left' = 'center';

    @Element() element!: Element;

    @Listen('click')
    hostClick(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }

        if (!this.busy) {
            trySubmitForm(this.submit, this.element);
        }
    }

    render() {
        return (
            <true-button
                textSize='m'
                submit={this.submit}
                disabled={this.disabled}
                type={this.type}
                textAlign={this.textAlign}>

                <slot></slot>

                <div class='icon-bubble' slot='end'>
                    {
                        this.busy ?
                            <true-loading-spinner size ='l'></true-loading-spinner> :
                            <true-icon name={this.icon}></true-icon>
                    }
                </div>

            </true-button>
        );
    }

}
