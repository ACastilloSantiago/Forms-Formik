import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput } from '../components/MyTextInput'
import { MySelect } from '../components/MySelect'

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>FormikAbstraction</h1>
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

                        <MyTextInput label='First Name' name='firstName' placeholder='Santiago' />
                        <MyTextInput label='Last Name' name='lastName' placeholder='Castillo' />

                        <MyTextInput label='Email Address' name='email' placeholder='algo@gmail.com' type='email' />
                        {/* <MyTextInput label='Last Name' name='lastName' placeholder='Castillo'/> */}

                        <MySelect label='Job Type' name='jobType' >
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>It Senior</option>
                            <option value='it-jr'>It Jr.</option>
                        </MySelect>

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
