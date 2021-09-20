function strRandom() {
    let n = 50
    for (let i = 1; i <= n; i++) {
        if( i % 5 == 0 ){
            console.log('Backend')
        } else if(i % 3 === 0){
            console.log('Frontend')
        } else {
             console.log(i);
        }
        
    }
}

strRandom();