import * as React from "react"
// import { useAppDispatch } from "../app/hooks"
import { Box, TextField } from "@mui/material"

export interface FieldShape {
  id: string
  autoFocus?: boolean
  value?: string
  valid?: boolean
  pristine?: boolean
  label: string
  helper: string
  onChange?: any
}

export default function Field(props: FieldShape) {

  const { 
    autoFocus,
    id,
    value, 
    valid,
    label, 
    helper, 
    onChange,
    pristine,
  } = props

  return (
    <Box
      sx={{
        m: 1,
        "& .MuiTextField-root": {},
      }}
    >
      <TextField
        autoFocus={autoFocus}
        id={id}
        fullWidth
        error={ !valid }
        helperText={ !pristine && !valid ? helper : null }
        label={ label }
        defaultValue={ value }
        onChange={ onChange }
      />
    </Box>
  )
}
