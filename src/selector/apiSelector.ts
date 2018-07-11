export const selectBackendApiUrl = () => {
  console.log('env', process.env.BACKEND_API_CLIENT_URL);
  return 'http://localhost:3000';
};
