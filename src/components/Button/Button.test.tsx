import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('suite name', () => {
    it('should render component', () => {
        render(<Button />);
        const headline = screen.getByText(/My custom button/i);
        expect(headline).toBeInTheDocument();
        expect(headline).toMatchSnapshot();
    })
})