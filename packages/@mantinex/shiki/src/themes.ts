export const light = {
  author: 'akamud',
  name: 'OneLight',
  colors: {
    'activityBar.background': '#FAFAFA',
    'activityBar.foreground': '#121417',
    'editorInlayHint.background': '#F5F5F5',
    'editorInlayHint.foreground': '#AFB2BB',
    'notebook.cellEditorBackground': '#F5F5F5',
    'activityBarBadge.background': '#526FFF',
    'activityBarBadge.foreground': '#FFFFFF',
    'button.background': '#5871EF',
    'button.foreground': '#FFFFFF',
    'button.hoverBackground': '#6B83ED',
    'diffEditor.insertedTextBackground': '#00809B33',
    'dropdown.background': '#FFFFFF',
    'dropdown.border': '#DBDBDC',
    'editorIndentGuide.activeBackground': '#626772',
    'editor.background': '#FAFAFA',
    'editor.foreground': '#383A42',
    'editor.lineHighlightBackground': '#383A420C',
    'editor.selectionBackground': '#E5E5E6',
    'editorCursor.foreground': '#526FFF',
    'editor.findMatchHighlightBackground': '#526FFF33',
    'editorGroup.background': '#EAEAEB',
    'editorGroup.border': '#DBDBDC',
    'editorGroupHeader.tabsBackground': '#EAEAEB',
    'editorIndentGuide.background': '#383A4233',
    'editorLineNumber.foreground': '#9D9D9F',
    'editorLineNumber.activeForeground': '#383A42',
    'editorWhitespace.foreground': '#383A4233',
    'editorRuler.foreground': '#383A4233',
    'editorHoverWidget.background': '#EAEAEB',
    'editorHoverWidget.border': '#DBDBDC',
    'editorSuggestWidget.background': '#EAEAEB',
    'editorSuggestWidget.border': '#DBDBDC',
    'editorSuggestWidget.selectedBackground': '#FFFFFF',
    'editorWidget.background': '#EAEAEB',
    'editorWidget.border': '#E5E5E6',
    'input.background': '#FFFFFF',
    'input.border': '#DBDBDC',
    focusBorder: '#526FFF',
    'list.activeSelectionBackground': '#DBDBDC',
    'list.activeSelectionForeground': '#232324',
    'list.focusBackground': '#DBDBDC',
    'list.hoverBackground': '#DBDBDC66',
    'list.highlightForeground': '#121417',
    'list.inactiveSelectionBackground': '#DBDBDC',
    'list.inactiveSelectionForeground': '#232324',
    'notification.background': '#333333',
    'pickerGroup.border': '#526FFF',
    'scrollbarSlider.background': '#4E566680',
    'scrollbarSlider.activeBackground': '#747D9180',
    'scrollbarSlider.hoverBackground': '#5A637580',
    'sideBar.background': '#EAEAEB',
    'sideBarSectionHeader.background': '#FAFAFA',
    'statusBar.background': '#EAEAEB',
    'statusBar.foreground': '#424243',
    'statusBarItem.hoverBackground': '#DBDBDC',
    'statusBar.noFolderBackground': '#EAEAEB',
    'tab.activeBackground': '#FAFAFA',
    'tab.activeForeground': '#121417',
    'tab.border': '#DBDBDC',
    'tab.inactiveBackground': '#EAEAEB',
    'titleBar.activeBackground': '#EAEAEB',
    'titleBar.activeForeground': '#424243',
    'titleBar.inactiveBackground': '#EAEAEB',
    'titleBar.inactiveForeground': '#424243',
    'statusBar.debuggingForeground': '#FFFFFF',
    'extensionButton.prominentBackground': '#3BBA54',
    'extensionButton.prominentHoverBackground': '#4CC263',
    'badge.background': '#526FFF',
    'badge.foreground': '#FFFFFF',
    'peekView.border': '#526FFF',
    'peekViewResult.background': '#EAEAEB',
    'peekViewResult.selectionBackground': '#DBDBDC',
    'peekViewTitle.background': '#FFFFFF',
    'peekViewEditor.background': '#FFFFFF',
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: ['comment'],
      settings: { foreground: '#A0A1A7', fontStyle: 'italic' },
    },
    {
      name: 'Comment Markup Link',
      scope: ['comment markup.link'],
      settings: { foreground: '#A0A1A7' },
    },
    { name: 'Entity Name Type', scope: ['entity.name.type'], settings: { foreground: '#C18401' } },
    {
      name: 'Entity Other Inherited Class',
      scope: ['entity.other.inherited-class'],
      settings: { foreground: '#C18401' },
    },
    { name: 'Keyword', scope: ['keyword'], settings: { foreground: '#A626A4' } },
    { name: 'Keyword Control', scope: ['keyword.control'], settings: { foreground: '#A626A4' } },
    { name: 'Keyword Operator', scope: ['keyword.operator'], settings: { foreground: '#383A42' } },
    {
      name: 'Keyword Other Special Method',
      scope: ['keyword.other.special-method'],
      settings: { foreground: '#4078F2' },
    },
    {
      name: 'Keyword Other Unit',
      scope: ['keyword.other.unit'],
      settings: { foreground: '#986801' },
    },
    { name: 'Storage', scope: ['storage'], settings: { foreground: '#A626A4' } },
    {
      name: 'Storage Type Annotation,storage Type Primitive',
      scope: ['storage.type.annotation', 'storage.type.primitive'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Storage Modifier Package,storage Modifier Import',
      scope: ['storage.modifier.package', 'storage.modifier.import'],
      settings: { foreground: '#383A42' },
    },
    { name: 'Constant', scope: ['constant'], settings: { foreground: '#986801' } },
    {
      name: 'Constant Variable',
      scope: ['constant.variable'],
      settings: { foreground: '#986801' },
    },
    {
      name: 'Constant Character Escape',
      scope: ['constant.character.escape'],
      settings: { foreground: '#0184BC' },
    },
    { name: 'Constant Numeric', scope: ['constant.numeric'], settings: { foreground: '#986801' } },
    {
      name: 'Constant Other Color',
      scope: ['constant.other.color'],
      settings: { foreground: '#0184BC' },
    },
    {
      name: 'Constant Other Symbol',
      scope: ['constant.other.symbol'],
      settings: { foreground: '#0184BC' },
    },
    { name: 'Variable', scope: ['variable'], settings: { foreground: '#E45649' } },
    {
      name: 'Variable Interpolation',
      scope: ['variable.interpolation'],
      settings: { foreground: '#CA1243' },
    },
    {
      name: 'Variable Parameter',
      scope: ['variable.parameter'],
      settings: { foreground: '#383A42' },
    },
    { name: 'String', scope: ['string'], settings: { foreground: '#50A14F' } },
    {
      name: 'String > Source,string Embedded',
      scope: ['string > source', 'string embedded'],
      settings: { foreground: '#383A42' },
    },
    { name: 'String Regexp', scope: ['string.regexp'], settings: { foreground: '#0184BC' } },
    {
      name: 'String Regexp Source Ruby Embedded',
      scope: ['string.regexp source.ruby.embedded'],
      settings: { foreground: '#C18401' },
    },
    {
      name: 'String Other Link',
      scope: ['string.other.link'],
      settings: { foreground: '#E45649' },
    },
    {
      name: 'Punctuation Definition Comment',
      scope: ['punctuation.definition.comment'],
      settings: { foreground: '#A0A1A7' },
    },
    {
      name: 'Punctuation Definition Method Parameters,punctuation Definition Function Parameters,punctuation Definition Parameters,punctuation Definition Separator,punctuation Definition Seperator,punctuation Definition Array',
      scope: [
        'punctuation.definition.method-parameters',
        'punctuation.definition.function-parameters',
        'punctuation.definition.parameters',
        'punctuation.definition.separator',
        'punctuation.definition.seperator',
        'punctuation.definition.array',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: 'Punctuation Definition Heading,punctuation Definition Identity',
      scope: ['punctuation.definition.heading', 'punctuation.definition.identity'],
      settings: { foreground: '#4078F2' },
    },
    {
      name: 'Punctuation Definition Bold',
      scope: ['punctuation.definition.bold'],
      settings: { foreground: '#C18401', fontStyle: 'bold' },
    },
    {
      name: 'Punctuation Definition Italic',
      scope: ['punctuation.definition.italic'],
      settings: { foreground: '#A626A4', fontStyle: 'italic' },
    },
    {
      name: 'Punctuation Section Embedded',
      scope: ['punctuation.section.embedded'],
      settings: { foreground: '#CA1243' },
    },
    {
      name: 'Punctuation Section Method,punctuation Section Class,punctuation Section Inner Class',
      scope: [
        'punctuation.section.method',
        'punctuation.section.class',
        'punctuation.section.inner-class',
      ],
      settings: { foreground: '#383A42' },
    },
    { name: 'Support Class', scope: ['support.class'], settings: { foreground: '#C18401' } },
    { name: 'Support Type', scope: ['support.type'], settings: { foreground: '#0184BC' } },
    { name: 'Support Function', scope: ['support.function'], settings: { foreground: '#0184BC' } },
    {
      name: 'Support Function Any Method',
      scope: ['support.function.any-method'],
      settings: { foreground: '#4078F2' },
    },
    {
      name: 'Entity Name Function',
      scope: ['entity.name.function'],
      settings: { foreground: '#4078F2' },
    },
    {
      name: 'Entity Name Class,entity Name Type Class',
      scope: ['entity.name.class', 'entity.name.type.class'],
      settings: { foreground: '#C18401' },
    },
    {
      name: 'Entity Name Section',
      scope: ['entity.name.section'],
      settings: { foreground: '#4078F2' },
    },
    { name: 'Entity Name Tag', scope: ['entity.name.tag'], settings: { foreground: '#E45649' } },
    {
      name: 'Entity Other Attribute Name',
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#986801' },
    },
    {
      name: 'Entity Other Attribute Name Id',
      scope: ['entity.other.attribute-name.id'],
      settings: { foreground: '#4078F2' },
    },
    { name: 'Meta Class', scope: ['meta.class'], settings: { foreground: '#C18401' } },
    { name: 'Meta Class Body', scope: ['meta.class.body'], settings: { foreground: '#383A42' } },
    {
      name: 'Meta Method Call,meta Method',
      scope: ['meta.method-call', 'meta.method'],
      settings: { foreground: '#383A42' },
    },
    {
      name: 'Meta Definition Variable',
      scope: ['meta.definition.variable'],
      settings: { foreground: '#E45649' },
    },
    { name: 'Meta Link', scope: ['meta.link'], settings: { foreground: '#986801' } },
    { name: 'Meta Require', scope: ['meta.require'], settings: { foreground: '#4078F2' } },
    { name: 'Meta Selector', scope: ['meta.selector'], settings: { foreground: '#A626A4' } },
    { name: 'Meta Separator', scope: ['meta.separator'], settings: { foreground: '#383A42' } },
    { name: 'Meta Tag', scope: ['meta.tag'], settings: { foreground: '#383A42' } },
    { name: 'Underline', scope: ['underline'], settings: { 'text-decoration': 'underline' } },
    { name: 'None', scope: ['none'], settings: { foreground: '#383A42' } },
    {
      name: 'Invalid Deprecated',
      scope: ['invalid.deprecated'],
      settings: { foreground: '#000000', background: '#F2A60D' },
    },
    {
      name: 'Invalid Illegal',
      scope: ['invalid.illegal'],
      settings: { foreground: 'white', background: '#FF1414' },
    },
    {
      name: 'Markup Bold',
      scope: ['markup.bold'],
      settings: { foreground: '#986801', fontStyle: 'bold' },
    },
    { name: 'Markup Changed', scope: ['markup.changed'], settings: { foreground: '#A626A4' } },
    { name: 'Markup Deleted', scope: ['markup.deleted'], settings: { foreground: '#E45649' } },
    {
      name: 'Markup Italic',
      scope: ['markup.italic'],
      settings: { foreground: '#A626A4', fontStyle: 'italic' },
    },
    { name: 'Markup Heading', scope: ['markup.heading'], settings: { foreground: '#E45649' } },
    {
      name: 'Markup Heading Punctuation Definition Heading',
      scope: ['markup.heading punctuation.definition.heading'],
      settings: { foreground: '#4078F2' },
    },
    { name: 'Markup Link', scope: ['markup.link'], settings: { foreground: '#0184BC' } },
    { name: 'Markup Inserted', scope: ['markup.inserted'], settings: { foreground: '#50A14F' } },
    { name: 'Markup Quote', scope: ['markup.quote'], settings: { foreground: '#986801' } },
    { name: 'Markup Raw', scope: ['markup.raw'], settings: { foreground: '#50A14F' } },
    {
      name: 'Source C Keyword Operator',
      scope: ['source.c keyword.operator'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Source Cpp Keyword Operator',
      scope: ['source.cpp keyword.operator'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Source Cs Keyword Operator',
      scope: ['source.cs keyword.operator'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Source Css Property Name,source Css Property Value',
      scope: ['source.css property-name', 'source.css property-value'],
      settings: { foreground: '#696C77' },
    },
    {
      name: 'Source Css Property Name Support,source Css Property Value Support',
      scope: ['source.css property-name.support', 'source.css property-value.support'],
      settings: { foreground: '#383A42' },
    },
    {
      name: 'Source Elixir Source Embedded Source',
      scope: ['source.elixir source.embedded.source'],
      settings: { foreground: '#383A42' },
    },
    {
      name: 'Source Elixir Constant Language,source Elixir Constant Numeric,source Elixir Constant Definition',
      scope: [
        'source.elixir constant.language',
        'source.elixir constant.numeric',
        'source.elixir constant.definition',
      ],
      settings: { foreground: '#4078F2' },
    },
    {
      name: 'Source Elixir Variable Definition,source Elixir Variable Anonymous',
      scope: ['source.elixir variable.definition', 'source.elixir variable.anonymous'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Source Elixir Parameter Variable Function',
      scope: ['source.elixir parameter.variable.function'],
      settings: { foreground: '#986801', fontStyle: 'italic' },
    },
    {
      name: 'Source Elixir Quoted',
      scope: ['source.elixir quoted'],
      settings: { foreground: '#50A14F' },
    },
    {
      name: 'Source Elixir Keyword Special Method,source Elixir Embedded Section,source Elixir Embedded Source Empty',
      scope: [
        'source.elixir keyword.special-method',
        'source.elixir embedded.section',
        'source.elixir embedded.source.empty',
      ],
      settings: { foreground: '#E45649' },
    },
    {
      name: 'Source Elixir Readwrite Module Punctuation',
      scope: ['source.elixir readwrite.module punctuation'],
      settings: { foreground: '#E45649' },
    },
    {
      name: 'Source Elixir Regexp Section,source Elixir Regexp String',
      scope: ['source.elixir regexp.section', 'source.elixir regexp.string'],
      settings: { foreground: '#CA1243' },
    },
    {
      name: 'Source Elixir Separator,source Elixir Keyword Operator',
      scope: ['source.elixir separator', 'source.elixir keyword.operator'],
      settings: { foreground: '#986801' },
    },
    {
      name: 'Source Elixir Variable Constant',
      scope: ['source.elixir variable.constant'],
      settings: { foreground: '#C18401' },
    },
    {
      name: 'Source Elixir Array,source Elixir Scope,source Elixir Section',
      scope: ['source.elixir array', 'source.elixir scope', 'source.elixir section'],
      settings: { foreground: '#696C77' },
    },
    {
      name: 'Source Gfm Markup',
      scope: ['source.gfm markup'],
      settings: { '-webkit-font-smoothing': 'auto' },
    },
    {
      name: 'Source Gfm Link Entity',
      scope: ['source.gfm link entity'],
      settings: { foreground: '#4078F2' },
    },
    {
      name: 'Source Go Storage Type String',
      scope: ['source.go storage.type.string'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Source Ini Keyword Other Definition Ini',
      scope: ['source.ini keyword.other.definition.ini'],
      settings: { foreground: '#E45649' },
    },
    {
      name: 'Source Java Storage Modifier Import',
      scope: ['source.java storage.modifier.import'],
      settings: { foreground: '#C18401' },
    },
    {
      name: 'Source Java Storage Type',
      scope: ['source.java storage.type'],
      settings: { foreground: '#C18401' },
    },
    {
      name: 'Source Java Keyword Operator Instanceof',
      scope: ['source.java keyword.operator.instanceof'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Source Java Properties Meta Key Pair',
      scope: ['source.java-properties meta.key-pair'],
      settings: { foreground: '#E45649' },
    },
    {
      name: 'Source Java Properties Meta Key Pair > Punctuation',
      scope: ['source.java-properties meta.key-pair > punctuation'],
      settings: { foreground: '#383A42' },
    },
    {
      name: 'Source Js Keyword Operator',
      scope: ['source.js keyword.operator'],
      settings: { foreground: '#0184BC' },
    },
    {
      name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
      scope: [
        'source.js keyword.operator.delete',
        'source.js keyword.operator.in',
        'source.js keyword.operator.of',
        'source.js keyword.operator.instanceof',
        'source.js keyword.operator.new',
        'source.js keyword.operator.typeof',
        'source.js keyword.operator.void',
      ],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Source Ts Keyword Operator',
      scope: ['source.ts keyword.operator'],
      settings: { foreground: '#0184BC' },
    },
    {
      name: 'Source Flow Keyword Operator',
      scope: ['source.flow keyword.operator'],
      settings: { foreground: '#0184BC' },
    },
    {
      name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
      scope: ['source.json meta.structure.dictionary.json > string.quoted.json'],
      settings: { foreground: '#E45649' },
    },
    {
      name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
      scope: [
        'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
      ],
      settings: { foreground: '#E45649' },
    },
    {
      name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
      scope: [
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
        'source.json meta.structure.array.json > value.json > string.quoted.json',
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation',
        'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
      ],
      settings: { foreground: '#50A14F' },
    },
    {
      name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
      scope: [
        'source.json meta.structure.dictionary.json > constant.language.json',
        'source.json meta.structure.array.json > constant.language.json',
      ],
      settings: { foreground: '#0184BC' },
    },
    { name: 'Ng Interpolation', scope: ['ng.interpolation'], settings: { foreground: '#E45649' } },
    {
      name: 'Ng Interpolation Begin,ng Interpolation End',
      scope: ['ng.interpolation.begin', 'ng.interpolation.end'],
      settings: { foreground: '#4078F2' },
    },
    {
      name: 'Ng Interpolation Function',
      scope: ['ng.interpolation function'],
      settings: { foreground: '#E45649' },
    },
    {
      name: 'Ng Interpolation Function Begin,ng Interpolation Function End',
      scope: ['ng.interpolation function.begin', 'ng.interpolation function.end'],
      settings: { foreground: '#4078F2' },
    },
    {
      name: 'Ng Interpolation Bool',
      scope: ['ng.interpolation bool'],
      settings: { foreground: '#986801' },
    },
    {
      name: 'Ng Interpolation Bracket',
      scope: ['ng.interpolation bracket'],
      settings: { foreground: '#383A42' },
    },
    {
      name: 'Ng Pipe,ng Operator',
      scope: ['ng.pipe', 'ng.operator'],
      settings: { foreground: '#383A42' },
    },
    { name: 'Ng Tag', scope: ['ng.tag'], settings: { foreground: '#0184BC' } },
    {
      name: 'Ng Attribute With Value Attribute Name',
      scope: ['ng.attribute-with-value attribute-name'],
      settings: { foreground: '#C18401' },
    },
    {
      name: 'Ng Attribute With Value String',
      scope: ['ng.attribute-with-value string'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Ng Attribute With Value String Begin,ng Attribute With Value String End',
      scope: ['ng.attribute-with-value string.begin', 'ng.attribute-with-value string.end'],
      settings: { foreground: '#383A42' },
    },
    {
      name: 'Source Ruby Constant Other Symbol > Punctuation',
      scope: ['source.ruby constant.other.symbol > punctuation'],
      settings: { foreground: 'inherit' },
    },
    {
      name: 'Source Php Class Bracket',
      scope: ['source.php class.bracket'],
      settings: { foreground: '#383A42' },
    },
    {
      name: 'Source Python Keyword Operator Logical Python',
      scope: ['source.python keyword.operator.logical.python'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: 'Source Python Variable Parameter',
      scope: ['source.python variable.parameter'],
      settings: { foreground: '#986801' },
    },
    { name: 'customrule', scope: 'customrule', settings: { foreground: '#383A42' } },
    {
      name: '[VSCODE-CUSTOM] Support Type Property Name',
      scope: 'support.type.property-name',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Punctuation for Quoted String',
      scope: 'string.quoted.double punctuation',
      settings: { foreground: '#50A14F' },
    },
    {
      name: '[VSCODE-CUSTOM] Support Constant',
      scope: 'support.constant',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] JSON Property Name',
      scope: 'support.type.property-name.json',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
      scope: 'support.type.property-name.json punctuation',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Punctuation for key-value',
      scope: [
        'punctuation.separator.key-value.ts',
        'punctuation.separator.key-value.js',
        'punctuation.separator.key-value.tsx',
      ],
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Embedded Operator',
      scope: [
        'source.js.embedded.html keyword.operator',
        'source.ts.embedded.html keyword.operator',
      ],
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Variable Other Readwrite',
      scope: [
        'variable.other.readwrite.js',
        'variable.other.readwrite.ts',
        'variable.other.readwrite.tsx',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Support Variable Dom',
      scope: ['support.variable.dom.js', 'support.variable.dom.ts'],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Support Variable Property Dom',
      scope: ['support.variable.property.dom.js', 'support.variable.property.dom.ts'],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Interpolation String Punctuation',
      scope: [
        'meta.template.expression.js punctuation.definition',
        'meta.template.expression.ts punctuation.definition',
      ],
      settings: { foreground: '#CA1243' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Punctuation Type Parameters',
      scope: [
        'source.ts punctuation.definition.typeparameters',
        'source.js punctuation.definition.typeparameters',
        'source.tsx punctuation.definition.typeparameters',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Definition Block',
      scope: [
        'source.ts punctuation.definition.block',
        'source.js punctuation.definition.block',
        'source.tsx punctuation.definition.block',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Punctuation Separator Comma',
      scope: [
        'source.ts punctuation.separator.comma',
        'source.js punctuation.separator.comma',
        'source.tsx punctuation.separator.comma',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Variable Property',
      scope: [
        'support.variable.property.js',
        'support.variable.property.ts',
        'support.variable.property.tsx',
      ],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Default Keyword',
      scope: [
        'keyword.control.default.js',
        'keyword.control.default.ts',
        'keyword.control.default.tsx',
      ],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Instanceof Keyword',
      scope: [
        'keyword.operator.expression.instanceof.js',
        'keyword.operator.expression.instanceof.ts',
        'keyword.operator.expression.instanceof.tsx',
      ],
      settings: { foreground: '#A626A4' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Of Keyword',
      scope: [
        'keyword.operator.expression.of.js',
        'keyword.operator.expression.of.ts',
        'keyword.operator.expression.of.tsx',
      ],
      settings: { foreground: '#A626A4' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Braces/Brackets',
      scope: [
        'meta.brace.round.js',
        'meta.array-binding-pattern-variable.js',
        'meta.brace.square.js',
        'meta.brace.round.ts',
        'meta.array-binding-pattern-variable.ts',
        'meta.brace.square.ts',
        'meta.brace.round.tsx',
        'meta.array-binding-pattern-variable.tsx',
        'meta.brace.square.tsx',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Punctuation Accessor',
      scope: [
        'source.js punctuation.accessor',
        'source.ts punctuation.accessor',
        'source.tsx punctuation.accessor',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Punctuation Terminator Statement',
      scope: [
        'punctuation.terminator.statement.js',
        'punctuation.terminator.statement.ts',
        'punctuation.terminator.statement.tsx',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Array variables',
      scope: [
        'meta.array-binding-pattern-variable.js variable.other.readwrite.js',
        'meta.array-binding-pattern-variable.ts variable.other.readwrite.ts',
        'meta.array-binding-pattern-variable.tsx variable.other.readwrite.tsx',
      ],
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Support Variables',
      scope: [
        'source.js support.variable',
        'source.ts support.variable',
        'source.tsx support.variable',
      ],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Support Variables',
      scope: [
        'variable.other.constant.property.js',
        'variable.other.constant.property.ts',
        'variable.other.constant.property.tsx',
      ],
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Keyword New',
      scope: ['keyword.operator.new.ts', 'keyword.operator.new.j', 'keyword.operator.new.tsx'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: '[VSCODE-CUSTOM] TS Keyword Operator',
      scope: ['source.ts keyword.operator', 'source.tsx keyword.operator'],
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Punctuation Parameter Separator',
      scope: [
        'punctuation.separator.parameter.js',
        'punctuation.separator.parameter.ts',
        'punctuation.separator.parameter.tsx ',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Import',
      scope: ['constant.language.import-export-all.js', 'constant.language.import-export-all.ts'],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JSX/TSX Import',
      scope: ['constant.language.import-export-all.jsx', 'constant.language.import-export-all.tsx'],
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Keyword Control As',
      scope: [
        'keyword.control.as.js',
        'keyword.control.as.ts',
        'keyword.control.as.jsx',
        'keyword.control.as.tsx',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Variable Alias',
      scope: [
        'variable.other.readwrite.alias.js',
        'variable.other.readwrite.alias.ts',
        'variable.other.readwrite.alias.jsx',
        'variable.other.readwrite.alias.tsx',
      ],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Constants',
      scope: [
        'variable.other.constant.js',
        'variable.other.constant.ts',
        'variable.other.constant.jsx',
        'variable.other.constant.tsx',
      ],
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Export Variable',
      scope: [
        'meta.export.default.js variable.other.readwrite.js',
        'meta.export.default.ts variable.other.readwrite.ts',
      ],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Template Strings Punctuation Accessor',
      scope: [
        'source.js meta.template.expression.js punctuation.accessor',
        'source.ts meta.template.expression.ts punctuation.accessor',
        'source.tsx meta.template.expression.tsx punctuation.accessor',
      ],
      settings: { foreground: '#50A14F' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Import equals',
      scope: [
        'source.js meta.import-equals.external.js keyword.operator',
        'source.jsx meta.import-equals.external.jsx keyword.operator',
        'source.ts meta.import-equals.external.ts keyword.operator',
        'source.tsx meta.import-equals.external.tsx keyword.operator',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Type Module',
      scope:
        'entity.name.type.module.js,entity.name.type.module.ts,entity.name.type.module.jsx,entity.name.type.module.tsx',
      settings: { foreground: '#50A14F' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Meta Class',
      scope: 'meta.class.js,meta.class.ts,meta.class.jsx,meta.class.tsx',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Property Definition Variable',
      scope: [
        'meta.definition.property.js variable',
        'meta.definition.property.ts variable',
        'meta.definition.property.jsx variable',
        'meta.definition.property.tsx variable',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Meta Type Parameters Type',
      scope: [
        'meta.type.parameters.js support.type',
        'meta.type.parameters.jsx support.type',
        'meta.type.parameters.ts support.type',
        'meta.type.parameters.tsx support.type',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Meta Tag Keyword Operator',
      scope: [
        'source.js meta.tag.js keyword.operator',
        'source.jsx meta.tag.jsx keyword.operator',
        'source.ts meta.tag.ts keyword.operator',
        'source.tsx meta.tag.tsx keyword.operator',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Meta Tag Punctuation',
      scope: [
        'meta.tag.js punctuation.section.embedded',
        'meta.tag.jsx punctuation.section.embedded',
        'meta.tag.ts punctuation.section.embedded',
        'meta.tag.tsx punctuation.section.embedded',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Meta Array Literal Variable',
      scope: [
        'meta.array.literal.js variable',
        'meta.array.literal.jsx variable',
        'meta.array.literal.ts variable',
        'meta.array.literal.tsx variable',
      ],
      settings: { foreground: '#C18401' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Module Exports',
      scope: [
        'support.type.object.module.js',
        'support.type.object.module.jsx',
        'support.type.object.module.ts',
        'support.type.object.module.tsx',
      ],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] JSON Constants',
      scope: ['constant.language.json'],
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Object Constants',
      scope: [
        'variable.other.constant.object.js',
        'variable.other.constant.object.jsx',
        'variable.other.constant.object.ts',
        'variable.other.constant.object.tsx',
      ],
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Properties Keyword',
      scope: [
        'storage.type.property.js',
        'storage.type.property.jsx',
        'storage.type.property.ts',
        'storage.type.property.tsx',
      ],
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Single Quote Inside Templated String',
      scope: [
        'meta.template.expression.js string.quoted punctuation.definition',
        'meta.template.expression.jsx string.quoted punctuation.definition',
        'meta.template.expression.ts string.quoted punctuation.definition',
        'meta.template.expression.tsx string.quoted punctuation.definition',
      ],
      settings: { foreground: '#50A14F' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Backtick inside Templated String',
      scope: [
        'meta.template.expression.js string.template punctuation.definition.string.template',
        'meta.template.expression.jsx string.template punctuation.definition.string.template',
        'meta.template.expression.ts string.template punctuation.definition.string.template',
        'meta.template.expression.tsx string.template punctuation.definition.string.template',
      ],
      settings: { foreground: '#50A14F' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS In Keyword for Loops',
      scope: [
        'keyword.operator.expression.in.js',
        'keyword.operator.expression.in.jsx',
        'keyword.operator.expression.in.ts',
        'keyword.operator.expression.in.tsx',
      ],
      settings: { foreground: '#A626A4' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Variable Other Object',
      scope: ['variable.other.object.js', 'variable.other.object.ts'],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] JS/TS Meta Object Literal Key',
      scope: ['meta.object-literal.key.js', 'meta.object-literal.key.ts'],
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] Python Constants Other',
      scope: 'source.python constant.other',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Python Constants',
      scope: 'source.python constant',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Python Placeholder Character',
      scope: 'constant.character.format.placeholder.other.python storage',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Python Magic',
      scope: 'support.variable.magic.python',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] Python Meta Function Parameters',
      scope: 'meta.function.parameters.python',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Python Function Separator Annotation',
      scope: 'punctuation.separator.annotation.python',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Python Function Separator Punctuation',
      scope: 'punctuation.separator.parameters.python',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] CSharp Fields',
      scope: 'entity.name.variable.field.cs',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] CSharp Keyword Operators',
      scope: 'source.cs keyword.operator',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] CSharp Variables',
      scope: 'variable.other.readwrite.cs',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] CSharp Variables Other',
      scope: 'variable.other.object.cs',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] CSharp Property Other',
      scope: 'variable.other.object.property.cs',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] CSharp Property',
      scope: 'entity.name.variable.property.cs',
      settings: { foreground: '#4078F2' },
    },
    {
      name: '[VSCODE-CUSTOM] CSharp Storage Type',
      scope: 'storage.type.cs',
      settings: { foreground: '#C18401' },
    },
    {
      name: '[VSCODE-CUSTOM] Rust Unsafe Keyword',
      scope: 'keyword.other.unsafe.rust',
      settings: { foreground: '#A626A4' },
    },
    {
      name: '[VSCODE-CUSTOM] Rust Entity Name Type',
      scope: 'entity.name.type.rust',
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] Rust Storage Modifier Lifetime',
      scope: 'storage.modifier.lifetime.rust',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Rust Entity Name Lifetime',
      scope: 'entity.name.lifetime.rust',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Rust Storage Type Core',
      scope: 'storage.type.core.rust',
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] Rust Meta Attribute',
      scope: 'meta.attribute.rust',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Rust Storage Class Std',
      scope: 'storage.class.std.rust',
      settings: { foreground: '#0184BC' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Raw Block',
      scope: 'markup.raw.block.markdown',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Shell Variables Punctuation Definition',
      scope: 'punctuation.definition.variable.shell',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] Css Support Constant Value',
      scope: 'support.constant.property-value.css',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Css Punctuation Definition Constant',
      scope: 'punctuation.definition.constant.css',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Sass Punctuation for key-value',
      scope: 'punctuation.separator.key-value.scss',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] Sass Punctuation for constants',
      scope: 'punctuation.definition.constant.scss',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Sass Punctuation for key-value',
      scope: 'meta.property-list.scss punctuation.separator.key-value.scss',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Java Storage Type Primitive Array',
      scope: 'storage.type.primitive.array.java',
      settings: { foreground: '#C18401' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown headings',
      scope: 'entity.name.section.markdown',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
      scope: 'punctuation.definition.heading.markdown',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown heading setext',
      scope: 'markup.heading.setext',
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
      scope: 'punctuation.definition.bold.markdown',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Inline Raw',
      scope: 'markup.inline.raw.markdown',
      settings: { foreground: '#50A14F' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
      scope: 'beginning.punctuation.definition.list.markdown',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Quote',
      scope: 'markup.quote.markdown',
      settings: { foreground: '#A0A1A7', fontStyle: 'italic' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown',
      ],
      settings: { foreground: '#383A42' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
      scope: 'punctuation.definition.metadata.markdown',
      settings: { foreground: '#A626A4' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
      scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
      settings: { foreground: '#A626A4' },
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
      scope: ['string.other.link.title.markdown', 'string.other.link.description.markdown'],
      settings: { foreground: '#4078F2' },
    },
    {
      name: '[VSCODE-CUSTOM] Ruby Punctuation Separator Variable',
      scope: 'punctuation.separator.variable.ruby',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] Ruby Other Constant Variable',
      scope: 'variable.other.constant.ruby',
      settings: { foreground: '#986801' },
    },
    {
      name: '[VSCODE-CUSTOM] Ruby Keyword Operator Other',
      scope: 'keyword.operator.other.ruby',
      settings: { foreground: '#50A14F' },
    },
    {
      name: '[VSCODE-CUSTOM] PHP Punctuation Variable Definition',
      scope: 'punctuation.definition.variable.php',
      settings: { foreground: '#E45649' },
    },
    {
      name: '[VSCODE-CUSTOM] PHP Meta Class',
      scope: 'meta.class.php',
      settings: { foreground: '#383A42' },
    },
  ],
  uuid: '1446a9a1-9d70-421a-bae3-87b3b112ddb0',
};

export const dark = {
  type: 'dark',
  colors: {
    'dropdown.background': '#525252',
    'list.activeSelectionBackground': '#707070',
    'quickInputList.focusBackground': '#707070',
    'list.inactiveSelectionBackground': '#4e4e4e',
    'list.hoverBackground': '#444444',
    'list.highlightForeground': '#e58520',
    'button.background': '#565656',
    'editor.background': '#1e1e1e',
    'editor.foreground': '#c5c8c6',
    'editor.selectionBackground': '#676b7180',
    'minimap.selectionHighlight': '#676b7180',
    'editor.selectionHighlightBackground': '#575b6180',
    'editor.lineHighlightBackground': '#303030',
    'editorLineNumber.activeForeground': '#949494',
    'editor.wordHighlightBackground': '#4747a180',
    'editor.wordHighlightStrongBackground': '#6767ce80',
    'editorCursor.foreground': '#c07020',
    'editorWhitespace.foreground': '#505037',
    'editorIndentGuide.background': '#505037',
    'editorIndentGuide.activeBackground': '#707057',
    'editorGroupHeader.tabsBackground': '#282828',
    'tab.inactiveBackground': '#404040',
    'tab.border': '#303030',
    'tab.inactiveForeground': '#d8d8d8',
    'tab.lastPinnedBorder': '#505050',
    'peekView.border': '#3655b5',
    'panelTitle.activeForeground': '#ffffff',
    'statusBar.background': '#505050',
    'statusBar.debuggingBackground': '#505050',
    'statusBar.noFolderBackground': '#505050',
    'titleBar.activeBackground': '#505050',
    'statusBarItem.remoteBackground': '#3655b5',
    'ports.iconRunningProcessForeground': '#CCCCCC',
    'activityBar.background': '#353535',
    'activityBar.foreground': '#ffffff',
    'activityBarBadge.background': '#3655b5',
    'sideBar.background': '#272727',
    'sideBarSectionHeader.background': '#505050',
    'menu.background': '#272727',
    'menu.foreground': '#CCCCCC',
    'pickerGroup.foreground': '#b0b0b0',
    'inputOption.activeBorder': '#3655b5',
    focusBorder: '#3655b5',
    'terminal.ansiBlack': '#1e1e1e',
    'terminal.ansiRed': '#C4265E',
    'terminal.ansiGreen': '#86B42B',
    'terminal.ansiYellow': '#B3B42B',
    'terminal.ansiBlue': '#6A7EC8',
    'terminal.ansiMagenta': '#8C6BC8',
    'terminal.ansiCyan': '#56ADBC',
    'terminal.ansiWhite': '#e3e3dd',
    'terminal.ansiBrightBlack': '#666666',
    'terminal.ansiBrightRed': '#f92672',
    'terminal.ansiBrightGreen': '#A6E22E',
    'terminal.ansiBrightYellow': '#e2e22e',
    'terminal.ansiBrightBlue': '#819aff',
    'terminal.ansiBrightMagenta': '#AE81FF',
    'terminal.ansiBrightCyan': '#66D9EF',
    'terminal.ansiBrightWhite': '#f8f8f2',
    'terminal.inactiveSelectionBackground': '#676b7140',
  },
  tokenColors: [
    {
      settings: {
        foreground: '#C5C8C6',
      },
    },
    {
      scope: ['meta.embedded', 'source.groovy.embedded', 'variable.legacy.builtin.python'],
      settings: {
        foreground: '#C5C8C6',
      },
    },
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        fontStyle: '',
        foreground: '#9A9B99',
      },
    },
    {
      name: 'String',
      scope: 'string',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'String Embedded Source',
      scope: 'string source',
      settings: {
        fontStyle: '',
        foreground: '#D08442',
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Built-in constant',
      scope: 'constant.language',
      settings: {
        fontStyle: '',
        foreground: '#408080',
      },
    },
    {
      name: 'User-defined constant',
      scope: 'constant.character, constant.other',
      settings: {
        fontStyle: '',
        foreground: '#8080FF',
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Support',
      scope: 'support',
      settings: {
        fontStyle: '',
        foreground: '#C7444A',
      },
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Class name',
      scope:
        'entity.name.class, entity.name.type, entity.name.namespace, entity.name.scope-resolution',
      settings: {
        fontStyle: '',
        foreground: '#9B0000',
      },
    },
    {
      name: 'Inherited class',
      scope: 'entity.other.inherited-class',
      settings: {
        fontStyle: '',
        foreground: '#C7444A',
      },
    },
    {
      name: 'Function name',
      scope: 'entity.name.function',
      settings: {
        fontStyle: '',
        foreground: '#CE6700',
      },
    },
    {
      name: 'Function argument',
      scope: 'variable.parameter',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Tag name',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Tag attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Library function',
      scope: 'support.function',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      settings: {
        fontStyle: '',
        foreground: '#676867',
      },
    },
    {
      name: 'Class Variable',
      scope: 'variable.other, variable.js, punctuation.separator.variable',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Meta Brace',
      scope:
        'punctuation.section.embedded -(source string source punctuation.section.embedded), meta.brace.erb.html',
      settings: {
        fontStyle: '',
        foreground: '#008200',
      },
    },
    {
      name: 'Invalid',
      scope: 'invalid',
      settings: {
        fontStyle: '',
        foreground: '#FF0B00',
      },
    },
    {
      name: 'Normal Variable',
      scope: 'variable.other.php, variable.other.normal',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Function Object',
      scope: 'meta.function-call.object',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Function Call Variable',
      scope: 'variable.other.property',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Keyword Control / Special',
      scope: [
        'keyword.control',
        'keyword.operator.new.cpp',
        'keyword.operator.delete.cpp',
        'keyword.other.using',
        'keyword.other.directive.using',
        'keyword.other.operator',
      ],
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Tag',
      scope: 'meta.tag',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'Tag Name',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Doctype',
      scope: 'meta.doctype, meta.tag.sgml-declaration.doctype, meta.tag.sgml.doctype',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'Tag Inline Source',
      scope: 'meta.tag.inline source, text.html.php.source',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'Tag Other',
      scope:
        'meta.tag.other, entity.name.tag.style, entity.name.tag.script, meta.tag.block.script, source.js.embedded punctuation.definition.tag.html, source.css.embedded punctuation.definition.tag.html',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'Tag Attribute',
      scope: 'entity.other.attribute-name, meta.tag punctuation.definition.string',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'Tag Value',
      scope: 'meta.tag string -source -punctuation, text source text meta.tag string -punctuation',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'Meta Brace',
      scope:
        'punctuation.section.embedded -(source string source punctuation.section.embedded), meta.brace.erb.html',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'HTML ID',
      scope: 'meta.toc-list.id',
      settings: {
        foreground: '#9AA83A',
      },
    },
    {
      name: 'HTML String',
      scope:
        'string.quoted.double.html, punctuation.definition.string.begin.html, punctuation.definition.string.end.html, punctuation.definition.string.end.html source, string.quoted.double.html source',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'HTML Tags',
      scope:
        'punctuation.definition.tag.html, punctuation.definition.tag.begin, punctuation.definition.tag.end',
      settings: {
        fontStyle: '',
        foreground: '#6089B4',
      },
    },
    {
      name: 'CSS ID',
      scope: 'meta.selector.css entity.other.attribute-name.id',
      settings: {
        fontStyle: '',
        foreground: '#9872A2',
      },
    },
    {
      name: 'CSS Property Name',
      scope: 'support.type.property-name.css',
      settings: {
        fontStyle: '',
        foreground: '#676867',
      },
    },
    {
      name: 'CSS Property Value',
      scope:
        'meta.property-group support.constant.property-value.css, meta.property-value support.constant.property-value.css',
      settings: {
        fontStyle: '',
        foreground: '#C7444A',
      },
    },
    {
      name: 'JavaScript Variable',
      scope: 'variable.language.js',
      settings: {
        foreground: '#CC555A',
      },
    },
    {
      name: 'Template Definition',
      scope: ['punctuation.definition.template-expression', 'punctuation.section.embedded.coffee'],
      settings: {
        foreground: '#D08442',
      },
    },
    {
      name: 'Reset JavaScript string interpolation expression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: '#C5C8C6',
      },
    },
    {
      name: 'PHP Function Call',
      scope: 'meta.function-call.object.php',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'PHP Single Quote HMTL Fix',
      scope: 'punctuation.definition.string.end.php, punctuation.definition.string.begin.php',
      settings: {
        foreground: '#9AA83A',
      },
    },
    {
      name: 'PHP Parenthesis HMTL Fix',
      scope: 'source.php.embedded.line.html',
      settings: {
        foreground: '#676867',
      },
    },
    {
      name: 'PHP Punctuation Embedded',
      scope: 'punctuation.section.embedded.begin.php, punctuation.section.embedded.end.php',
      settings: {
        fontStyle: '',
        foreground: '#D08442',
      },
    },
    {
      name: 'Ruby Symbol',
      scope: 'constant.other.symbol.ruby',
      settings: {
        fontStyle: '',
        foreground: '#9AA83A',
      },
    },
    {
      name: 'Ruby Variable',
      scope: 'variable.language.ruby',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'Ruby Special Method',
      scope: 'keyword.other.special-method.ruby',
      settings: {
        fontStyle: '',
        foreground: '#D9B700',
      },
    },
    {
      name: 'Ruby Embedded Source',
      scope: ['punctuation.section.embedded.begin.ruby', 'punctuation.section.embedded.end.ruby'],
      settings: {
        foreground: '#D08442',
      },
    },
    {
      name: 'SQL',
      scope: 'keyword.other.DML.sql',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'diff: header',
      scope: 'meta.diff, meta.diff.header',
      settings: {
        fontStyle: 'italic',
        foreground: '#E0EDDD',
      },
    },
    {
      name: 'diff: deleted',
      scope: 'markup.deleted',
      settings: {
        fontStyle: '',
        foreground: '#dc322f',
      },
    },
    {
      name: 'diff: changed',
      scope: 'markup.changed',
      settings: {
        fontStyle: '',
        foreground: '#cb4b16',
      },
    },
    {
      name: 'diff: inserted',
      scope: 'markup.inserted',
      settings: {
        foreground: '#219186',
      },
    },
    {
      name: 'Markup Quote',
      scope: 'markup.quote',
      settings: {
        foreground: '#9872A2',
      },
    },
    {
      name: 'Markup Lists',
      scope: 'markup.list',
      settings: {
        foreground: '#9AA83A',
      },
    },
    {
      name: 'Markup Styling',
      scope: 'markup.bold, markup.italic',
      settings: {
        foreground: '#6089B4',
      },
    },
    {
      name: 'Markup Inline',
      scope: 'markup.inline.raw',
      settings: {
        fontStyle: '',
        foreground: '#FF0080',
      },
    },
    {
      name: 'Markup Headings',
      scope: 'markup.heading',
      settings: {
        foreground: '#D0B344',
      },
    },
    {
      name: 'Markup Setext Header',
      scope: 'markup.heading.setext',
      settings: {
        fontStyle: '',
        foreground: '#D0B344',
      },
    },
    {
      name: 'Markdown Headings',
      scope: 'markup.heading.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Quote',
      scope: 'markup.quote.markdown',
      settings: {
        fontStyle: 'italic',
        foreground: '',
      },
    },
    {
      name: 'Markdown Bold',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Link Title/Description',
      scope: 'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: '#AE81FF',
      },
    },
    {
      name: 'Markdown Underline Link/Image',
      scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: '',
      },
    },
    {
      name: 'Markdown Emphasis',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontStyle: 'strikethrough',
      },
    },
    {
      name: 'Markdown Punctuation Definition Link',
      scope: 'markup.list.unnumbered.markdown, markup.list.numbered.markdown',
      settings: {
        foreground: '',
      },
    },
    {
      name: 'Markdown List Punctuation',
      scope: ['punctuation.definition.list.begin.markdown'],
      settings: {
        foreground: '',
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#6796e6',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#cd9731',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: '#f44747',
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#b267e6',
      },
    },
    {
      name: 'this.self',
      scope: 'variable.language',
      settings: {
        foreground: '#c7444a',
      },
    },
  ],
  semanticHighlighting: true,
};
