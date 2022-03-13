function plus (){
    let get = Number(document.getElementById('get').innerHTML);
    // console.log(get);
    let result = get + 1;
    // console.log(result);
    document.getElementById('get').innerHTML = result;
    // setTimeout(plus,1000);
}

function minus(){
    let get = document.getElementById('get').innerHTML;
    let result = get-1;
    document.getElementById('get').innerHTML = result;
}
