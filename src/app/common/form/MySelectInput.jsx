import { Alert, MenuItem,  TextField, Typography } from '@mui/material'
import { useField } from 'formik'
import React from 'react'
import { FormField, Select } from 'semantic-ui-react'


export default function MySelectInput({label,...props}) {
    const [field,meta , helpers ,] = useField(props)
  

  return (
    <FormField error={meta.touched && !!meta.error}>
        <label>{label}</label>
       {/* <Select
       autoWidth
       value={field.value || ''}  
       onChange={(e,d)=>helpers.setValue(d.value)}
       onBlur ={()=>helpers.setTouched(true) }
       
       >
    {props.options.map(element => (<MenuItem key={element.key} value={element.value}>{element.text}</MenuItem>))}
        
       </Select> */}

       <Select
       clearable
       value={field.value || null}
       onChange={(e,d)=>helpers.setValue(d.value)}
       onBlur={(() => helpers.setTouched(true))}
       {...props} 
       />
        {meta.touched && meta.error ? 
        (
            <Alert severity='error'>{meta.error}</Alert>

        ) : null}
    </FormField>

  )
}
