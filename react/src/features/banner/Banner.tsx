import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectBanner } from "../../features/banner"
import {
  Grid,
} from "@mui/material"
import {
  Creator,
  Preview,
} from "./"

export default function Banner() {

  const dispatch = useAppDispatch()
  const banner = useAppSelector(selectBanner)
  // const isExpanded = true
  // const onCreateClick = () => {
  //   dispatch(setAdmin({ key: "editorOpen", value: true}))
  //   dispatch(setAdmin({ key: "editorMode", value: "create"}))
  // }
  React.useEffect(() => {
    const { fetching, fetched } = banner.data
    if (!fetching && !fetched){
      // dispatch(read())
    }
  }, [banner, dispatch]);

  return <Grid container>
            <Grid item xs={ 12 } md={ 4 } >
              <Creator />
            </Grid>
            <Grid item xs={ 12 } md={ 8 }>
              <Preview />
            </Grid>
          </Grid>
}