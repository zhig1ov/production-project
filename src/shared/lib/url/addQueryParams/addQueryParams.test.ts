import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    test('test with multiply params', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'test',
        });
        expect(params).toBe('?test=value&second=test');
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
