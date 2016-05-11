import axios from 'axios';

exports.loadTeacherData = (id, callback) => {
  const url = `http://localhost:8080/api/teachers/${id}`;
  return axios({
    url,
    timeout: 20000,
    method: 'get',
    // responseType: 'json',
    data: id,
  })
  .then((response) => {
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};

exports.loadStudentData = (id, callback) => {
  const url = `http://localhost:8080/api/students/${id}`;
  return axios({
    url,
    timeout: 20000,
    method: 'get',
    // responseType: 'json',
    data: id,
  })
  .then((response) => {
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};
