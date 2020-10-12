import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import actionbarStyles from './actionbar.styles';
import template from './actionbar.template';
let ActionBar = class ActionBar extends Base {
    constructor() {
        super(...arguments);
        this.noButtons = false;
        this.selected = 0;
    }
    render() {
        return template.call(this);
    }
};
ActionBar.componentStyles = [actionbarStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], ActionBar.prototype, "noButtons", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], ActionBar.prototype, "selected", void 0);
ActionBar = __decorate([
    customElement('sp-actionbar')
], ActionBar);
export { ActionBar };
//# sourceMappingURL=actionbar.component.js.map