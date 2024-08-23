import { useFormik } from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup'


export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({

        initialValues: {
            firstName: '',
            lastName: '',
            email: ''

        },
        onSubmit: values => {
            console.log(values);
        }
        ,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Requerido')
                .max(15, 'Debe de tener 15 caracteres o menos'),
            lastName: Yup.string()
                .required('Requerido')
                .max(10, 'Debe de tener 10 caracteres o menos'),
            email: Yup.string()
                .required('Requerido')
                .email('El correo no tiene un formato válido.'),
        })
    })

    return (
        <div>

            <h1>Formik Yup</h1>
            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    {...getFieldProps('firstName')}
                />

                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }



                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                    {...getFieldProps('lastName')}

                />
                {
                    touched.lastName && errors.lastName && <span>{errors.lastName}</span>
                }
                <label htmlFor="email">Email Address</label>
                <input type="email"
                    {...getFieldProps('email')}
                />
                {
                    touched.email && errors.email && <span>{errors.email}</span>
                }

                <button type='submit' >Submit</button>


            </form>
        </div>
    )
}
