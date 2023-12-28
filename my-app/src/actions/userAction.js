export const LOGGED_IN = "LOGGED_IN";

export const loginData = ({
  name,
  email,
  password,
  role,
  photo,
  loggedIn,
}) => ({
  type: LOGGED_IN,
  payload: { name, email, password, role, photo, loggedIn },
});
