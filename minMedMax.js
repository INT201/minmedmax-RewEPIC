const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let arrays = [n1,n2,n3]
    sort(arrays,0,1)
    if (sort(arrays,1,2)) sort(arrays,0,1)
    return { min:arrays[0] ,mid:arrays[1], max:arrays[2] }
}
function swap(arr,n1,n2) {
    let temp = arr[n1]
    arr[n1] = arr[n2]
    arr[n2] = temp
    return arr
}
function sort(arr,n1,n2) {
    if (arr[n1] > arr[n2]) {
        swap(arr,n1,n2)
        return true;
    }
    return false;
}
module.exports = minMedMax
