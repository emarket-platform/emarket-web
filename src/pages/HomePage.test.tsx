import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
    it('should display welcome message', () => {
        render(<HomePage />);

        expect(
            screen.getByRole('heading', { name: 'Welcome to eMarket' }),
        ).toBeInTheDocument();
    });
});