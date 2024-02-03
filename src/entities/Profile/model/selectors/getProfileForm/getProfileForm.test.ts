import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile';

describe('getProfileForm', () => {
    test('should return profile form', () => {
        const data = {
            username: 'admin',
            country: Country.Russia,
            age: 25,
            lastname: 'admin',
            first: 'admin',
            city: 'Moscow',
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
