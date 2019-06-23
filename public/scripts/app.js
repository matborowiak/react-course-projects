'use strict';

var paragraph = void 0;
var buttonText = 'Show details';

var visibilityToggle = function visibilityToggle() {
    if (paragraph) {
        paragraph = undefined;
        buttonText = 'Show details';
    } else {
        paragraph = React.createElement(
            'p',
            null,
            'Hey, these are some details you can now see!'
        );
        buttonText = 'Hide details';
    }

    render();
};

var appRoot = document.getElementById('app');
var render = function render() {
    var app = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: visibilityToggle },
            buttonText
        ),
        paragraph
    );
    ReactDOM.render(app, appRoot);
};

render();
