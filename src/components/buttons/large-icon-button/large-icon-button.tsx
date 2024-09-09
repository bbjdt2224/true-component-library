import { Component, h, Host, Prop } from '@stencil/core';
import { ActionType } from '../../../interface';

@Component({
    tag: 'true-large-icon-button',
    styleUrl: 'large-icon-button.scss',
    shadow: true
})
export class LargeIconButton {
    /**
     * The icon to display inside the button
     */
    @Prop({ mutable: true }) icon: string;
    /**
     * The color display of the button.
     */
    @Prop({ reflect: true }) type: ActionType = 'secondary';
    /**
     * `true` if the button is disabled and cannot be interacted with.
     */
    @Prop({ reflect: true }) disabled = false;

    render() {
        return (
            <Host aria-disabled={this.disabled ? 'true' : null}>
                 <true-icon-button
                    size='xl'
                    type={this.type}
                    icon={this.icon}
                    disabled={this.disabled}>
                </true-icon-button>
                <true-text-base weight='medium' size='s'>
                    <slot></slot>
                </true-text-base>
            </Host>
        )
    }
}
