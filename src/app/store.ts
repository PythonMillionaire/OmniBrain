import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';

// Import slices
import userReducer from '../features/user/userSlice';
import aiProviderReducer from '../features/aiProvider/aiProviderSlice';
import chatReducer from '../features/chat/chatSlice';

const logger = createLogger({
    // Custom options if needed
});


// Root reducer combining all feature reducers
const rootReducer = combineReducers({
    user: userReducer,
    aiProvider: aiProviderReducer,
    chat: chatReducer,
});

// Configure the store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        });

        if (process.env.NODE_ENV !== 'production') {
            return middleware.concat(logger);
        }

        return middleware;
    },
    devTools: process.env.NODE_ENV !== 'production' // Enable Redux DevTools only in development
});

// Type definitions for RootState and AppDispatch
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
