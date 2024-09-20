import { Component, Host, Prop, h } from '@stencil/core';
import { TextColor } from '../../../components';
import { LabelColor, BackgroundColor } from '../../../interface';

@Component({
  tag: 'true-line-progress',
  styleUrl: 'line-progress.scss',
  shadow: true,
})
export class LineProgress {
  /**
   * Color of the progress line
   */
  @Prop() progressColor: LabelColor;
  /**
   * Color of the track the progress follows
   */
  @Prop() backgroundColor: BackgroundColor;
  /**
   * Color of the inner text
   */
  @Prop() textColor: TextColor = 'custom-brand-accent';
  /**
   * Number of complete items
   */
  @Prop({ reflect: true }) complete = 0;
  /**
   * Number of total items
   */
  @Prop({ mutable: true }) total = 1;
  /**
   * `true` if showing the fraction to the right of the bar
   */
  @Prop({ mutable: true }) showFraction = true;

  get progress() {
    return (this.complete / this.total) * 100;
  }

  renderFraction() {
    if (this.showFraction) {
      return (
        <true-text color={this.textColor} weight="medium">
          {`${this.complete} / ${this.total}`}
        </true-text>
      );
    }
  }

  render() {
    // set host style
    const style = {
      '--progress': `${this.progress}%`,
    };
    if (this.progressColor) {
      style['--progress-color'] = `var(--color-${this.progressColor})`;
    }
    if (this.backgroundColor) {
      style['--background-color'] = `var(--bg-color-${this.backgroundColor})`;
    }
    return (
      <Host style={style}>
        <div class="background"></div>
        {this.renderFraction()}
      </Host>
    );
  }
}
