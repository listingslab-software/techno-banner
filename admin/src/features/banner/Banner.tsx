import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectBanner } from "../../features/banner"
import {
  Grid,
} from "@mui/material"
import {
  BannerList,
  Editor,
} from "./"

export default function Banner() {

  const dispatch = useAppDispatch()
  const banner = useAppSelector(selectBanner)

  React.useEffect(() => {
  }, [banner, dispatch]);

  const { selected } = banner

  return <Grid container> 
            <Grid item xs={ 12 } md={ 4 } >
              <BannerList />
            </Grid>
            { selected ? <Grid item xs={ 12 } md={ 8 }>
                          <Editor />
                        </Grid> : null }
            
          </Grid>
}

/*
*/