import axiosInstance from "../routes/axios";

export const consultarFuncionario = (id, callback) => {
  axiosInstance.get('funcionario/' + id).then((res) => {
    if (callback != null) {
      callback(res.data)
    }
  }).catch((err) => { console.log(err) })
}

export const criarFuncionario = (id, callback) => {
  axiosInstance.get('funcionario/' + id).then((res) => {
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

export const criarStartup = (data) => {
  axiosInstance.post('create-startups', data).then((res) => {
  }).catch((err) => { console.log(err) })
}

export const removerStartup = (id) => {
  axiosInstance.delete('remove-startups/' + id).then((res) => {
  }).catch((err) => { console.log(err) })
}

export const atualizarStartup = (data) => {
  axiosInstance.put('update-startups', data).then((res) => {
  }).catch((err) => { console.log(err) })
}
