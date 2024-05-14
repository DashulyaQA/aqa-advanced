function handleNum(num, callPackEven, callBackOdd) {
    num % 2 === 0 ? callPackEven() : callBackOdd()
}

function handleEven() {
    console.log('number is even')
}

function handleOdd() {
    console.log('number is odd')
}

handleNum(4, handleEven, handleOdd)
handleNum(3, handleEven, handleOdd)