import axios from 'axios';
import { Formik } from 'formik';
import { Box, Button, FormField, TextInput } from 'grommet';
import React from 'react';

const AddAlbum = () => {
  const handleAddSubmit = (values) => {
    axios
      .post('https://api-album-review.herokuapp.com/albums', values)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    console.log(values);
  };

  return (
    <Box direction="column" align="center">
      <Box width="40%" pad="large" align="center" round gap="small">
        <Formik
          initialValues={{
            name: '',
            artist: '',
            year: '',
            producer: '',
            imgUrl: '',
          }}
          onSubmit={handleAddSubmit}
        >
          {({ values, handleChange, handleSubmit, resetForm }) => (
            <form onSubmit={handleSubmit}>
              <FormField label="Name" htmlFor="name">
                <TextInput
                  id="name"
                  name="name"
                  placeholder="type here"
                  value={values.name}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Artist" htmlFor="artist">
                <TextInput
                  id="artist"
                  name="artist"
                  placeholder="type artist name here"
                  value={values.artist}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Year" htmlFor="year">
                <TextInput
                  id="year"
                  name="year"
                  placeholder="release date"
                  value={values.year}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Producer" htmlFor="producer">
                <TextInput
                  id="producer"
                  name="producer"
                  placeholder="producer name"
                  value={values.producer}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Image" htmlFor="imgUrl">
                <TextInput
                  id="imgUrl"
                  name="imgUrl"
                  placeholder="http://"
                  value={values.imgUrl}
                  onChange={handleChange}
                />
              </FormField>
              <Button type="submit" primary label="Submit" />
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default AddAlbum;
