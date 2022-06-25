import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { bannerList } from "./bannerList"

export interface BannerShape {
  slug: string
  data: any
  preview: any
  creator: any
  list: any
}

const initialState: BannerShape = {
  slug: "bannerSlice",
  preview: null,
  creator: null,
  list: bannerList,
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
export const selectPreview = (state: RootState) => state.banner.preview
export const selectCreator = (state: RootState) => state.banner.creator
export const selectList = (state: RootState) => state.banner.list

export default bannerSlice.reducer
