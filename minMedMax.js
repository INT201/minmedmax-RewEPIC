const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let arrays = [n1,n2,n3]
    //Limit 3 arrays sort only.
    for (let i = 0;i < arrays.length;i++) {
        if (arrays[i] > arrays[i+1]) {
            swap(arrays,i,i+1)
            if (arrays[i-1] > arrays[i]) swap(arrays,i-1,i)
        }
    }
    return { min:arrays[0] ,mid:arrays[1], max:arrays[2] }
}
function swap(arr,n1,n2) {
    let temp = arr[n1]
    arr[n1] = arr[n2]
    arr[n2] = temp
    return arr
}
module.exports = minMedMax
