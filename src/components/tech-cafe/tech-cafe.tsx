import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tech-cafe',
  styleUrl: 'tech-cafe.css',
  shadow: true,
})
export class TechCafe {
  render() {
    return (
      <Host>
        <tech-select></tech-select>
      </Host>
    );
  }
}
