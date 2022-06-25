import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectList, setBanner, selectSelected } from "../"
import {
  useTheme,
  Avatar, 
  Card,
  IconButton,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material"
import { Icon } from "../../../theme"

export default function BannerList() {

  const theme = useTheme()
  const list = useAppSelector(selectList)
  const selected = useAppSelector(selectSelected)
  const dispatch = useAppDispatch()

  const selectBannerId = (id: string) => {
    dispatch(setBanner({ key:"selected" ,value: id }))
  }

  return <Card sx={{ m:1, p: 1 }}>
            <CardHeader 
              
              action={<IconButton sx={{ border: `1px solid ${theme.palette.divider}` }}>
                                <Icon icon="new" />
                              </IconButton>}
              
            />
            
            <CardContent>
              
              <List dense>
                {  list.length ? <React.Fragment>
                  { list.map( (item: any, i: number) => {
                    const { 
                      id,
                      brand,
                      icon,
                      title,
                    } = item

                    if (id === selected){
                      console.log("id", id)
                    }

                    return <ListItem 
                            key={`banner_${i}`}
                            button
                            disabled={ id === selected ? true : false }
                            onClick={(e) => {
                              e.preventDefault()
                              selectBannerId(id)
                            }}>
                              <ListItemAvatar>
                                <Avatar src={icon} />
                              </ListItemAvatar>
                              <ListItemText 
                                primary={ title}
                                secondary={ brand }
                              />
                    </ListItem>
                  })}
                </React.Fragment> : null  }
                
              </List>
              
            </CardContent>
          </Card>
}

/*
<pre>
  { JSON.stringify(list, null, 2)}
</pre>
avatar={ <Icon icon="list" /> }
*/