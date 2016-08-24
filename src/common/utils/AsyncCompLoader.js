const queue = [];
const delay = 300;

let isWaiting =false;

function requestLoad(){
    if(isWaiting) return;
    if(!queue || queue.length===0) return;
    const component = queue.pop();
    isWaiting=true;
    component(()=>{
        setTimeout(()=>{
            isWaiting = false;
            requestLoad();
        },delay);
    });
}

export default function scheduleLoad(component){
    queue.push(component);
    requestLoad();
}