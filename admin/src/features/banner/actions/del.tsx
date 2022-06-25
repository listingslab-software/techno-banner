import axios from "axios"
import { AppThunk } from "../../../app/store"
import { 
  setBanner,
  read,
} from "../"
import { 
  fetch,
} from "../../toplist"

export const del = (id: string): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setBanner({ key: "deleting", value: true }))
    dispatch(setBanner({ key: "deleted", value: false }))
    dispatch(setBanner({ key: "confirmOpen", value: false }))
    dispatch(setBanner({ key: "editorOpen", value: false }))
    const baseURL = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/"
    const endpoint = `${baseURL}/toplistItems/${id}`
    // console.log ("DELETE endpoint", endpoint)

    axios
    .delete(`${endpoint}`)
      .then(function (response) {
        const { status } = response
        if (status === 200){
          dispatch(setBanner({ key: "list", value: [] }))
          dispatch(setBanner({ key: "notification", value: {
            severity: "success",
            message: `${id} was deleted OK`
          }}))
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
        dispatch(setBanner({ key: "deleting", value: false }))
        dispatch(setBanner({ key: "deleted", value: true }))
        return true
      })

  } catch (error) {
    
  }
}
