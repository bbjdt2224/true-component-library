import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'true-chip',
  styleUrl: 'chip.scss',
  shadow: true,
})
export class Chip {
  /**
   * `true` if the chip can be removed
   */
  @Prop({ reflect: true }) deletable = false;
  /**
   * `true` indicates focused state of the chip
   */
  @Prop({ reflect: true }) focused = false;
  /**
   * `true` if the chip should render box shadow.
   */
  @Prop({ reflect: true }) hasShadow: boolean;

  /**
   * Emitted when the user clicks the delete button.
   */
  @Event() deleted: EventEmitter;

  private onDeleted = () => {
    this.deleted.emit();
  };

  private renderDeleteBtn() {
    if (this.deletable) {
      return (
        <button class="chip action" onClick={this.onDeleted}>
          <true-icon color="tertiary" name="x"></true-icon>
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <Host>
        <div class="chip text">
          <true-text max-lines="1">
            <slot></slot>
          </true-text>
        </div>
        {this.renderDeleteBtn()}
      </Host>
    );
  }
}
