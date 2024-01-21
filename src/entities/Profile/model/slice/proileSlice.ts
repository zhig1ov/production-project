import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
