/**
 * Created by Administrator on 2017/4/13.
 */

//我们这里使用CommonJS的风格
// function generateText() {
//
// };
export default function () {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    element.style.color = 'red';
    element.style.border = '1px solid #666';
    element.style.backgroundColor = '#999';
    return element;
}

// module.exports = generateText;