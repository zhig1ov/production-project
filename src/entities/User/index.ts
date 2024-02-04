import { getUserInited } from 'entities/User/model/selectors/getUserInited/getUserInited';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/userSchema';

export {
    User,
    UserSchema,
    userActions,
    userReducer,
    getUserAuthData,
    getUserInited,
};
