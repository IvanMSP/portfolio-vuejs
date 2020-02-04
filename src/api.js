const url = "https://bawbam-api.herokuapp.com/api";

function getUser(username) {
  return fetch(`${url}/user/${username}`)
    .then(res => res.json())
    .then(res => res.data);
}

function getProfile(username) {
  return fetch(`${url}/profile/${username}`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getUser,
  getProfile
};
