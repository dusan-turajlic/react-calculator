import React from "react";

interface KeyProps {
    value: string

    onPress?( event: React.MouseEvent, value: string ): void,

    classNames?: string[],
    colSize?: string
}

function Key( { colSize = 'col-3', classNames = [], value, onPress = () => {} }: KeyProps ) {
    return (
        <button
            className={ `column ${ colSize } ${ classNames.join( ' ' ) }` }
            onClick={ ( event: React.MouseEvent<HTMLButtonElement> ) => { onPress( event, value ) } }>
            { value }
        </button>
    );
}

export default Key;
