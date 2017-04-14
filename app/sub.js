/**
 * Created by Administrator on 2017/4/13.
 */

//我们这里使用CommonJS的风格

import gaImgSrc from './image/g.jpg';
export default function () {
    let div = jQuery('<div></div>');
    let img = $('<img src="'+gaImgSrc+'">');
    let element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    element.style.color = 'red';
    element.style.border = '1px solid #666';
    element.style.backgroundColor = '#999';
    div.append($(element),img);
    return div;
}
