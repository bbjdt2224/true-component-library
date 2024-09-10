import { Component, h, Host, Prop } from '@stencil/core';
import { BackgroundColor } from '../../../interface';

@Component({
    tag: 'true-block',
    styleUrl: 'block.scss',
    shadow: true
})
export class Block {
    /**
     * The background color of the block container.
     */
    @Prop() background: BackgroundColor = 'secondary';

    render() {
        return (
            <Host style={{
                'background-color': `var(--bg-color-${this.background})`
            }}>
                <slot></slot>
            </Host>
        )
    }
}
