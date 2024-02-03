import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from 'entities/Profile';

describe('getProfileData', () => {
    test('should return profile data', () => {
        const data = {
            username: 'admin',
            country: Country.Russia,
            age: 25,
            lastname: 'admin',
            first: 'admin',
            city: 'Mosсow',
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
