import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Text,
  TextInput,
} from 'grommet';
import { Formik } from 'formik';

import React from 'react';
const Login = () => {
  const handleSendSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Box align="center" justify="center" pad="medium">
        <Heading>
          <Text size="large" align="center">
            Login
          </Text>
        </Heading>

        <Box
          align="center"
          justify="center"
          border
          gap="medium"
          pad="large"
          width="medium"
        >
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={handleSendSubmit}
          >
            {({ values, handleChange, handleSubmit, resetForm }) => (
              <Form onSubmit={handleSubmit}>
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
    </>
  );
};

export default Login;
