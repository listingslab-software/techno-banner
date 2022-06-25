import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setBanner } from "../"

export const read = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setBanner({ key: "fetching", value: true }))
    dispatch(setBanner({ key: "fetched", value: false }))
    const endpoint = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/toplistItems"
    axios
      .get(`${endpoint}`)
      .then(function (response) {
        dispatch(setBanner({ key: "list", value: response.data }))
      })
      .catch(function (error) {
        dispatch(setBanner({ key: "error", value: error }))
      })
      .then(function () {
        dispatch(setBanner({ key: "fetching", value: false }))
        dispatch(setBanner({ key: "fetched", value: true }))
        return true
      })
  } catch (error) {
    console.warn("admin read error")
  }
}
