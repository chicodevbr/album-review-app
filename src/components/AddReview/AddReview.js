import { Formik } from 'formik';
import { Box, Button, Form, FormField, TextArea, TextInput } from 'grommet';
import { useParams } from 'react-router-dom';
import { putRequest } from '../../fetch';
import url from '../../fetch/urls';
import { HeaderBar } from '../Header/Header';

const AddReview = () => {
  const albumId = useParams();
  const handleSendSubmit = (values) => {
    putRequest(`${url.reviews}${albumId}`, values);
    console.log(values);
  };

  return (
    <Box>
      <HeaderBar />
      <Box pad="xlarge" gap="small">
        <Formik
          initialValues={{
            title: '',
            author: '',
            post: '',
          }}
          onSubmit={handleSendSubmit}
        >
          {({ values, handleChange, handleSubmit, resetForm }) => (
            <Form onSubmit={handleSubmit}>
              <FormField label="Title" name="title">
                <TextInput
                  name="title"
                  size="large"
                  value={values.title}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Post" name="post">
                <TextArea
                  fill
                  name="post"
                  value={values.post}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Author" name="author">
                <TextInput
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                />
              </FormField>
              <Box direction="row" justify="evenly" margin={{ top: 'medium' }}>
                <Button label="Cancel" color="status-ok" />
                <Button label="Save" primary color="status-ok" type="submit" />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default AddReview;
