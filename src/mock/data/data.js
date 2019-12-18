import Mock from 'mockjs'


/*-----目标信息-----*/
const targetData = function () {
  let data = [];
  let obj1 = {
    id: 1,
    distance: "4.1km",
    speed: "36km/h",
    type: "友军",
    longitude: 117.6,
    latitude: 9.2
    
  }
  let obj2 = {
    id: 2,
    distance: "3.8km",
    speed: "22km/h",
    type: "船舰",
    longitude: 117.40,
      latitude: 9.1
    
  }
  let obj3 = {
    id: 3,
    distance: "3.7km",
    speed: "28km/h",
    type: "船舰",
  
      longitude: 117.53,
      latitude: 9.12
   
  }
  let obj4 = {
    id: 4,
    type: "空军",
    distance: "4.1km",
    speed: "333km/h",
    
      longitude: 117.6,
      latitude: 8.7
    
  }
  let obj5 = {
    id: 5,
    type: "空军",
    distance: "4.1km",
    speed: "364km/h",
  
      longitude: 117.40,
      latitude: 8.6
    
  }
  let obj6 = {
    id: 6,
    type: "导弹",
    distance: "6.3km",
    speed: "742km/h",
    threatRank: "2级",
    
      longitude: 117.8,
      latitude: 8.8
    
  }


  data.push(obj1);
  data.push(obj2);
  data.push(obj3);
  data.push(obj4);
  data.push(obj5);
  data.push(obj6);


  return data;
}

const tgShipData = function () {
  let data = [];
  let obj1 = {
    id: 1,
    distance: "4.1km",
    speed: "36km/h",
    type: "友军",
    position: {
      longitude: (117.6).toFixed(4),
      latitude: (9.2).toFixed(4)
    },
  }
  let obj2 = {
    id: 2,
    distance: "3.8km",
    speed: "22km/h",
    type: "船舰",
    position: {
      longitude: (117.40).toFixed(4),
      latitude: (9.1).toFixed(4)
    },
  }
  let obj3 = {
    id: 3,
    distance: "3.7km",
    speed: "28km/h",
    type: "船舰",
    position: {
      longitude: (117.53).toFixed(4),
      latitude: (9.12).toFixed(4)
    },
  }
  data.push(obj1);
  data.push(obj2);
  data.push(obj3);

  return data;
}

const tgPlaneData = function () {
  let data = [];
  let obj1 = {
    id: 4,
    type: "空军",
    distance: "4.1km",
    speed: "333km/h",
    position: {
      longitude: (117.6).toFixed(4),
      latitude: (8.7).toFixed(4)
    },
  }
  let obj2 = {
    id: 5,
    type: "空军",
    distance: "4.1km",
    speed: "364km/h",
    position: {
      longitude: (117.40).toFixed(4),
      latitude: (8.6).toFixed(4)
    },
  }
  data.push(obj1);
  data.push(obj2);

  return data;
}

const tgMissileData = function () {
  let data = [];
  let obj1 = {
    id: 6,
    type: "导弹",
    distance: "6.3km",
    speed: "742km/h",
    threatRank: "2级",
    position: {
      longitude: (117.8).toFixed(4),
      latitude: (8.8).toFixed(4)
    },
  }
  data.push(obj1);

  return data;
}


/*-----我方军舰信息-----*/
const sailProData = function () {
  let data = [];
  let obj1 = {
    shipId: 1,
    type: "船舰",
    
      longitude: 117.12,
      latitude: 8.8
   
  }
  let obj2 = {
    id: 2,
    type: "船舰",
   
      longitude: 116.9,
      latitude: 9.1
    
  }
  let obj3 = {
    id: 3,
    type: "船舰",
   
      longitude: 116.92,
      latitude: 8.9
   
  }
  let obj4 = {
    id: 4,
    type: "船舰",
    
      longitude: 116.87,
      latitude: 8.77
   
  }
  let obj5 = {
    id: 5,
    type: "船舰",
    position: {
      longitude: 116.96,
      latitude: 8.6
    },
  }
  let obj6 = {
    id: 6,
    type: "船舰",
  
      longitude: 116.82,
      latitude: 8.92
   
  }
  data.push(obj1);
  data.push(obj2);
  data.push(obj3);
  data.push(obj4);
  data.push(obj5);
  data.push(obj6);
  return data;
}

const warData = function () {
    let data = [];
    let obj1 = {
        shipId:1,
        targetId: 1,
        targetType: "友军",
        weaponType: "/",
        weaponNum: "/",
        attackTime: "/",
        attackAngle: "/",
        damageOur: 0,
        damageTg: 0 
    }
    let obj2 = {
        shipId:2,
        targetId: 2,
        targetType: "船舰",
        weaponType: "舰炮",
        weaponNum: 2,
        attackTime: "20s",
        attackAngle: "30°",
        damageOur: 0.2,
        damageTg: 1 
    }
    let obj3 = {
        shipId:3,
        targetId: 3,
        targetType: "船舰",
        weaponType: "船舰",
        weaponNum: 2,
        attackTime: "20s",
        attackAngle: "30°",
        damageOur: 0.2,
        damageTg: 1 
    }
    let obj4 = {
        shipId:4,
        targetId: 4,
        targetType: "船舰",
        weaponType: "空军",
        weaponNum: 2,
        attackTime: "20s",
        attackAngle: "30°",
        damageOur: 0.2,
        damageTg: 1 
    }
    let obj5 = {
        shipId:5,
        targetId: 5,
        targetType: "船舰",
        weaponType: "空军",
        weaponNum: 2,
        attackTime: "20s",
        attackAngle: "30°",
        damageOur: 0.2,
        damageTg: 1 
    }
    let obj6 = {
        shipId:6,
        targetId: 6,
        targetType: "船舰",
        weaponType: "导弹",
        weaponNum: 2,
        attackTime: "20s",
        attackAngle: "30°",
        damageOur: 0.2,
        damageTg: 1 
    }
    data.push(obj1);
    data.push(obj2);
    data.push(obj3);
    data.push(obj4);
    data.push(obj5);
    data.push(obj6);
    return data;
  }

export {
  targetData,
  sailProData,
  tgShipData,
  tgPlaneData,
  tgMissileData,
  warData
}
