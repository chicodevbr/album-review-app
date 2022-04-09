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
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../store/actions/authActions';

const Signup = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSendSubmit = (values) => {
    dispatch(signUp(values));

    if (auth._id) {
      return navigate(`/login`);
    }
  };

  return (
    <>
      <Box align="center" justify="center" pad="medium">
        <Heading>
          <Text size="large" align="center">
            Signup
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
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
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
                <FormField label="Confirm Password" name="confirmPassword">
                  <TextInput
                    name="confirmPassword"
                    value={values.confirmPassword}
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

export default Signup;
