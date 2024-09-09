import { Component, h, Host, Prop } from '@stencil/core';
import { BackgroundColor, LabelColor } from '../../../interface';
import { LoadingSpinnerSizes } from './loading-spinner.interface';

@Component({
    tag: 'true-loading-spinner',
    styleUrl: 'loading-spinner.scss',
    shadow: true
})
export class LoadingSpinner {

    // Sizes are not yet defined. Matching current for the component
    readonly sizeMap: {[key in LoadingSpinnerSizes]: number} = {
        s: 14,
        m: 16,
        l: 18,
        xl: 50
    }

    readonly strokeSizeMap: {[key in LoadingSpinnerSizes]: number} = {
        s: 2,
        m: 2,
        l: 2,
        xl: 4
    }

    @Prop({ reflect: true }) size: LoadingSpinnerSizes = 'm';

    /**
     * Color of the loader line
     */
    @Prop() loaderColor: LabelColor = 'custom-brand-accent';

    /**
     * Color of the track the loader follows
     */
    @Prop() pathColor: BackgroundColor = 'tertiary';

    // calculate radius of svg
    get radius() {
        return (this.sizeNumber / 2) - (this.strokeWidth / 2);
    }

    // calculate circumference of circle
    get circumference() {
        return (2 * Math.PI * this.radius);
    }

    get sizeNumber() {
        return this.sizeMap[this.size];
    }

    get strokeWidth() {
        return this.strokeSizeMap[this.size];
    }

    render() {
        // set host style
        const style = {
            height: `${this.size}px`,
            width: `${this.size}px`,
            '--positive-circumference': `${(this.circumference-1)}`,
            '--negative-circumference': `${(-this.circumference+1)}`
        }

        if (this.loaderColor) {
            style['--stroke-color'] = `var(--color-${this.loaderColor})`;
        }

        if (this.pathColor) {
            style['--path-color'] = `var(--bg-color-${this.pathColor})`;
        }
        return (
            <Host style={style}>
                <svg
                    width={this.sizeNumber}
                    height={this.sizeNumber}
                    viewBox={`0 0 ${this.sizeNumber} ${this.sizeNumber}`}>
                    <circle
                        class='background'
                        cx={this.sizeNumber / 2}
                        cy={this.sizeNumber / 2}
                        r={this.radius}
                        fill='none'
                        stroke-width={this.strokeWidth}></circle>
                    <circle
                        class='loader'
                        cx={this.sizeNumber / 2}
                        cy={this.sizeNumber / 2}
                        r={this.radius}
                        fill='none'
                        stroke-width={this.strokeWidth}
                        stroke-dasharray={this.circumference}
                        stroke-linecap='round'></circle>
                </svg>
            </Host>
        )
    }
}
