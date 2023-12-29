export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
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

export const loggedOut = ({ name, loggedIn, email }) => ({
  type: LOGGED_OUT,
  payload: { name, email, loggedIn },
});
