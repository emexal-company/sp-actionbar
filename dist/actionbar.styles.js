/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { css } from 'lit-element';
export default css `.spectrum-Popover{--spectrum-dropdown-flyout-menu-offset-y: var(--spectrum-global-dimension-size-75);--spectrum-popover-border-size: var(--spectrum-alias-border-size-thin);--spectrum-popover-border-radius: var(--spectrum-alias-border-radius-regular);--spectrum-popover-tip-width: var(--spectrum-global-dimension-size-250);--spectrum-popover-background-color: var(--spectrum-global-color-gray-50);--spectrum-popover-border-color: var(--spectrum-alias-border-color-dark);--spectrum-popover-shadow-color: var(--spectrum-alias-dropshadow-color)}.spectrum-ActionBar{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;bottom:0;z-index:1;box-sizing:border-box;padding:0 var(--spectrum-global-dimension-size-200);height:0;opacity:0;overflow:hidden;pointer-events:none;transition:height var(--spectrum-global-animation-duration-100, 130ms) ease-in-out,opacity var(--spectrum-global-animation-duration-100, 130ms) ease-in-out}.spectrum-ActionBar.is-open{height:calc(var(--spectrum-global-dimension-size-600) + var(--spectrum-global-dimension-size-200) * 2);opacity:1}.spectrum-ActionBar--sticky{left:0;right:0;position:-webkit-sticky;position:sticky}.spectrum-ActionBar--flexible .spectrum-ActionBar-popover{width:auto}.spectrum-ActionBar--fixed{position:fixed}.spectrum-ActionBar-popover{position:relative;box-sizing:border-box;width:100%;margin:auto;height:fit-content;min-width:280px;max-width:960px;padding:5px 16px 5px 16px;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;pointer-events:auto}.spectrum-Popover{display:-ms-inline-flexbox;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;min-width:var(--spectrum-global-dimension-size-400);min-height:var(--spectrum-global-dimension-size-400);position:absolute;border-style:solid;border-width:var(--spectrum-popover-border-size, var(--spectrum-alias-border-size-thin));border-radius:var(--spectrum-popover-border-radius, var(--spectrum-alias-border-radius-regular));outline:none}.spectrum-Popover{background-color:var(--spectrum-popover-background-color, var(--spectrum-global-color-gray-50));border-color:var(--spectrum-popover-border-color, var(--spectrum-alias-border-color-dark));box-shadow:0 1px 4px var(--spectrum-popover-shadow-color, var(--spectrum-alias-dropshadow-color))}sp-buttongroup{display:inline-flex;float:right}`;
//# sourceMappingURL=actionbar.styles.js.map