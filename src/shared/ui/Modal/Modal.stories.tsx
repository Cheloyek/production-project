import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import Modal from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/ui/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    isOpen: true,
    // eslint-disable-next-line max-len
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor doloremque ducimus eius enim, fugit iure iusto necessitatibus repellendus sed sequi sint sit temporibus! Consectetur nobis nulla officiis totam vero!',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    // eslint-disable-next-line max-len
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor doloremque ducimus eius enim, fugit iure iusto necessitatibus repellendus sed sequi sint sit temporibus! Consectetur nobis nulla officiis totam vero!',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
