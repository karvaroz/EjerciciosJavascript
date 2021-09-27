let num1 = [1, 2, 3, 4] 
let num2 = [4, 5, 6, 7]
let num3 = [8, 9, 0, 1]
let num4 = [2, 3, 4, 5]
num =[num1,num2,num3,num4]
let matrizNum =" ";
for (let i=0; i<num.length; i++){
    for(let j=0; j< num.length; j++){
        matrizNum = matrizNum + num[i][j] + " "

    }
    matrizNum += "\n"
    
}
alert(matrizNum)