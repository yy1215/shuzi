import axios from 'axios';
let base = '';
let ipAdd = 'http://127.0.0.1';

export const  requestLogin = params => {
 
    let username = params.username;
    let password = params.password;
    console.log(params);
    //得到用户信息
    let user = getUserinfo(username);
    let msg = '';

    if(user && password == user.password ){
          //验证通过
          delete user.password
    }else{
        msg ='账户或密码错误'
    }
     
    return new Promise((resolve, reject) => {
        if (msg) {
            resolve({code: 500, msg: msg})
        } else {
            resolve({code: 200, msg: '请求成功', user})
        }
    });

    //这里假设通过username到数据库获取到用户信息
    function getUserinfo(username) {
        if (username === 'admin') {
            //如果username存在
            return {
                id: 1,
                username: 'admin',
                password: '123456', //正常情况这里密码应该是加密的（可以用MD5加密）
                email: 'jerry902@qq.com',
                name: '123'
            }
        } else {
            //如果username不存在
            return null;
        }
    }
}