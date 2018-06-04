import _ from 'lodash';
import printMe from './print.js'
import './style.css';

function component() {
    let element = document.createElement('div'),
        btn = document.createElement('button');

    element.innerHTML = _.join(['Hello','World'],'');
    btn.innerHTML = 'Click Me and check the console';

    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

let element = component();

document.body.appendChild(element);

if(module.hot) {
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!');
        printMe();
    })
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
}