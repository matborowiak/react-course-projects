var app = {
    titile: 'This is Title',
    subtitle: 'Of the best Movie Ever',
}

// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>{app.titile}</li>
            <li>{app.subtitle}</li>
        </ol>
    </div>
)
var user = {
    name: 'Mateusz',
    age: 29,
    location: 'Berlin',
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
