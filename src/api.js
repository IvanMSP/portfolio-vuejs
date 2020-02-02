const url = "https://bawbam-api.herokuapp.com/api";

function getUser() {
  return fetch(`${url}/user/bawbamgeek`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getUser
};
