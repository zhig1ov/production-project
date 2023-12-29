import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('render test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    test('theme test', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByTestId('button')).toHaveClass('clear');
        screen.debug();
    });
});
