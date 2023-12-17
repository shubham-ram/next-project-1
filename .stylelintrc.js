module.exports = {
    extends: ['@cogoport/stylelint-config'],
    rules: {
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'selector-class-pattern': null,
        'indentation': [4, { "baseIndentLevel": 0 }]
    },
};
