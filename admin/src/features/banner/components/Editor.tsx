import * as React from "react"
import { Icon } from "../../../theme"
import { useAppSelector } from "../../../app/hooks"
import { Preview, selectCreator } from "../"

import { 
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material"

export default function Editor() {

  const creator = useAppSelector(selectCreator)

  return <Card sx={{ m:1, p: 1 }}>
            <CardHeader 
              title={ <Typography variant="body1">
                        Editor...
                      </Typography>  }
              avatar={ <Icon icon="edit" /> }
            />
            
            <CardContent>
                <Preview />
            </CardContent>

              

            <CardActions>
            <Button
                disabled
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