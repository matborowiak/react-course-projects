'use strict';

var app = {
    titile: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']

    // JSX - Javascript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.titile
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    console.log(count);
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var resetCount = function resetCount() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: resetCount },
            'reset'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
