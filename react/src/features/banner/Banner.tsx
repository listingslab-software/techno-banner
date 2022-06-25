import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectBanner } from "../../features/banner"
import {
  Grid,
} from "@mui/material"
import {
  BannerList,
  Creator,
  Preview,
} from "./"

export default function Banner() {

  const dispatch = useAppDispatch()
  const banner = useAppSelector(selectBanner)

  React.useEffect(() => {
  }, [banner, dispatch]);

  const { preview, creator } = banner

  return <Grid container>
            
            <Grid item xs={ 12 } >
              <BannerList />
            </Grid>
            
            <Grid item xs={ 12 } md={ 4 } >
              { creator ? <React.Fragment>
                            <Creator />
                          </React.Fragment> : null }
              
            </Grid>

            { preview ? <Grid item xs={ 12 } md={ 8 }>
                          <Preview />
                        </Grid> : null }
            
          </Grid>
}