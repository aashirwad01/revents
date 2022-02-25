import { Alert, TextField, Typography } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

export default function MyTextInput({label,...props}) {
    const [field,meta] = useField(props)

  return (
    <div>
        <label>{label}</label>
        <TextField style={{marginTop:'1rem'}} fullWidth error={meta.touched && !!meta.error} {...field} {...props} />
        {meta.touched && meta.error ? 
        (
            <Alert severity='error'>{meta.error}</Alert>

        ) : null}
    </div>

  )
}
