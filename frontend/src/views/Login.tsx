import logo  from "../assets/images/logo.png";
import {textStyles} from "../GlobalStyles"
import InputField from "../components/InputField";
import  Button  from "../components/PrimaryButton";

const Login = () => {
  return <div className="text-center flex flex-col items-center">
    <img className="w-[10%] h-[10%] mt-[96px] mb-[12px]" src={logo} alt="" />
    <h1 className={`${textStyles.primaryPink} text-4xl mb-[48px]`}>MaternyCare</h1>
    <InputField value="Name" onChange={() =>{}}/>
    <div className="p-5"/>
    <InputField value="Password" onChange={() =>{}}/>
    <div className="p-3"/>
    <div className="flex justify-start w-5/12">
    <p className={`${textStyles.primaryGray} text-xs`}>Forgot Password?</p>
    </div>
    <div className="p-3"/>
    <Button label="Login" onClick={() =>{}}/>
  </div>;
};

export default Login;
