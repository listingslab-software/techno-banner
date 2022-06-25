import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { bannerList } from "./_mocks_/bannerList"
import { bannerSizes } from "./_mocks_/bannerSizes"

export interface BannerShape {
  slug: string
  list: any
  sizes: any
  selected: any
  initialSelect: boolean
}

const initialState: BannerShape = {
  slug: "banner",
  list: bannerList,
  sizes: bannerSizes,
  selected: null,
  initialSelect: false,
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
export const selectList = (state: RootState) => state.banner.list
export const selectSelected = (state: RootState) => state.banner.selected

export default bannerSlice.reducer
