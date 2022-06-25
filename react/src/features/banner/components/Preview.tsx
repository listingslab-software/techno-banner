import * as React from "react"
import { /*useAppDispatch, */useAppSelector } from "../../../app/hooks"
import { selectPreview } from "../"
import { 
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material"
import { Icon } from "../../../theme"

export default function Preview() {
  const preview = useAppSelector(selectPreview)
  // console.log ("Preview", preview)

  return <Card sx={{ m:1, p: 1 }}>
            <CardHeader 
              title={ <Typography variant="body1">
                        Previewing...
                      </Typography>  }
              avatar={ <Icon icon="preview" /> }
            />
            
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </Typography>
              <pre>
                { JSON.stringify(preview, null, 2)}
              </pre>
            </CardContent>
          </Card>
}
