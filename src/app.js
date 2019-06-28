class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in hands of a computer'
        const options = ['Thing one', 'Thing two', 'Thing four']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('Remove Alert!')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {this.props.options.map(option => (
                    <Option key={option} optionText={option} />
                ))}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return <div>{this.props.optionText}</div>
    }
}

class AddOption extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        if (e.target.elements.option.value) {
            alert(e.target.elements.option.value)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
