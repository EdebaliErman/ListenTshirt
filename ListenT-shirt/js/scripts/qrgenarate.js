var qrcode = new QRCode("qrcode", {
    width: 120,
    height: 120,
   
    });
$("#qr-btn").click(function(){
let text =$("#qr-input").val();

qrcode.clear(); 
qrcode.makeCode(text);
});