import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';

describe('getArticleDetailsData', () => {
    test('should return profile data', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
