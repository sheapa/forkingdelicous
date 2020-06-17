// import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
// import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// // Register User
// export const registerUser = (userData, history) => (dispatch) => {
//   axios
//     .post("/api/register", userData)
//     .then((res) => history.push("/login"))
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

// // Login User
// export const loginUser = (userData) => (dispatch) => {
//   axios
//     .post("/api/users/login", userData)
//     .then((res) => {
//       // Save to local storage
//       const token = res.data.token;
//       localStorage.setItem("jwtToken", token);
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

// // Set logged in user
// export const setCurrentUser = (decoded) => ({
//   type: SET_CURRENT_USER,
//   payload: decoded,
// });

// // Log out user
// export const logoutUser = () => (dispatch) => {
//   localStorage.removeItem("jwtToken");
//   setAuthToken(false);
//   dispatch(setCurrentUser({}));
// };
