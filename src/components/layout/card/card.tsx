import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'true-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  /**
   * Text in the header of the card
   */
  @Prop({ reflect: true }) header: string;

  /**
   * If true do not render card header text
   */
  @Prop({ reflect: true }) noHeader: boolean;

  /**
   * Sets padding of card to 0
   */
  @Prop({ reflect: true }) noPadding: boolean;


  render() {
    return (
      <Host>
        <div class="card-header">
          {this.noHeader ? null : <true-text weight="medium">{this.header}</true-text>}
          <slot name="header-end"></slot>
        </div>
        <div class="card-content">
          <slot></slot>
        </div>
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </Host>
    );
  }
}
