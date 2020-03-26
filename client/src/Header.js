// Header.js
// ==============================

// IMPORTS
import React, { isValidElement } from 'react';
import {withTheme} from './ThemeProvider'

const Header = ({theme, toggleTheme}) => (
        <div className={`${theme}-header`}>
            <h1>Wicked Rad Header</h1>
            <button onClick={toggleTheme}>
                {theme === "dark" ? 
                "Switch to Light" : "Switch To Dark"} 
            </button>
        </div>    
    
)

export default withTheme(Header)


