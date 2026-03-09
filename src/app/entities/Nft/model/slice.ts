import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NftItem {
  id: number;
  title: string;
}

interface NftState {
  items: NftItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NftState = {
  items: [
    {
      id: 1,
      title: 'Sun-Glass',
    },
    {
      id: 2,
      title: 'Sun-Glass2',
    },
    {
      id: 3,
      title: 'Sun-Glass3',
    },
  ],
  isLoading: false,
  error: null,
};

export const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    setNfts: (state, action: PayloadAction<NftItem[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setNfts, setLoading } = nftSlice.actions;
export const nftReducer = nftSlice.reducer;
