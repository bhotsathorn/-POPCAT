function แปลงนิ้วเป็นเซน()
{
    let x = prompt("กรุณากรอกนิ้ว")
    let xxx = x * 2.54
    document.getElementById("result").innerHTML = xxx + ("ซม.")
}