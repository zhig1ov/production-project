import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    // test('with only first class');
    test('with only first class', () => {
        const expected = 'mainClass';
        expect(classNames('mainClass')).toBe(expected);
    });

    test('with additional', () => {
        const expected = 'mainClass class1, class2';
        expect(classNames('mainClass', {}, ['class1, class2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'mainClass class1 class2 hovered scrollable';
        expect(classNames(
            'mainClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with only first class', () => {
        const expected = 'mainClass class1 class2 hovered';
        expect(classNames(
            'mainClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with only first class', () => {
        const expected = 'mainClass class1 class2 hovered';
        expect(classNames(
            'mainClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
