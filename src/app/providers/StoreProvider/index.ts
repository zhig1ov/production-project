import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
};
