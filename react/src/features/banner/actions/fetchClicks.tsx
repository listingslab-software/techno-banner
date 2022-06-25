import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setBanner } from "../"

export const fetchClicks = (): AppThunk => async (dispatch: any, getState: any) => {
  try {
    
    const {data} = getState().admin
    const { fetchedClicks, fetchingClicks } = data
    if (!fetchedClicks && !fetchingClicks){
          const endpoint = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/clicks"
          axios
            .get(`${endpoint}`)
              .then(function (res) {
                dispatch(setBanner({ key: "clicks", value: res.data }))
                dispatch(setBanner({ key: "fetchingClicks", value: false }))
                dispatch(setBanner({ key: "fetchedClicks", value: true }))
              })
              .catch(function (error) {
                console.warn("fetchClicks error")
              })
    }
    dispatch(setBanner({ key: "fetchingClicks", value: true }))
    dispatch(setBanner({ key: "fetchedClicks", value: false }))
  } catch (error) {
    console.warn("fetchClicks error")
  }
}
