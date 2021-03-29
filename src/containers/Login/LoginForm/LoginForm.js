import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '../../../utils/routes';
const LoginForm = () =>  {
  const history = useHistory();
  return (
    <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           //alert(JSON.stringify(values, null, 2));
           history.push(ROUTE.dashboard.path);
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <div className="form-group mb-3">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="ni ni-single-02"></i>
                  </span>
                </div>
                <Field className="form-control" type="email" name="email" />
              </div>
            </div>
            <ErrorMessage name="email" component="div" />
            <div className="form-group mb-3">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="ni ni-single-02"></i>
                  </span>
                </div>
                <Field className="form-control"  type="password" name="password" />
              </div>
            </div>
            <ErrorMessage name="password" component="div" />
            <div className="text-center">
              <button className="btn btn-primary my-4" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
            
         </Form>
      )}
     </Formik>
  );
}

export default LoginForm;
