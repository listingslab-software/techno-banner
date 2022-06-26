import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { 
  initFirst,
  selectSelected,
  selectBanner,
} from "../../features/banner"
import {
  Grid,
} from "@mui/material"
import {
  BannerList,
  Preview,
  Editor,
} from "./"
import { Nav } from "../../components"

export default function Banner() {

  const dispatch = useAppDispatch()
  const banner = useAppSelector(selectBanner)
  const selected = useAppSelector(selectSelected)

  React.useEffect(() => {
    const { initialSelect } = banner
    if (!initialSelect) dispatch(initFirst())
  }, [banner, dispatch])

  return <Grid container> 
            <Grid item xs={ 12 }>
              <Nav />
            </Grid>
            <Grid item xs={ 12 } md={ 4 } >
              <BannerList />
            </Grid>
            { selected ? <Grid item xs={ 12 } md={ 8 }>
                            <Editor />
                          </Grid> : null }
            <Grid item xs={ 12 }>
              <Preview />
            </Grid>


          </Grid>
}

/*
*/