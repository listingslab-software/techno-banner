import * as React from "react"
import { /*useAppDispatch, */useAppSelector } from "../../../app/hooks"
import { 
  selectSelected,
  selectList,
} from "../"
import { 
  Box,
} from "@mui/material"

const getBannerById = (banners:any, id:string) => {
  for ( let i = 0; i < banners.length; i++){
    if(banners[i].id === id){
      return banners[i]
    }
  }
  return false
}

export default function Preview() {
  const list = useAppSelector(selectList)
  const selected = useAppSelector(selectSelected)
  const banner = getBannerById(list, selected)
  const { colors, size } = banner
  const { width, height } = size
  const { background, border } = colors
  return <Box 
            sx={{ 
              border: `1px solid ${border}`,
              background,
              m:1, 
              p: 1,
              height,
              width,
            }}>
          </Box>
}
