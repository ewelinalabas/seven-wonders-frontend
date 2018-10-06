export const redirectTo = (path: string) => () => {
  if (window.location.pathname !== path) {
    window.location.replace(path);
  }
};
