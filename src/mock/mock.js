import Mock from 'mockjs'
import {
  targetData,
  sailProData,
  tgShipData,
  tgPlaneData,
  tgMissileData,
  warData
} from './data/data.js'

const serverAddress = "/SSSSSS";

Mock.mock(serverAddress + '/getTargetData', function (options) {
  let data = targetData();
  return data;
});
//正则匹配所有带参数url
Mock.mock(RegExp(serverAddress + '/getSelTarget' + ".*"), function (options) {
  let data;
  var url = options.url;
  var arr = url.split("?");
  var arr2 = arr[1].split("=");
  var id = parseInt(arr2[1]);
  data = id;
  return data;
});

Mock.mock(RegExp(serverAddress + '/getSelShip' + ".*"), function (options) {
  let data;
  var url = options.url;
  var arr = url.split("?");
  var arr2 = arr[1].split("=");
  var id = parseInt(arr2[1]);
  data = id;
  return data;
});

Mock.mock(RegExp(serverAddress + '/getWeaponInfo' + ".*"), function (options) {
    let data;
    var url = options.url;
    var arr = url.split("?");
    var arr2 = arr[1].split("=");
    var id = parseInt(arr2[1]);
    if(id==1||id==2){
        let obj={
            weaponType:"舰炮",
            weaponNum:2
        }
        data = obj;
    }
    if(id==3||id==4||id==5){
        let obj={
            weaponType:"近程导弹",
            weaponNum:4
        }
        data = obj;
    }
    if(id==6){
        let obj={
            weaponType:"远程导弹",
            weaponNum:1
        }
        data = obj;
    }
    return data;
  });

Mock.mock(RegExp(serverAddress + '/getAttackInfo' + ".*"), function (options) {
    let data;
    var url = options.url;
    var arr = url.split("?");
    var arr2 = arr[1].split("=");
    var id = parseInt(arr2[1]);
    if(id==1||id==2){
        let obj={
            attackTime:"20s",
            attackAngle:"30°"
        }
        data = obj;
    }
    if(id==3||id==4||id==5){
        let obj={
            attackTime:"10s",
            attackAngle:"20°"
        }
        data = obj;
    }
    if(id==6){
        let obj={
            attackTime:"14s",
            attackAngle:"46°"
        }
        data = obj;
    }
    return data;

});

/* Mock.mock(serverAddress + '/getGuardInfo', function () {
  let data = sailProData();
  return data;
}); */

Mock.mock(RegExp(serverAddress + '/getResult' + ".*"), function (options) {
    let data;
    var url = options.url;
    var arr = url.split("?");
    var arr2 = arr[1].split("=");
    var id = parseInt(arr2[1]);
    if(id == 1){
        data={
            shipId:id,
            targetId:id,
            damageOur:0,
            damageTg:0
        }
    }else{
        data={
            shipId:id,
            targetId:id,
            damageOur:(id*0.1).toFixed(2),
            damageTg:1
        }
    }
    
    return data;
  });

Mock.mock(serverAddress + '/getTargets', function () {
  let data = targetData();
  return data;
});

Mock.mock(serverAddress + '/getTgShip', function () {
  let data = tgShipData();
  return data;
});
Mock.mock(serverAddress + '/getTgPlane', function () {
  let data = tgPlaneData();
  return data;
});
Mock.mock(serverAddress + '/getTgMissile', function () {
  let data = tgMissileData();
  return data;
});

Mock.mock(serverAddress + '/getWarInfo', function () {
    let data = warData();
    return data;
  });


