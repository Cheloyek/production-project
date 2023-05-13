// import { classNames } from './classNames';

import { classNames } from 'shared';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with mods true', () => {
        const expected = 'someClass hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }))
            .toBe(expected);
    });

    test('with mods falls', () => {
        const expected = 'someClass scrollable';
        expect(classNames('someClass', { hovered: false, scrollable: true }))
            .toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass scrollable';
        expect(classNames('someClass', { hovered: undefined, scrollable: true }))
            .toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'someClass additional test';
        expect(classNames('someClass', {}, ['additional', 'test']))
            .toBe(expected);
    });

    test('with additional class and mods', () => {
        const expected = 'someClass additional test hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['additional', 'test']))
            .toBe(expected);
    });
});
