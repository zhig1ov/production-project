import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from 'entities/Profile';

describe('getProfileIsLoading', () => {
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
