import {useFormik} from "formik";

const Login = () => {
  const {values, handleBlur, handleChange} = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  });
  

  return(
    <form autoComplete="off">
      <label htmlFor="name">Name</label>
      <input
      value={values.name}
      onChange={handleChange} 
      type="text"
      placeholder="Name"
      onBlur={handleBlur}
       />
    </form>
  )

  
};

export default Login;
