import React from "react";
import Key from './Key';

interface KeyboardProps {
    onAnyKeyPress?( event: React.MouseEvent, value: string ): void
}

class Keyboard extends React.Component<KeyboardProps> {
    render() {
        return (
            <div className="container">
                <div className="columns">
                    <Key onPress={ this.props.onAnyKeyPress } value="1"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="2"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="3"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="/" classNames={ [ 'bg-gray' ] }/>
                </div>
                <div className="columns">
                    <Key onPress={ this.props.onAnyKeyPress } value="4"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="5"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="6"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="*" classNames={ [ 'bg-gray' ] }/>
                </div>
                <div className="columns">
                    <Key onPress={ this.props.onAnyKeyPress } value="7"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="8"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="9"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="-" classNames={ [ 'bg-gray' ] }/>
                </div>
                <div className="columns">
                    <Key onPress={ this.props.onAnyKeyPress } value="."/>
                    <Key onPress={ this.props.onAnyKeyPress } value="0"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="ce"/>
                    <Key onPress={ this.props.onAnyKeyPress } value="+" classNames={ [ 'bg-gray' ] }/>
                </div>
                <div className="columns">
                    <Key onPress={ this.props.onAnyKeyPress } value="=" colSize="" classNames={ [ 'bg-warning' ] }/>
                </div>
            </div>
        );
    }
}

export default Keyboard;
