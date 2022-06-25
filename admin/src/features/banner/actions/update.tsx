import axios from "axios"
import { AppThunk } from "../../../app/store"
import { 
  setBanner,
  read,
  fetch,
} from "../"

export const update = (id: string, payload: any): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setBanner({ key: "updating", value: true }))
    dispatch(setBanner({ key: "updated", value: false }))
    const baseURL = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/"
    const endpoint = `${baseURL}/toplistItems/${id}`
    axios
      .put(endpoint, payload)
      .then(function (res) {
        const { status } = res
        if (status === 200){
          dispatch(setBanner({ key: "notification", value: {
            severity: "success",
            message: `${res.data.id} was updated successsfully`
          }}))
          dispatch(setBanner({ key: "editorOpen", value: false}))
          dispatch(setBanner({ key: "selectedId", value: null}))
          dispatch(setBanner({ key: "selectedItem", value: null}))
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

  } catch (error: any) {
    dispatch(setBanner({ key: "error", value: error }))
    dispatch(setBanner({ key: "notification", value: {
      severity: "error",
      message: error.toString()
    }}))
  }
}
