import axiosInstance from "../routes/axios";

export const consultarStartup = (id, callback) => {
  axiosInstance.get('startups/' + id).then((res) => {
    if (callback != null) {
      callback(res.data)
    }
  }).catch((err) => { console.log(err) })
}

export const listarStartup = (callback) => {
  axiosInstance.get('startups').then((res) => {
    if (callback != null) {
      callback(res.data)
    }
  }).catch((err) => { console.log(err) })
}