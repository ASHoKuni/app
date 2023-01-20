
import { useFormik, yupToFormErrors } from "formik"
import * as Yup from 'yup';

export default SignupForm = () =>{

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        },validationSchema: Yup.object({
            firstName:Yup.string().max(15,'Must be 15 character or less').required('Required'),
            lastName:Yup.string().max(20,'Max be 20 character or less').required('Required'),
            email:Yup.string().email("Invalid email address").required('Required'),

        }),
        onSubmit:values =>{
            alert(JSON.stringify(values,null,2))
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}>
            <h2>Sign Up</h2>
            

            <label htmlFor="firstName">FirstName : </label>
            <input type="text" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur}/> <br/><br/>
            {formik.touched.firstName && formik.errors.firstName ? (<div style={{color:"red"}}>{formik.errors.firstName}</div>) : null}
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName" onChange={formik.handleChange} value={formik.values.lastName}  onBlur={formik.handleBlur}/><br/><br/>
            {formik.touched.lastName && formik.errors.lastName ? (<div style={{color:"red"}}>{formik.errors.lastName}</div>) : null}
            <label htmlFor="email">Email : </label>
            <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/> <br/><br/>
            {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}}>{formik.errors.email}</div> ) : null}
            <button type="submit"> Submit </button>
        </form>
    )
}