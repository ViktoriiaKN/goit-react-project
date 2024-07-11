import { Field, Form, Formik } from 'formik';
import css from './FeedbackForm.module.css';

export const FeedbackForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: ''
      }}
      onSubmit={() => {}}
    >
      <Form className={css.form}>
        <Field className={css.field} type="text" name="username" />
        <Field className={css.field} type="email" name="email" />
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
