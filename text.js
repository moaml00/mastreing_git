console.log('test');

function main (a,b){

    if(a===0||b===0)
        return 0;

    a=a/b;
    b=b/a;

    return main(a,b);

}

console.log(main(10,20));