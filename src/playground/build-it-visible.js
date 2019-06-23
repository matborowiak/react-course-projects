let paragraph
let buttonText = 'Show details'

const visibilityToggle = () => {
    if (paragraph) {
        paragraph = undefined
        buttonText = 'Show details'
    } else {
        paragraph = <p>Hey, these are some details you can now see!</p>
        buttonText = 'Hide details'
    }

    render()
}

const appRoot = document.getElementById('app')
const render = () => {
    const app = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={visibilityToggle}>{buttonText}</button>
            {paragraph}
        </div>
    )
    ReactDOM.render(app, appRoot)
}

render()
