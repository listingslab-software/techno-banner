import * as React from "react"
import { Icon } from "../../../theme"
import { useAppSelector } from "../../../app/hooks"
import { Preview, selectCreator } from "../"

import { 
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material"

export default function Editor() {

  const creator = useAppSelector(selectCreator)
  if(creator)console.log("creator", creator)

  return <Card sx={{ m:1, p: 1 }}>
            <CardHeader 
              title="Preview and Edit"
              avatar={ <Icon icon="preview" /> }
              action={ <IconButton>
                          <Icon icon="close" />
                        </IconButton> }
            />
            
            <CardContent>
              <Preview />
            </CardContent>

            <CardActions>
              <Box sx={{ flexGrow:1  }} />
              <Button
                  disabled={false}
                  color="secondary"
                  variant="contained"
                >
                <span style={{marginRight: 8, marginLeft: 8,}}>
                  OK  
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