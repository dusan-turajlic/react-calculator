import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import App from '../../App';

describe( 'App.spec', () => {
    let app: RenderResult;
    let display: HTMLInputElement | null;
    beforeEach( () => {
        app = render( <App/> );
        display = app.container.querySelector( 'input' );
    } );

    it( 'renders app', function () {
        expect( display ).toBeDefined();
        expect( app.container ).toMatchSnapshot();
    } );

    it( 'keyboard input displays data on display', async () => {
        const buttonOne = app.getByText( '1' );

        fireEvent.click( buttonOne );

        // @ts-ignore
        expect( display.value ).toBe( '1' );
    } );

    it( 'calculates value when pressing equals', async () => {
        const buttonNine = app.getByText( '9' );
        const buttonMinus = app.getByText( '-' );
        const buttonOne = app.getByText( '1' );
        const buttonEquals = app.getByText( '=' );

        fireEvent.click( buttonNine );
        fireEvent.click( buttonMinus );
        fireEvent.click( buttonOne );

        // @ts-ignore
        expect( display.value ).toBe( '9 - 1' );

        fireEvent.click( buttonEquals );

        // @ts-ignore
        expect( display.value ).toBe( '8' );
    } );
} );

