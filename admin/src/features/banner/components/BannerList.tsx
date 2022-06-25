import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectList, setBanner, selectSelected } from "../"
import {
  Avatar, 
  Card,
  IconButton,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material"
import { Icon } from "../../../theme"

export default function BannerList() {
  const list = useAppSelector(selectList)
  const selected = useAppSelector(selectSelected)
  const dispatch = useAppDispatch()

  const selectBannerId = (id: string) => {
    dispatch(setBanner({ key:"selected" ,value: id }))
  }

  return <Card sx={{ m:1, p: 1 }}>
            <CardHeader 
              avatar={ <Icon icon="banner" /> }
              title="Banners"
              action={<IconButton color="secondary">
                        <Icon icon="new" />
                      </IconButton>}
            />
            
            <CardContent>
              
              <List dense>
                {  list.length ? <React.Fragment>
                  { list.map( (item: any, i: number) => {
                    const { 
                      id,
                      deal,
                      avatar,
                      title,
                    } = item

                    return <ListItem 
                            key={`banner_${i}`}
                            button
                            // disabled={ id === selected ? true : false }
                            onClick={(e) => {
                              e.preventDefault()
                              selectBannerId(id)
                            }}>
                              <ListItemAvatar>
                                <Avatar src={avatar} />
                              </ListItemAvatar>
                              <ListItemText 
                                sx={{flexGrow:1}}
                                primary={ deal }
                                // secondary={ title }
                              />

                            { id === selected ? <ListItemAvatar>
                              <Icon icon="arrowr" />
                              </ListItemAvatar> : null }
                              
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