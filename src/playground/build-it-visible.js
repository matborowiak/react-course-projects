let paragraph
let visibility = false

const visibilityToggle = () => {
    visibility = !visibility
    render()
}

const appRoot = document.getElementById('app')
const render = () => {
    const app = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={visibilityToggle}>
                {visibility ? 'Hide details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey, These are some details you can now see!</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(app, appRoot)
}

render()
