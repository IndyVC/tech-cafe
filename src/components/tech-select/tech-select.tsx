import { Component, Host, h, Prop } from '@stencil/core';
import { fruits } from './tech-select.options';
import { Option } from './tech-select.typings';

@Component({
  tag: 'tech-select',
  styleUrl: 'tech-select.scss',
  shadow: true,
})
export class TechSelect {
  @Prop() options: Option[] = fruits;
  @Prop() value: string;

  render() {
    return (
      <Host>
        <select class="tech-select">
          {this.options.map(o => (
            <option value={o.value} selected={o.value === this.value} class="tech-select__option">
              {o.label}
            </option>
          ))}
        </select>
      </Host>
    );
  }
}
