//lodash를 모듈로 가져오는 방법: CommonJs 스펙

//var_ = require('lodash');
//es 방식의 모듈 가져오는 방법
import _ from 'lodash';
import './style.css';
import './hello.scss';


import './js/circle';

//named import: 반드시 {}안에 동일한 이름으로 넣어야 한다.
import {area, circumference} from "./js/circle";
import xxx from "./js/cube";



function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}


document.body.appendChild(component());


console.log("area(5), circumference");