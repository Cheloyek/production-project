import { render, screen } from '@testing-library/react';
import { Button } from 'shared/assets/Button/Button';

describe('buttons', () => {
    test('button should be render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button disabled>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
