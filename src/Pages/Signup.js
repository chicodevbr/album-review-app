import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { Formik } from 'formik';
import { postRequest } from '../fetch';
import url from '../fetch/urls';
import React from 'react';
import DefaultPage from '../templates/DefaultPage';

const Signup = () => {
  const handleSendSubmit = (values) => {
    postRequest(url.signup, values)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log(values);
  };

  return (
    <DefaultPage>
      <Box fill>
        <Box
          align="start"
          justify="center"
          border
          gap="medium"
          pad="large"
          width="medium"
        >
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={handleSendSubmit}
          >
            {({ values, handleChange, handleSubmit, resetForm }) => (
              <Form onSubmit={handleSubmit}>
                <FormField label="Name" name="name">
                  <TextInput
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </FormField>
                <FormField label="Email" name="name">
                  <TextInput
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </FormField>
                <FormField label="Password" name="password">
                  <TextInput
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                  />
                </FormField>
                <Box
                  direction="row"
                  justify="between"
                  margin={{ top: 'medium' }}
                >
                  <Button label="Cancel" color="status-ok" />
                  <Button
                    label="Send"
                    primary
                    color="status-ok"
                    type="submit"
                  />
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </DefaultPage>
  );
};

export default Signup;
