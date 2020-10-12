import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import actionbarStyles from './actionbar.styles';
import template from './actionbar.template';

@customElement('sp-actionbar')
export class ActionBar extends Base {
  public static componentStyles = [ actionbarStyles ];

  @property({ type: Boolean }) noButtons = false;
  @property({ type: Number }) selected = 0;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-actionbar': ActionBar;
  }
}
