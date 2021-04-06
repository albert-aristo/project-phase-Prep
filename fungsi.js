var jawabanAsliFungsi = ''
let flag = false
//muncul angka random/soal
function angkaRandom(){ //parameter1 = 1,waktu = 7000
    let operator = document.getElementById('operasi').value
    let batas = Number(document.getElementById('batasDigit').value)
    let parameter1 = Number(document.getElementById('nilaiTambahan').value)
    // let waktu = Number(document.getElementById('batasWaktu').value) // nanti ganti namanya jadi waktu
    let contoh = [,,,].join(' - ')
    let contoh1 = document.getElementsByClassName('box-jawaban')[0]
    // console.log(batas);
    for(let a = 0; a < contoh1.length; a++){
        contoh1[a].setAttribute('maxlength',batas)
        // contoh1[a].getAttribute('maxlength')
        // panjangMaxlength = contoh1[a].setAttribute('maxlength')
        // panjangMaxlength = batas
    }
    // console.log(contoh1[0],'===',contoh1[0].getAttribute('maxlength'));

    document.getElementById('first').value = ''
    document.getElementById('second').value = ''
    document.getElementById('third').value = ''
    document.getElementById('fourth').value = ''
    document.getElementById('angkaDigit').innerText = contoh
    let output = []
    let kali = 1
    if(batas === 1){ //batas
        kali = 10
    }else if(batas === 2){
        kali = 100
    }else if(batas === 3){
        kali = 1000
    }
    for(let a = 0; a < 4; a++){
        output.push(Math.floor(Math.random() * kali))
    }

    let result = output.join(' - ')
    document.getElementById('angkaDigit').innerText = result
    jawabanAngkaRandom(parameter1,operator,output,batas)
}
// angkaRandom(1)

//dapat jawaban
function jawabanAngkaRandom(parameter1 = 1,operator = 'addition',input,batas = 1){
    let result = []
    let limit = 9
    let waktu = Number(document.getElementById('batasWaktu').value)
    // let operator = document.getElementById('operasi').value
    // let batas = document.getElementById('batasDigit').value
    // let parameter1 = document.getElementById('nilaiTambahan').value
    if(batas === 1){
        limit = 9
    }else if(batas === 2){
        limit = 99
    }else if(batas === 3){
        limit = 999
    }

    for(let a = 0; a < input.length; a++){
        let jawaban = 0
        if(operator === 'addition'){
            jawaban = input[a] + parameter1
            if(jawaban > limit){
                result.push(0)
            }else{
                result.push(jawaban)
            }
        }else if(operator === 'divide'){
            result.push(Math.abs(input[a] / parameter1))
        }else if(operator === 'multiplying'){
            jawaban = input[a] * parameter1
            if(jawaban > limit){
                result.push(0)
            }else{
                result.push(jawaban)
            }
        }else if(operator === 'subtract'){
            jawaban = input[a] - parameter1
            if(jawaban < 0){
                result.push(0)
            }else{
                result.push(jawaban)
            }
        }else if(operator === 'Modulo'){
            result.push(input[a] % parameter1)
        }
    }


    jawabanAsliFungsi = result
    let jawaban = result.join(' - ')
    let jawabanSoal = ''
    for(let b = 0; b < result.length; b++){
        jawabanSoal += result[b]
    }
    setTimeout(function(){
        document.getElementById('angkaDigit').innerText = jawaban
        let inputArray = []
        inputArray.push(Number(document.getElementById('first').value))
        inputArray.push(Number(document.getElementById('second').value))
        inputArray.push(Number(document.getElementById('third').value))
        inputArray.push(Number(document.getElementById('fourth').value))
        let jawabanAku = ''
        for(let a = 0; a < inputArray.length; a++){
            jawabanAku += inputArray[a]
        }
        // console.log(jawabanAku,'===',jawabanSoal);
        if(flag === false){
            if(jawabanAku === jawabanSoal){
                alert('betul')
            }else{
                alert('salah')
            }
        }else{
            flag = false
        }
    },waktu)

}

//untuk masuk kan jawaban ke dalam array
function inputJawaban(a){
    a.preventDefault()
    let input = []
    input.push(document.getElementById('first').value)
    input.push(document.getElementById('second').value)
    input.push(document.getElementById('third').value)
    input.push(document.getElementById('fourth').value)
    // let pertama = inputJawabanExternal(input)
    // output.push(input)
    cekJawaban(input,jawabanAsliFungsi)
}

function cekJawaban(jawabanInput,jawabanAsli){
    let isiA = jawabanAsli.join('')
    let isiB = jawabanInput.join('')
    flag = true
    // for(let a = 0; a < jawabanInput.length; a++){
    //     isiA += jawabanInput[a]
    // }
    // for(let b = 0; b < jawabanAsli.length; b++){
    //     isiB += jawabanAsli[b]
    // }
    if(isiA === isiB){
        alert('betul')
    }else{
        alert('salah')
    }
}

let count = 0
function clickEvent(first,last){
    let batas = Number(first.getAttribute('maxlength'))
    count++
    console.log(count,batas);
    if(count === batas){
        document.getElementById(last).focus()
        count = 0
    }
}