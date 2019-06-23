'use strict';

var paragraph = void 0;
var visibility = false;

var visibilityToggle = function visibilityToggle() {
    visibility = !visibility;
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
            visibility ? 'Hide details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, These are some details you can now see!'
            )
        )
    );
    ReactDOM.render(app, appRoot);
};

render();
