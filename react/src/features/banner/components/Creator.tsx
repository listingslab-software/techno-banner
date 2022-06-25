// Template for making a new component

import * as React from "react"
import { Icon } from "../../../theme"
import { useAppSelector } from "../../../app/hooks"
import { selectCreator } from "../"

import { 
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material"

export default function Creator() {

  const creator = useAppSelector(selectCreator)

  return <Card sx={{ m:1, p: 1 }}>
            <CardHeader 
              title={ <Typography variant="body1">
                        Creating...
                      </Typography>  }
              avatar={ <Icon icon="edit" /> }
            />
            
            <CardContent>
              Headline
            </CardContent>

              <pre>
                { JSON.stringify(creator, null, 2)}
              </pre>

            <CardActions>
            <Button
                disabled
                color="secondary"
                variant="contained"
              >
                <Icon icon="save" />
                <span style={{marginRight: 8, marginLeft: 8,}}>Publish</span> 
                
              </Button>
            </CardActions>
          </Card>
}
