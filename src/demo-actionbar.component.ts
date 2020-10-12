import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-actionbar.styles';
import template from './demo-actionbar.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { ActionBar } from '@spectrum/sp-actionbar';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-actionbar')
export class DemoActionBar extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-actionbar': DemoActionBar;
  }
}
