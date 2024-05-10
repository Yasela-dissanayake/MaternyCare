import { useFormik } from "formik";

const RegistrationPage_1 = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            contactNumber: "",
            otherContact: "",
        },
    });

    console.log(formik);
    return (
        <form autoComplete="off">
            <label htmlFor="firstName">First Name</label>
            <input
                value={formik.values.firstName}
                onChange={formik.handleChange}
                id="firstName"
                type="firstName"
                placeholder="First Name"
                onBlur={formik.handleBlur}
            />
        </form>
    )
};
export default RegistrationPage_1;