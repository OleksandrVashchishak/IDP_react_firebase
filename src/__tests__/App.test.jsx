import App from './../App';
import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('With React Testing Library', () => {
    it('Render App and check root id"', () => {
        const { getByTestId } = render(<App />, { wrapper: MemoryRouter });
        expect(getByTestId('app-root')).toBeInTheDocument()
    });
}); 

 