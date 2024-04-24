import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../app/store';

interface AIProvider {
    id: string;
    name: string;
    description: string;
    active: boolean;
}

interface AIProviderState {
    entities: Record<string, AIProvider>;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AIProviderState = {
    entities: {},
    loading: 'idle',
    error: null,
};

const fetchAIProvidersAPI = async (): Promise<AIProvider[]> => {
    const response = await fetch(`https://api.example.com/ai-providers`);
    if (!response.ok) {
        throw new Error('Failed to fetch AI providers');
    }
    return response.json();
};

export const fetchAIProviders = createAsyncThunk(
    'aiProvider/fetchAIProviders',
    async (_, { rejectWithValue }) => {
        try {
            const aiProviders = await fetchAIProvidersAPI();
            return aiProviders;
        } catch (err: unknown) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);

const aiProviderSlice = createSlice({
    name: 'aiProvider',
    initialState,
    reducers: {
        addAIProvider(state, action: PayloadAction<Omit<AIProvider, 'id'> & { id?: string }>) {
            const id = action.payload.id || uuidv4();
            state.entities[id] = { ...action.payload, id };
        },
        updateAIProvider(state, action: PayloadAction<AIProvider>) {
            const { id } = action.payload;
            if (!state.entities[id]) {
                state.entities[id] = { ...action.payload, id: uuidv4() };
            } else {
                state.entities[id] = { ...action.payload };
            }
        },
        toggleActiveStatus(state, action: PayloadAction<string>) {
            const provider = state.entities[action.payload];
            if (provider) {
                provider.active = !provider.active;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAIProviders.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchAIProviders.fulfilled, (state, action) => {
                action.payload.forEach(provider => {
                    if (!state.entities[provider.id]) {
                        state.entities[provider.id] = { ...provider, id: uuidv4() };
                    } else {
                        state.entities[provider.id] = provider;
                    }
                });
                state.loading = 'succeeded';
            })
            .addCase(fetchAIProviders.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const { addAIProvider, updateAIProvider, toggleActiveStatus } = aiProviderSlice.actions;
export default aiProviderSlice.reducer;

export const selectAllAIProviders = (state: RootState) => Object.values(state.aiProvider.entities);
export const selectAIProviderById = (state: RootState, providerId: string) => state.aiProvider.entities[providerId];
export const selectAIProvidersLoadingState = (state: RootState) => state.aiProvider.loading;
