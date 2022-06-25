import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setBanner, read } from "../"
import { fetch  } from "../../toplist"

export const create = (payload:any): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setBanner({ key: "creating", value: true }))
    dispatch(setBanner({ key: "created", value: false }))
    const baseURL = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/"
    const endpoint = `${baseURL}/toplistItems/`
    axios
      .post(endpoint, payload)
      .then(function (res) {
        const { status } = res
        if (status === 201){
          dispatch(setBanner({ key: "notification", value: {
            severity: "success",
            message: `${res.data.id} was created successsfully`
          }}))
          dispatch(setBanner({ key: "editorOpen", value: false}))
          dispatch(read())
          dispatch(fetch())
        }
      })
      .catch(function (error) {
        dispatch(setBanner({ key: "error", value: error }))
        dispatch(setBanner({ key: "notification", value: {
          severity: "error",
          message: error.toString()
        }}))
      })
      .then(function () {
        dispatch(setBanner({ key: "creating", value: false }))
        dispatch(setBanner({ key: "created", value: true }))
        return true
      })
  } catch (error) {
    // dispatch(setSystemError(error))
  }
}
