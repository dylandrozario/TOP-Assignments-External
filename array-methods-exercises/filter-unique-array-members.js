function unique(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(result.includes(arr[i])){
            continue;
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}