import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Key from '../../../components/Key';

describe( 'Key.spec', () => {
    it( 'renders correctly', function () {
        const { container } = render( <Key value='1' /> );
        expect( container ).toMatchSnapshot();
    } );

    it( 'pressing the key passes calls on click callback', () => {
        let pressCallback = jest.fn();
        const { container } = render( <Key value='1' onPress={pressCallback} /> );
        let key = container.querySelector( 'button' );
        // @ts-ignore
        fireEvent.click( key );

        expect( pressCallback ).toHaveBeenCalledWith( expect.any( Object ), '1' );
    } );
} );
