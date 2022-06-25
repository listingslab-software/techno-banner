import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { bannerList } from "./bannerList"

export interface BannerShape {
  slug: string
  list: any
  preview: any
  creator: any
  selected: any
}

const initialState: BannerShape = {
  slug: "bannerSlice",
  list: bannerList,
  preview: null,
  creator: null,
  selected: null,
}

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    setBanner: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      // @ts-ignore
      state[key] = value;
    },
  },
})

export const { setBanner } = bannerSlice.actions
export const selectBanner = (state: RootState) => state.banner
export const selectPreview = (state: RootState) => state.banner.preview
export const selectCreator = (state: RootState) => state.banner.creator
export const selectList = (state: RootState) => state.banner.list
export const selectSelected = (state: RootState) => state.banner.selected

export default bannerSlice.reducer
