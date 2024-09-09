import { Component, h, Host, Prop, State } from "@stencil/core";
import { TextColor, TextSize, TextWeight } from "./text-base.interface";


@Component({
    tag: 'true-text-base',
    styleUrl: 'text-base.scss',
    shadow: true
})
export class TextBase {

    /**
     * Size of the text
     */
    @Prop({ reflect: true }) size: TextSize = 'm'

    /**
     * Primary color of the text
     * Uses predefined css variables
     */
    @Prop({ reflect: true }) color: TextColor;

    /**
     * Weight of the text
     */
    @Prop({ reflect: true }) weight: TextWeight;

    /**
     * Maximum lines to display before truncating the text
     * If no value is given all lines will show
     */
    @Prop({ reflect: true }) maxLines: string;

    @State() loaded: boolean;

    componentDidLoad() {
        // Set loaded to true so colors are correct
        requestAnimationFrame(() => {
            this.loaded = true;
        })
    }

    render() {
        const style = {}

        if (this.maxLines != null) {
            style['--max-lines'] = this.maxLines
        }

        if (this.color) {
            style['--text-color'] = `var(--color-${this.color})`
        }

        return (
            <Host style={style} class={this.loaded ? 'loaded' : ''}>
                <span><slot></slot></span>
            </Host>
        )
    }

}