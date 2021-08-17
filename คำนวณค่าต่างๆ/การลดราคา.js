function คำนวณราคาสินค้า()
{
    var ราคาสินค้า = prompt("กรุณากรอกราคาสินค้า")
    var ลดกี่บาท = prompt("กรุณากรอกว่าลดกี่บาท")
    alert(ลดกี่บาท / ราคาสินค้า * 100 + ("%"))
    document.getElementById("result").innerHTML = ลดกี่บาท / ราคาสินค้า * 100 + ("%")
}