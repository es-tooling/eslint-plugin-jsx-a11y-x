import { createRequire } from 'module';

import { flatConfigBase } from './configs/flat-config-base.js';
import { legacyConfigBase } from './configs/legacy-config-base.js';

import altText from './rules/alt-text.js';
import anchorAmbiguousText from './rules/anchor-ambiguous-text.js';
import anchorHasContent from './rules/anchor-has-content.js';
import anchorIsValid from './rules/anchor-is-valid.js';
import ariaActivedescendantHasTabindex from './rules/aria-activedescendant-has-tabindex.js';
import ariaProps from './rules/aria-props.js';
import ariaProptypes from './rules/aria-proptypes.js';
import ariaRole from './rules/aria-role.js';
import ariaUnsupportedElements from './rules/aria-unsupported-elements.js';
import autocompleteValid from './rules/autocomplete-valid.js';
import clickEventsHaveKeyEvents from './rules/click-events-have-key-events.js';
import controlHasAssociatedLabel from './rules/control-has-associated-label.js';
import headingHasContent from './rules/heading-has-content.js';
import htmlHasLang from './rules/html-has-lang.js';
import iframeHasTitle from './rules/iframe-has-title.js';
import imgRedundantAlt from './rules/img-redundant-alt.js';
import interactiveSupportsFocus from './rules/interactive-supports-focus.js';
import labelHasAssociatedControl from './rules/label-has-associated-control.js';
import lang from './rules/lang.js';
import mediaHasCaption from './rules/media-has-caption.js';
import mouseEventsHaveKeyEvents from './rules/mouse-events-have-key-events.js';
import noAccessKey from './rules/no-access-key.js';
import noAriaHiddenOnFocusable from './rules/no-aria-hidden-on-focusable.js';
import noAutofocus from './rules/no-autofocus.js';
import noDistractingElements from './rules/no-distracting-elements.js';
import noInteractiveElementToNoninteractiveRole from './rules/no-interactive-element-to-noninteractive-role.js';
import noNoninteractiveElementInteractions from './rules/no-noninteractive-element-interactions.js';
import noNoninteractiveElementToInteractiveRole from './rules/no-noninteractive-element-to-interactive-role.js';
import noNoninteractiveTabindex from './rules/no-noninteractive-tabindex.js';
import noRedundantRoles from './rules/no-redundant-roles.js';
import noStaticElementInteractions from './rules/no-static-element-interactions.js';
import preferTagOverRole from './rules/prefer-tag-over-role.js';
import roleHasRequiredAriaProps from './rules/role-has-required-aria-props.js';
import roleSupportAriaProps from './rules/role-supports-aria-props.js';
import scope from './rules/scope.js';
import tabindexNoPositive from './rules/tabindex-no-positive.js';

const require = createRequire(import.meta.url);
const { name, version } = require('../package.json');

const allRules = {
  'alt-text': altText,
  'anchor-ambiguous-text': anchorAmbiguousText,
  'anchor-has-content': anchorHasContent,
  'anchor-is-valid': anchorIsValid,
  'aria-activedescendant-has-tabindex': ariaActivedescendantHasTabindex,
  'aria-props': ariaProps,
  'aria-proptypes': ariaProptypes,
  'aria-role': ariaRole,
  'aria-unsupported-elements': ariaUnsupportedElements,
  'autocomplete-valid': autocompleteValid,
  'click-events-have-key-events': clickEventsHaveKeyEvents,
  'control-has-associated-label': controlHasAssociatedLabel,
  'heading-has-content': headingHasContent,
  'html-has-lang': htmlHasLang,
  'iframe-has-title': iframeHasTitle,
  'img-redundant-alt': imgRedundantAlt,
  'interactive-supports-focus': interactiveSupportsFocus,
  'label-has-associated-control': labelHasAssociatedControl,
  lang,
  'media-has-caption': mediaHasCaption,
  'mouse-events-have-key-events': mouseEventsHaveKeyEvents,
  'no-access-key': noAccessKey,
  'no-aria-hidden-on-focusable': noAriaHiddenOnFocusable,
  'no-autofocus': noAutofocus,
  'no-distracting-elements': noDistractingElements,
  'no-interactive-element-to-noninteractive-role':
    noInteractiveElementToNoninteractiveRole,
  'no-noninteractive-element-interactions': noNoninteractiveElementInteractions,
  'no-noninteractive-element-to-interactive-role':
    noNoninteractiveElementToInteractiveRole,
  'no-noninteractive-tabindex': noNoninteractiveTabindex,
  'no-redundant-roles': noRedundantRoles,
  'no-static-element-interactions': noStaticElementInteractions,
  'prefer-tag-over-role': preferTagOverRole,
  'role-has-required-aria-props': roleHasRequiredAriaProps,
  'role-supports-aria-props': roleSupportAriaProps,
  scope,
  'tabindex-no-positive': tabindexNoPositive,
};

const recommendedRules = {
  'jsx-a11y-x/alt-text': 'error',
  'jsx-a11y-x/anchor-ambiguous-text': 'off', // TODO: error
  'jsx-a11y-x/anchor-has-content': 'error',
  'jsx-a11y-x/anchor-is-valid': 'error',
  'jsx-a11y-x/aria-activedescendant-has-tabindex': 'error',
  'jsx-a11y-x/aria-props': 'error',
  'jsx-a11y-x/aria-proptypes': 'error',
  'jsx-a11y-x/aria-role': 'error',
  'jsx-a11y-x/aria-unsupported-elements': 'error',
  'jsx-a11y-x/autocomplete-valid': 'error',
  'jsx-a11y-x/click-events-have-key-events': 'error',
  'jsx-a11y-x/control-has-associated-label': [
    'off',
    {
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video',
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      includeRoles: ['alert', 'dialog'],
    },
  ],
  'jsx-a11y-x/heading-has-content': 'error',
  'jsx-a11y-x/html-has-lang': 'error',
  'jsx-a11y-x/iframe-has-title': 'error',
  'jsx-a11y-x/img-redundant-alt': 'error',
  'jsx-a11y-x/interactive-supports-focus': [
    'error',
    {
      tabbable: [
        'button',
        'checkbox',
        'link',
        'searchbox',
        'spinbutton',
        'switch',
        'textbox',
      ],
    },
  ],
  'jsx-a11y-x/label-has-associated-control': 'error',
  'jsx-a11y-x/label-has-for': 'off',
  'jsx-a11y-x/media-has-caption': 'error',
  'jsx-a11y-x/mouse-events-have-key-events': 'error',
  'jsx-a11y-x/no-access-key': 'error',
  'jsx-a11y-x/no-autofocus': 'error',
  'jsx-a11y-x/no-distracting-elements': 'error',
  'jsx-a11y-x/no-interactive-element-to-noninteractive-role': [
    'error',
    {
      tr: ['none', 'presentation'],
      canvas: ['img'],
    },
  ],
  'jsx-a11y-x/no-noninteractive-element-interactions': [
    'error',
    {
      handlers: [
        'onClick',
        'onError',
        'onLoad',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
      alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
      body: ['onError', 'onLoad'],
      dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
      iframe: ['onError', 'onLoad'],
      img: ['onError', 'onLoad'],
    },
  ],
  'jsx-a11y-x/no-noninteractive-element-to-interactive-role': [
    'error',
    {
      ul: [
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'tablist',
        'tree',
        'treegrid',
      ],
      ol: [
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'tablist',
        'tree',
        'treegrid',
      ],
      li: [
        'menuitem',
        'menuitemradio',
        'menuitemcheckbox',
        'option',
        'row',
        'tab',
        'treeitem',
      ],
      table: ['grid'],
      td: ['gridcell'],
      fieldset: ['radiogroup', 'presentation'],
    },
  ],
  'jsx-a11y-x/no-noninteractive-tabindex': [
    'error',
    {
      tags: [],
      roles: ['tabpanel'],
      allowExpressionValues: true,
    },
  ],
  'jsx-a11y-x/no-redundant-roles': 'error',
  'jsx-a11y-x/no-static-element-interactions': [
    'error',
    {
      allowExpressionValues: true,
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
    },
  ],
  'jsx-a11y-x/role-has-required-aria-props': 'error',
  'jsx-a11y-x/role-supports-aria-props': 'error',
  'jsx-a11y-x/scope': 'error',
  'jsx-a11y-x/tabindex-no-positive': 'error',
};

const strictRules = {
  'jsx-a11y-x/alt-text': 'error',
  'jsx-a11y-x/anchor-has-content': 'error',
  'jsx-a11y-x/anchor-is-valid': 'error',
  'jsx-a11y-x/aria-activedescendant-has-tabindex': 'error',
  'jsx-a11y-x/aria-props': 'error',
  'jsx-a11y-x/aria-proptypes': 'error',
  'jsx-a11y-x/aria-role': 'error',
  'jsx-a11y-x/aria-unsupported-elements': 'error',
  'jsx-a11y-x/autocomplete-valid': 'error',
  'jsx-a11y-x/click-events-have-key-events': 'error',
  'jsx-a11y-x/control-has-associated-label': [
    'off',
    {
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video',
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      includeRoles: ['alert', 'dialog'],
    },
  ],
  'jsx-a11y-x/heading-has-content': 'error',
  'jsx-a11y-x/html-has-lang': 'error',
  'jsx-a11y-x/iframe-has-title': 'error',
  'jsx-a11y-x/img-redundant-alt': 'error',
  'jsx-a11y-x/interactive-supports-focus': [
    'error',
    {
      tabbable: [
        'button',
        'checkbox',
        'link',
        'progressbar',
        'searchbox',
        'slider',
        'spinbutton',
        'switch',
        'textbox',
      ],
    },
  ],
  'jsx-a11y-x/label-has-for': 'off',
  'jsx-a11y-x/label-has-associated-control': 'error',
  'jsx-a11y-x/media-has-caption': 'error',
  'jsx-a11y-x/mouse-events-have-key-events': 'error',
  'jsx-a11y-x/no-access-key': 'error',
  'jsx-a11y-x/no-autofocus': 'error',
  'jsx-a11y-x/no-distracting-elements': 'error',
  'jsx-a11y-x/no-interactive-element-to-noninteractive-role': 'error',
  'jsx-a11y-x/no-noninteractive-element-interactions': [
    'error',
    {
      body: ['onError', 'onLoad'],
      iframe: ['onError', 'onLoad'],
      img: ['onError', 'onLoad'],
    },
  ],
  'jsx-a11y-x/no-noninteractive-element-to-interactive-role': 'error',
  'jsx-a11y-x/no-noninteractive-tabindex': 'error',
  'jsx-a11y-x/no-redundant-roles': 'error',
  'jsx-a11y-x/no-static-element-interactions': 'error',
  'jsx-a11y-x/role-has-required-aria-props': 'error',
  'jsx-a11y-x/role-supports-aria-props': 'error',
  'jsx-a11y-x/scope': 'error',
  'jsx-a11y-x/tabindex-no-positive': 'error',
};

/** Base plugin object */
const jsxA11y = {
  meta: { name, version },
  rules: { ...allRules },
};

/**
 * Given a ruleset and optionally a flat config name, generate a config.
 *
 * @param {object} rules - Ruleset for this config
 * @param {string} flatConfigName - Name for the config if flat
 * @returns Config for this set of rules.
 */
const createConfig = (rules, flatConfigName) => ({
  ...(flatConfigName
    ? {
        ...flatConfigBase,
        name: `jsx-a11y-x/${flatConfigName}`,
        plugins: { 'jsx-a11y-x': jsxA11y },
      }
    : { ...legacyConfigBase, plugins: ['jsx-a11y-x'] }),
  rules: { ...rules },
});

// Create configs for the plugin object
const configs = {
  recommended: createConfig(recommendedRules),
  strict: createConfig(strictRules),
};
const flatConfigs = {
  recommended: createConfig(recommendedRules, 'recommended'),
  strict: createConfig(strictRules, 'strict'),
};

const plugin = Object.assign(jsxA11y, { configs, flatConfigs });

export default plugin;
