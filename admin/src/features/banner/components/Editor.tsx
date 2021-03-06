import * as React from "react"
import { Icon } from "../../../theme"
import { 
  useAppSelector,
  useAppDispatch,
} from "../../../app/hooks"
import { 
  selectSelected,
  selectList,
  Field,
  setBanner,
} from "../"

import { 
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material"

const getBannerById = (banners:any, id:string) => {
  for ( let i = 0; i < banners.length; i++){
    if(banners[i].id === id){
      return banners[i]
    }
  }
  return false
}

export default function Editor() {

  const [dealValid, setDealValid] = React.useState(true)
  const [dealPristine, setDealPristine] = React.useState(true)

  const [slugValid, setSlugValid] = React.useState(true)
  const [slugPristine, setSlugPristine] = React.useState(true)


  const list = useAppSelector(selectList)
  const selected = useAppSelector(selectSelected)
  const banner = getBannerById(list, selected)
  const dispatch = useAppDispatch()
  const { deal, slug } = banner

  return <Card sx={{ m:1, p: 1 }}>
            
            <CardHeader 
              // title={ `${title}` }
              // subheader={ description }            
              avatar={ <Icon icon="edit"/> }
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
                autoFocus={ true }
                pristine={ dealPristine }
                id="deal"
                value={ deal }
                valid={ dealValid }
                label="Deal"
                helper={ dealPristine && dealValid? "" : "Minimum 3 characters"}
                onChange={ (e:any) => {
                  let isValid = false
                  if (e.target.value.length > 3) isValid = true
                  setDealValid(isValid)
                  setDealPristine(false)
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
 * 
 * 
 * <Field 
                id="slug"
                value={ slug }
                valid={ false }
                label="Slug"
                helper="Auto generated seo slug (can be overwritten)"
                onChange={ (e:any) => {
                  let isValid = false
                  if (e.target.value.length > 3) isValid = true
                  // console.log(e.target.value)
                  console.log("Slug isValid", isValid)
                }}
                
              />
 * 
 * 
 * <pre>
                { JSON.stringify(creator, null, 2)}
              </pre>
 */