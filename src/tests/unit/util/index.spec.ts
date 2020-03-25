import { evaluateCalculation } from "../../../util";

describe( 'util.spec', () => {
    it( 'evaluating calculations', function () {
        expect( evaluateCalculation( '9 - 1' ) ).toBe( '8' );
        expect( evaluateCalculation( '5 + 5' ) ).toBe( '10' );
        expect( evaluateCalculation( '100 / 2' ) ).toBe( '50' );
        expect( evaluateCalculation( '2 * 2' ) ).toBe( '4' );
    } );

    it( 'evaluating mutable values', function () {
        expect( evaluateCalculation( '9 + 10 - 8' ) ).toBe( '11' )
    } );
} );
