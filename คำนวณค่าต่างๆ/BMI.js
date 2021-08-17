function รับและคำนวณน้ำหนัก()
{
    let x = prompt("กรุณากรอกน้ำหนัก(กก.)")
    let xx = prompt("กรุณากรอกส่วนสูง(ซม.)")
    let xxx = xx / 100
    let y = x / (xxx * xxx)
    document.getElementById("result10").innerHTML = y
    function คำนวณน้ำหนัก()
{
    if(y <= 18.5) {
        document.getElementById("result").innerHTML = ("น้ำหนักต่ำกว่ามาตรฐาน")
    }else if(y  <= 22.9){
        document.getElementById("result").innerHTML = ("น้ำหนักสมส่วน")
    }else if(y <= 24.9){
        document.getElementById("result").innerHTML = ("น้ำหนักเกิน")
    }else if(y <= 29.9){
        document.getElementById("result").innerHTML = ("โรคอ้วน")
    }else {
        document.getElementById("result").innerHTML = ("โรคอ้วนอันตราย")
    }
}
}