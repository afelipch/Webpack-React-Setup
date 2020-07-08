import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../sass/styles.scss';


class App extends Component {
    render () {
        return (
            <h1>Hello from React!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))