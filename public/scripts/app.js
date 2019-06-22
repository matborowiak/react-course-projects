'use strict';

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Mateusz Borowiak'
    ),
    React.createElement(
        'p',
        null,
        'Age: 29'
    ),
    React.createElement(
        'p',
        null,
        'Location: Berlin'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
