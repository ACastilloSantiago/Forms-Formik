import { useFormik, Formik, Field, Form, ErrorMessage, FormikHelpers, FormikValues } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''

                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .required('Requerido')
                        .max(15, 'Debe de tener 15 caracteres o menos'),
                    lastName: Yup.string()
                        .required('Requerido')
                        .max(10, 'Debe de tener 10 caracteres o menos'),
                    email: Yup.string()
                        .required('Requerido')
                        .email('El correo no tiene un formato válido.'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones.'),
                    jobType: Yup.string()
                        .required('Requerido')
                        .notOneOf(['it-jr'], 'Esta opción no es permitida.')

                })}
            >
                {formik => (
                    <Form >

                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name='firstName' />
                        <ErrorMessage name='firstName' component='span' />


                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name='lastName' />
                        <ErrorMessage name='lastName' component='span' />

                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name='email' />
                        <ErrorMessage name='email' component='span' />

                        <label>Job Type</label>
                        <Field as="select" name='jobType' >
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>It Senior</option>
                            <option value='it-jr'>It Jr.</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span' />

                        <label >
                            <Field type="checkbox" name='terms' />
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component='span' />

                        <button type='submit' >Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
