// Template for making a new component

import * as React from "react"
// import { /*useAppDispatch, */useAppSelector } from "../app/hooks"
// import { selectToplist } from "../features/toplist/"

import { 
  Box,
} from "@mui/material"

export default function Preview() {

  // const dispatch = useAppDispatch()
  // const toplist = useAppSelector(selectToplist)
  // const admin = useAppSelector(selectAdmin)

  // console.log ("toplist", toplist)

  return <Box sx={{ border: "1px solid red", p: 2}}>
            Preview
          </Box>
}
