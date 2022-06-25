import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import adminReducer from '../features/admin/adminSlice'
import toplistReducer from '../features/toplist/toplistSlice'
import bannerReducer from '../features/banner/bannerSlice'

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    toplist: toplistReducer,
    banner: bannerReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
