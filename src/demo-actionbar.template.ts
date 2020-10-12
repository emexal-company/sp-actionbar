import { html } from 'lit-element';
import { DemoActionBar } from './demo-actionbar.component';

import '@spectrum/sp-actionbar';
import '@spectrum/sp-container';

export default function template(this: DemoActionBar) {
  return html`
  <sp-container>
      <sp-rule medium label="Action bar - Standard"></sp-rule>
      <sp-demo width="600">
        <pre><sp-actionbar selected=3 style="display: inherit; margin-right: 20px"></sp-actionbar></pre>
      </sp-demo>
      <sp-rule medium label="Action bar - No buttons "></sp-rule>
      <sp-demo width="600">
        <pre><sp-actionbar selected=2 noButtons style="display: inherit; margin-right: 20px"></sp-actionbar></pre>
      </sp-demo>
    </sp-container>
  `;
}
