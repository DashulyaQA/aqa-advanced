function recursion(num){
    console.log(num)

    if (num <= 0) {
        return true 
    }
    return recursion(num - 1) 
}

recursion(5)