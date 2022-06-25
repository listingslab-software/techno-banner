import * as React from "react"
import { /*useAppDispatch, */useAppSelector } from "../../../app/hooks"
import { selectList } from "../"
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

  const selectBannerId = (id: string) => {
    console.warn("selectBannerId", id)
  }

  return <Card sx={{ m:1, p: 1 }}>
            <CardHeader 
              avatar={ <Icon icon="list" /> }
              title={ <Typography variant="body1">
                        Banner List
                      </Typography>  }
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
                      avatar,
                      title, 
                      description,
                    } = item
                    return <ListItem 
                            key={`banner_${i}`}
                            button
                            onClick={(e) => {
                              e.preventDefault()
                              selectBannerId(id)
                            }}>
                              <ListItemAvatar>
                                <Avatar src={avatar} />
                              </ListItemAvatar>
                              <ListItemText 
                                primary={ title}
                                secondary={ description }
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
*/