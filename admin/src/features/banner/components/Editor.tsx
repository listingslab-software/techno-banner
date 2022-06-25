import * as React from "react"
import { Icon } from "../../../theme"
import { 
  // useAppSelector,
  useAppDispatch,
} from "../../../app/hooks"
import { 
  // selectSelected,
  // selectList,
  Field,
  setBanner,
} from "../"
import { Preview } from "../"

import { 
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material"

// const getBannerById = (banners:any, id:string) => {
//   for ( let i = 0; i < banners.length; i++){
//     if(banners[i].id === id){
//       return banners[i]
//     }
//   }
//   return false
// }

export default function Editor() {
  // const list = useAppSelector(selectList)
  // const selected = useAppSelector(selectSelected)
  // const banner = getBannerById(list, selected)
  const dispatch = useAppDispatch()
  // const { title, description } = banner

  

  return <Card sx={{ m:1, p: 1 }}>
            
            <CardHeader 
              // title={ `${title}` }
              // subheader={ description }            
              avatar={ <Icon icon="preview"/> }
              action={ <IconButton
                color="secondary"
                          onClick={(e) => {
                            e.preventDefault()
                            dispatch(setBanner({key: "selected", value:null,}))
                          }}>
                          <Icon icon="close" />
                        </IconButton> }
            />
            
            <CardContent>

            

              <Field 
                id="deal"
                value=""
                valid={ false }
                label="Deal"
                helper={"Name the deal please"}
                onChange={ (e:any) => {
                  console.log(e.target.value)
                }}
              />

              <Field 
                id="slug"
                value=""
                valid={ false }
                label="Slug"
                helper={"Auto generated seo slug (can be overwritten)"}
                onChange={ (e:any) => {
                  console.log(e.target.value)
                }}
              />
              
            </CardContent>

            <CardActions>
              <Box sx={{ flexGrow:1  }} />
              <Button
                  disabled={false}
                  color="secondary"
                  variant="contained"
                >
                <span style={{marginRight: 8, marginLeft: 8,}}>
                 Izzzz OK?  
                </span> 
                <Icon icon="italian" />
              </Button>
            </CardActions>
          </Card>
}

/**
 * <pre>
                { JSON.stringify(creator, null, 2)}
              </pre>
 */