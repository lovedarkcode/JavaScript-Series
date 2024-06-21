// immediately invoked function express (IIFE)

(function coffee(){
    //named iife
    console.log(`DB Connected`);
})();
// polution accours in  the global scops of the variables, so to remove this we use iife
//(funtion)(execusion)

( (name)=> {
    //nonnamed iife
    console.log(`DB connected 2 ${name}`);
})("aditya");