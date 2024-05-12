import {useFormik} from "formik";
import logo  from "../assets/images/logo.png";
import {textStyles} from "../GlobalStyles"

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
    <form  autoComplete="off">
      <div className="flex flex-col items-center">
        <img className="w-[10%] h-[10%] mt-[96px] mb-[12px]" src={logo} alt="Logo" />
        <h1 className={`${textStyles.primaryPink} text-4xl mb-[48px]`}>MaternyCare</h1>
        <div>
            <input
            className="shadow appearance-none border rounded-lg py-4 px-4 w-5/12	 text-gray-700 leading-tight focus:outline-[#0D99FF] focus:shadow-outline"
            value={values.name}
            onChange={handleChange} 
            type="text"
            placeholder="Name"
            onBlur={handleBlur}
            />
          <div className="p-3"/>
            <input
            className="shadow appearance-none border rounded-lg py-4 px-4 w-5/12	 text-gray-700 leading-tight focus:outline-[#0D99FF] focus:shadow-outline"
            value={values.password}
            onChange={handleChange} 
            type="password"
            placeholder="Password"
            onBlur={handleBlur}
        />
        </div>
      </div>
      
    </form>
  )

  
};

export default Login;
