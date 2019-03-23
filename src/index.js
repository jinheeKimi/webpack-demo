//lodash를 모듈로 가져오는 방법: CommonJs 스펙

//var_ = require('lodash');
//es 방식의 모듈 가져오는 방법
import _ from 'lodash';
import './style.css';
import './hello.scss';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}


document.body.appendChild(component());


console.log("hellow");