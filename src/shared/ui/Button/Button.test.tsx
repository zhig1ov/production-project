import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('', () => {
        render(<Button>TEST</Button>);
        expect(screen.findByText('TEST')).toBeInTheDocument();
    });
});
