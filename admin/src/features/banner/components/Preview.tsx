import * as React from "react"
import { /*useAppDispatch, */useAppSelector } from "../../../app/hooks"
import { selectPreview, selectSelected } from "../"
import { 
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material"
import { Icon } from "../../../theme"

export default function Preview() {
  const selected = useAppSelector(selectSelected)
  const preview = useAppSelector(selectPreview)
  // console.log ("Preview", preview)

  return <Card sx={{ m:1, p: 1 }}>
            <CardHeader 
              title={ <Typography variant="body1">
                        Preview
                      </Typography>  }
              avatar={ <Icon icon="preview" /> }
            />
            
            <CardContent>
              <pre>
              selected{ JSON.stringify(selected, null, 2)}
              </pre>
            </CardContent>
          </Card>
}

/**
 * <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </Typography>
 */