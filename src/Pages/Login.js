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
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSendSubmit = (values) => {
    dispatch(login(values));

    if (auth._id) {
      return navigate(`/`);
    }
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
