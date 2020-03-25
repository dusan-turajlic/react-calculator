import React, { DOMElement } from "react";
import { render, fireEvent } from '@testing-library/react';
import Keyboard from "../../../components/Keyboard";

describe( 'Keyboard.spec', () => {
    it( 'renders correctly', function () {
        const { container } = render( <Keyboard /> );
        expect( container ).toMatchSnapshot();
    } );

    it( 'passing callback will get triggered on any key button press', function () {
        const onAnyKeyPressCallback = jest.fn();
        const keyboard = render( <Keyboard onAnyKeyPress={onAnyKeyPressCallback} /> );
        const buttons = [
            keyboard.getByText( '1' ),
            keyboard.getByText( '2' ),
            keyboard.getByText( '3' ),
            keyboard.getByText( '4' ),
            keyboard.getByText( '5' ),
            keyboard.getByText( '6' ),
            keyboard.getByText( '7' ),
            keyboard.getByText( '8' ),
            keyboard.getByText( '9' ),
            keyboard.getByText( '0' ),
            keyboard.getByText( '.' ),
            keyboard.getByText( 'ce' ),
            keyboard.getByText( '/' ),
            keyboard.getByText( '*' ),
            keyboard.getByText( '-' ),
            keyboard.getByText( '+' ),
            keyboard.getByText( '=' ),
        ];

        buttons.forEach( ( button ) => {
            fireEvent.click( button );
        } );

        expect( onAnyKeyPressCallback ).toHaveBeenCalledTimes( 17 );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '1' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '2' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '3' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '/' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '4' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '5' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '6' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '*' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '7' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '8' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '9' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '-' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '.' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '0' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), 'ce' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '+' );
        expect( onAnyKeyPressCallback ).toHaveBeenCalledWith( expect.any( Object ), '=' );
    } );
} );
