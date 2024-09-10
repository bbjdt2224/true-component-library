import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'true-container',
  styleUrl: 'container.scss',
  shadow: true,
})
export class Container {
  /**
   * Grid comlumn template
   */
  @Prop({ mutable: true }) columns: string;

  /**
   * Grid item alignment
   */
  @Prop() align: 'stretch';

  /**
   * Grid content justification
   */
  @Prop() justify = 'initial';

  /**
   * Gap bewteen grid columns
   */
  @Prop() columnGap: string;

  /**
   * Maximum width of container
   */
  @Prop() maxWidth: 'max' | 'content' | 'none' | 'form' | 'detail' = 'content';

  @State() private colunmDefs: string[];

  componentDidLoad() {
    this.colunmDefs = this.columns ? this.columns.split(' ') : null;
  }

  private renderGridSlots() {
    const slots = [];
    slots.push(<slot></slot>)
    if (this.colunmDefs) {
      this.colunmDefs.forEach((_, index) => {
        slots.push(
          <div>
            <slot name={`col-${index + 1}`}></slot>
          </div>,
        );
      });
    }
    return slots;
  }

  render() {
    let maxWidth = '1275px';
    switch (this.maxWidth) {
      case 'max':
        maxWidth = '1440px';
        break;
      case 'none':
        maxWidth = 'initial';
        break;
      case 'detail':
        maxWidth = '1148px';
        break;
      case 'form':
        maxWidth = '896px';
        break;
    }

    return (
      <Host
        style={{
          '--max-width': maxWidth,
          '--template-columns': this.columns || '',
          '--column-gap': this.columnGap || '34px',
        }}
      >
        <div
          class="grid"
          style={{
            'align-items': this.align,
            'justify-content': this.justify,
          }}
        >
          {this.renderGridSlots()}
        </div>
      </Host>
    );
  }
}
