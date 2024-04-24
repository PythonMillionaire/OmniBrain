// src/features/user/userSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Import UUID
import { RootState } from '../../app/store';

interface UserState {
    entities: Record<string, any>;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    currentUser: string | null;
}

const initialState: UserState = {
    entities: {},
    loading: 'idle',
    error: null,
    currentUser: null,
};

// Example API function to fetch user data
const fetchUserById = async (userId: string): Promise<any> => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
};

// Async thunk action for fetching a user
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (userId: string, { rejectWithValue }) => {
        try {
            const userData = await fetchUserById(userId);
            return userData;
        } catch (err: unknown) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<string | null>) {
            state.currentUser = action.payload;
        },
        // Adapt addUser to automatically assign an ID if not provided
        addUser(state, action: PayloadAction<{ userData: any; id?: string }>) {
            const id = action.payload.id || uuidv4(); // Use provided ID or generate a new one
            state.entities[id] = { ...action.payload.userData, id }; // Ensure userData contains the id
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                const id = action.payload.id || uuidv4();
                state.entities[id] = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const { setCurrentUser, addUser } = userSlice.actions;
export default userSlice.reducer;

// Selectors
export const selectCurrentUser = (state: RootState) => state.user.currentUser ? state.user.entities[state.user.currentUser] : null;
export const selectUserById = (state: RootState, userId: string) => state.user.entities[userId];
export const selectUserLoadingState = (state: RootState) => state.user.loading;
