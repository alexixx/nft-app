import { configureStore } from '@reduxjs/toolkit';
import { nftApi } from '@/entities/Nft/api/nftApi';
import { nftReducer } from '@/entities/Nft';

export const appStore = configureStore({
  reducer: {
    nft: nftReducer,
    [nftApi.reducerPath]: nftApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nftApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
