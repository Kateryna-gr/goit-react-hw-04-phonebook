import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, StyledForm } from 'components/contact-form/form.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string('Invalid name').required('Enter name'),
  number: Yup.number('Invalid phone').required('Enter phone'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <p>Name</p>
          <Field type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          <p>Number</p>
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" component="div" />
        </label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
