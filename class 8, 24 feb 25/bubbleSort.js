

let arr = [20, 10, 40, 5, 0, 100];
console.log("original Array:", arr);

function descending (){

    for( i = 0; i<arr.length; i++){
        for( ii = 0; ii<arr.length-i-1; ii++){
            
            if (arr[ii] < arr[ii+1]) {
                let current = arr[ii];
                arr[ii] = arr[ii+1];
                arr[ii+1] = current; 
                // console.log(arr);                             
            }          
                }
    }
}
descending();
console.log("Array in Descending Order:", arr);



let arr1 = [20, 10, 40, 5, 0, 100];

function Ascending (){

    for( i = 0; i<arr1.length; i++){
        for( ii = 0; ii<arr1.length-i-1; ii++){
            
            if (arr1[ii] > arr1[ii+1]) {
                let current1 = arr1[ii];
                arr1[ii] = arr1[ii+1];
                arr1[ii+1] = current1; 
                // console.log(arr1);                       
            }          
                }
    }
}
Ascending();
console.log("Array in Ascending Order:", arr1);














