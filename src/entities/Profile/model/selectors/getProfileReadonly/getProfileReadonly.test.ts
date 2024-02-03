import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from 'entities/Profile';

describe('getProfileReadonly', () => {
    test('should return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
