import React from 'react';

interface DisplayProps {
    input: string
}

function Display( { input }: DisplayProps ) {
    return (
        <input readOnly={true} className="form-input" value={ input } type="text" />
    );
}

export default Display;
