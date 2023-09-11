import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);