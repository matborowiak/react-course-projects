var app = {
    titile: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

// JSX - Javascript XML
var template = (
    <div>
        <h1>{app.titile}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

let count = 0
const addOne = () => {
    console.log('addOne')
}
const minusOne = () => {
    console.log('minusOne')
}
const resetCount = () => {
    console.log('reset')
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={resetCount}>reset</button>
        <button onClick={minusOne}>-1</button>
    </div>
)
console.log(templateTwo)
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
