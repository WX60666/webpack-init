/**
 * Created by Administrator on 2017/4/13.
 */

import './sass/main.scss';
import generateText  from './sub';
//在这配置之后,全局可用.
// import $ from 'jquery';
// import './plugin.js';
import moment from 'moment';
import imgUrl from './image/5.jpg';

let app  = document.createElement('div');
// const myPromise = Promise.resolve(42);
// myPromise.then((number) => {
//     jQuery('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
// });
app.innerHTML = '<h1>Hello it</h1><img src="'+imgUrl+'" alt="我的">';
document.body.appendChild(app);
console.log(generateText()[0]);
app.appendChild(generateText()[0]);


