import * as React from "react"
// import { useAppDispatch } from "../app/hooks"
import { Box, TextField } from "@mui/material"

export interface FieldShape {
  id: string
  value?: string
  valid?: boolean
  label: string
  helper: string
  onChange?: any
}

export default function Field(props: FieldShape) {

  // let id, value, onChange

  const { id, value, label, helper, onChange } = props

  return (
    <Box
      sx={{
        m: 1,
        "& .MuiTextField-root": {},
      }}
    >
      <TextField
        id={id}
        fullWidth
        error={ false }
        helperText={ helper}
        label={ label }
        defaultValue={ value }
        onChange={ onChange }
      />
    </Box>
  )
}
