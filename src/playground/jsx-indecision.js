var app = {
    titile: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = e => {
    e.preventDefault(e)

    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const appRoot = document.getElementById('app')

const onRemove = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const render = () => {
    const template = (
        <div>
            <h1>{app.titile}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options.length > 0
                    ? 'Here are your options'
                    : 'No options'}
            </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemove}>Remove All</button>
            <ol>
                {
                    app.options.map(e => <li key={e}>{e}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()
