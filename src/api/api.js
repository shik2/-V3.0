import axios from 'axios';

const serverAddress = "http://49.235.247.121:9999";

const getSelTarget = (id) => {
  return axios.get('/api/getSelTarget', {
    params: {
      id: id
    }
  }).then(res => res.data);
}

const getSelShip = (id) => {
  return axios.get('/api/getSelShip', {
    params: {
      id: id
    }
  }).then(res => res.data);
}

const getGuardInfo = () => {
  return axios.get('/api/getGuardInfo').then(res => res.data);
}

const getTargets = () => {
  return axios.post('/api/getTargets').then(res => res.data);
}

const getTgShip = () => {
  return axios.get('/api/getTgShip').then(res => res.data);
}

const getTgPlane = () => {
  return axios.post('/api/getTgPlane').then(res => res.data);
}

const getTgMissile = () => {
  return axios.post('/api/getTgMissile').then(res => res.data);
}

const getWeaponInfo = (id) => {
  return axios.get('/api/getWeaponInfo', {
    params: {
      id: id
    }
  }).then(res => res.data);
}

const getAttackInfo = (id) => {
  return axios.get('/api/getAttackInfo', {
    params: {
      id: id
    }
  }).then(res => res.data);
}

const getResult = (id) => {
    return axios.get('/api/getResult', {
      params: {
        id: id
      }
    }).then(res => res.data);
  }

const getWarInfo = () => {
    return axios.post('/api/getWarInfo').then(res => res.data);
  }




export {
  getTargetData,
  getGuardInfo,
  getTargets,
  getWeapons,
  getAttackPos,
  getSelTarget,
  getSelShip,
  getTgShip,
  getTgPlane,
  getTgMissile,
  getWeaponInfo,
  getAttackInfo,
  getResult,
  getWarInfo
}
