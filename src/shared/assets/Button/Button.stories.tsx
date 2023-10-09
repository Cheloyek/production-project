import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/assets/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Primary Light',
};
// PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Primary Dark',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'Clear Light',
    theme: ButtonTheme.CLEAR,
};
// ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Clear Dark',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Outline Light',
    theme: ButtonTheme.OUTLINE,
};
// OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Outline Dark',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Background Theme',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Background Inverted Theme',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: 'M',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: 'L',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: 'XL',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Outline M',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Outline L',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Outline XL',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
