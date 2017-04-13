/**
 * Created by Administrator on 2017/4/13.
 */

import './sass/main.scss';
import generateText  from './sub';
import $ from 'jquery';
import moment from 'moment';
import imgUrl from './image/5.jpg';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
    $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
});
app.innerHTML = '<h1>Hello it</h1><img src="'+imgUrl+'" alt="我的">';
document.body.appendChild(app);
app.appendChild(generateText());


