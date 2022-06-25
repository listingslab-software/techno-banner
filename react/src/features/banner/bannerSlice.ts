import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface BannerShape {
  slug: string
  data: any
}

const initialState: BannerShape = {
  slug: "bannerSlice",
  data: {
    fetching: false,
    fetched: false,
    editorOpen: false,
    confirmOpen: false,
    notification: null,
    list: [],
    fetchingClicks: false,
    fetchedClicks: false,
    clicks: [],
  },
}

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    setBanner: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state.data = {
        ...state.data,
        [key]: value,
      };
    },
  },
})

export const { setBanner } = bannerSlice.actions
export const selectBanner = (state: RootState) => state.banner

export default bannerSlice.reducer
