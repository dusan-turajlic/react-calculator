interface numbersParts {
    first: number,
    second: number,
    start: number
}

const getNumberParts = ( sign: string, list: string[] ): numbersParts => {
    let signIndex = list.indexOf( sign );
    let start = signIndex - 1;
    return {
        first: +list[ start ],
        second: +list[ signIndex + 1 ],
        start
    };
};

// @TODO: Swtich to BigNumber insted of default js number to counteract Floating Math.
export const evaluateCalculation = ( input: string ): string => {
    let inputArray = input.split( ' ' );

    // @TODO Add support for executing calculations in mathematical order
    if ( inputArray.includes( '/' ) ) {
        let { first, second, start } = getNumberParts( '/', inputArray );
        let quotient = first / second;
        inputArray.splice( start, 3, quotient.toString() );
    }

    if ( inputArray.includes( '*' ) ) {
        let { first, second, start } = getNumberParts( '*', inputArray );
        let product = first * second;
        inputArray.splice( start, 3, product.toString() );
    }

    if ( inputArray.includes( '-' ) ) {
        let { first, second, start } = getNumberParts( '-', inputArray );
        let difference = first - second;
        inputArray.splice( start, 3, difference.toString() );
    }

    if ( inputArray.includes( '+' ) ) {
        let { first, second, start } = getNumberParts( '+', inputArray );
        let sum = first + second;
        inputArray.splice( start, 3, sum.toString() );
    }

    return inputArray[0];
};
