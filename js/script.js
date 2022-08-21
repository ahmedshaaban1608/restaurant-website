function calculatebill() {
    var billAmount = document.getElementById("billAmount").value,
        tip = document.getElementById("tip").value,
        people = document.getElementById("people").value;

        if(billAmount <= 0 || billAmount === "" || tip == 0) {
            window.alert("you must add valid values");
            return;
        }
        if(people < 1 || people === "") {
            people = 1;
            document.getElementById("each").style.display = "none";
document.getElementById("people").innerHTML.value = 1;
    
        } else {
            document.getElementById("each").style.display = "block";
        }
       
    var one = (billAmount * tip) / people;
    var subtotal = billAmount / people;
    var total = one + subtotal;
    total = total.toFixed(2);

    document.getElementById("totalBill").style.display = "block";
    document.getElementById("bill").innerHTML = total;
}


document.getElementById("totalBill").style.display = "none";
document.getElementById("calculate").onclick = function () {calculatebill();};

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("bookdate")[0].setAttribute('min', today);