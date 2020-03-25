import React from 'react';
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import { evaluateCalculation } from "./util";

interface AppState {
    input: string
}

const BASE_STATE_INPUT_VALUE = '0';

class App extends React.Component {
    state: AppState = {
        input: BASE_STATE_INPUT_VALUE
    };

    render() {
        return (
            <div className="app">
                <div className="p-absolute">
                    <Display input={ this.state.input }/>
                    <Keyboard onAnyKeyPress={ this.onInput.bind( this ) }/>
                </div>
            </div>
        );
    }

    onInput( event: React.MouseEvent, value: string ) {
        // Adds padding id non numerical characters are passed
        if ( [ '/', '*', '-', '+' ].includes( value ) ) {
            value = ' ' + value + ' ';
        }

        let currentInput = this.state.input;
        if ( this.state.input === BASE_STATE_INPUT_VALUE && value !== '.' ) {
            currentInput = '';
        }

        switch ( value ) {
            case '=':
                let calculatedValue = evaluateCalculation( this.state.input );
                this.setState( { input: calculatedValue } );
                break;
            case 'ce':
                this.setState( { input: BASE_STATE_INPUT_VALUE } );
                break;
            default:
                this.setState( { input: currentInput + value } );
                break;
        }

    }
}

export default App;
