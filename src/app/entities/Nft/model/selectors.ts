import { RootState } from '@/shared/store/appStore';

export const selectAllNfts = (state: RootState) => state.nft.items;
export const selectNftLoading = (state: RootState) => state.nft.isLoading;
