import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { ActionBar } from './actionbar.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-button';
import '@spectrum/sp-buttongroup';
import '@spectrum/sp-checkbox';

export default function template(this: ActionBar) {

    var buttonsTemplate = [];

    if (!this.noButtons) {
        buttonsTemplate.push(html`
        <sp-buttongroup>
            <sp-button quiet type="action" label="Edit"></sp-button>
            <sp-button quiet type="action" label="Copy"></sp-button>
            <sp-button quiet type="action" label="Delete"></sp-button>
        </sp-buttongroup>
        `)
    }

    return html`
    <div class="spectrum-ActionBar is-open">
        <div class="spectrum-Popover spectrum-ActionBar-popover">
            <sp-checkbox label="${this.selected} Selected" quiet ?checked=${(this.selected>0)} indeterminate></sp-checkbox>         
            ${buttonsTemplate}
        </div>
    </div>
    `;
}
