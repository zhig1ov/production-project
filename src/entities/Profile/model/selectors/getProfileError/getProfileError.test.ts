import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from 'entities/Profile';

describe('getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual('error');
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
