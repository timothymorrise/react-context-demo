// Theme Provider.js

// IMPORTS
import React, { Component } from 'react'
import {Provider, Consumer} from './index'

// COMPONENT

class ThemeProvider extends Component {
    constructor() {
        super()
        this.state = {
            theme: "dark"
        }
        this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme() {
        console.log("toggle theme called")
        this.setState(prevState=> ({
            theme: prevState.theme === "dark" ? "light" : "dark"
        }))
    }

    render() {
        const props = {
            toggleTheme: this.toggleTheme,
            ...this.state
        }
        return (
            <Provider value={props}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ThemeProvider

export const withTheme = C => props => (
    <Consumer>  
        {value => <C {...value}{...props}/>}
    </Consumer>
)