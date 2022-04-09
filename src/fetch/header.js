export const setHeaders = () => {
  const header = {
    header: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };
  return header;
};
