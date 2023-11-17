# USER AUTHENTICATION APP
## REUSABLES
### FORM 
The form component accepts the following props:

**1. formDetails**
```
formDetails : arr = [
 {
   ref: 'firstName'
   type: 'text',
   errorMessage: 'The input is invalid!',
   col: "2"
 },
 {
   ref: 'lastName'
   type: 'text',
   errorMessage: 'The input is invalid!',
   col: "2"
 }
]
```
| Property | Description | Data Type | Accepted Values | isRequired |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| placeholder | Placeholder for input | string | any | no |
| ref | Name of its property in the formData prop | string | a property from FormData obj | yes |
| type | Type of input field | string | text, email, password, submit | no (default: text) |
| errorMessage | Tooltip to display when input is invalid | string | any | no |
| col | Number of column per row (2 fields) | string | any | no (default: full column) |

**2. formData**

**3. onSetFormData**

