import axiosInstance from "../routes/axios";

export const consultarFuncionario = (id, callback) => {
  axiosInstance.get('funcionario/' + id).then((res) => {
    if (callback != null) {
      callback(res.data)
    }
  }).catch((err) => { console.log(err) })
}

export const criarFuncionario = (data) => {
  axiosInstance.post('create-funcionario', data).then((res) => {
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

export const removerFuncionario = (id) => {
  axiosInstance.delete('remove-programador/' + id).then((res) => {
  }).catch((err) => { console.log(err) })
}

export const atualizarFuncionario = (data) => {
  axiosInstance.put('update-programador', data).then((res) => {
  }).catch((err) => { console.log(err) })
}

export const getLinguagem = (id, callback) => {
  axiosInstance.get('linguagem/' + id).then((res) => {
    if (callback != null) {
      callback(res.data)
    }
  }).catch((err) => { console.log(err) })
}


export const getAllLinguagem = (callback) => {
  axiosInstance.get('listar-linguagem').then((res) => {
    if (callback != null) {
      console.log(res.data)
      callback(res.data)
    }
  }).catch((err) => { console.log(err) })
}
