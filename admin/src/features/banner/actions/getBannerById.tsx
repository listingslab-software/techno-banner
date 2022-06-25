import { AppThunk } from "../../../app/store"
// import { setBanner } from "../"

export const getBannerById = (id: string): AppThunk => async (dispatch: any, getState: any) => {
  try {
    const { list } = getState().banner
    console.warn("list", list)

    return true

    // const { list, initialSelect } = getState().banner
    // if (!initialSelect){
    //   const selectedId = list[0].id
    //   dispatch(setBanner({ 
    //     key: "selected", 
    //     value: selectedId 
    //   }))
    // }
    // dispatch(setBanner({ 
    //   key: "initialSelect", 
    //   value: true 
    // }))
  } catch (error) {
    console.log ("initFirst error", error)
  }
}
