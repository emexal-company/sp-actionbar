import { Base } from '@spectrum/sp-base';
export declare class ActionBar extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    noButtons: boolean;
    selected: number;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-actionbar': ActionBar;
    }
}
