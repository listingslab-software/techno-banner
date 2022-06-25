import * as React from "react"
import { /*useAppDispatch, */useAppSelector } from "../../../app/hooks"
import { selectPreview, selectSelected } from "../"
import { 
  Box,
  Typography,
} from "@mui/material"
import { Icon } from "../../../theme"

export default function Preview() {
  const selected = useAppSelector(selectSelected)
  const preview = useAppSelector(selectPreview)
  if(preview)console.log("preview", preview)

  return <React.Fragment>
          <Box 
            sx={{ 
              border: "1px solid black",
              background: "#eee",
              m:1, 
              p: 1,
              height: 78,
              width: 468,
            }}>
          </Box>
          <Typography variant="body2" 
          sx={{ 
            m:1, 
            p: 1,
          }}>
            Size: Olden days (468px by 78px)
          </Typography>
          </React.Fragment>
}

/**
 * 
 * 
 * <CardHeader 
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


 * <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </Typography>
 */