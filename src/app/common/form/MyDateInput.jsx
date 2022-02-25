import { Alert, TextField, Typography } from '@mui/material'
import { useField , useFormikContext } from 'formik'
import React from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export default function MyDateInput({label,...props}) {
    const {setFieldValue} = useFormikContext()

    const [field,meta,helpers] = useField(props)

  return (
    <div>
        <label>{label}</label>
       
        <ReactDatePicker 
        {...field}
        {...props}
        selected={(field.value && new Date(field.value))}
        onChange={value=>setFieldValue(field.name,value)} 
        />

        {meta.touched && meta.error ? 
        (
            <Alert severity='error'>{meta.error}</Alert>

        ) : null}
    </div>

  )
}
