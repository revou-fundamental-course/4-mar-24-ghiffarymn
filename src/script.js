//membuat fungsi bernama calculateBMI yang ketika button dengan event onclcik ditekan akan menghitung BMI yang dimasukkan pada form input
function calculateBMI() {

    //membuat variabel yang digunakan untuk mengambil elemen html dengan id height weight dan result
        var heightInput = document.getElementById("height");
        var weightInput = document.getElementById("weight");
        var resultDiv = document.getElementById("result");
    
    // memastikan inputan berupa angka
        var height = parseFloat(heightInput.value);
      var weight = parseFloat(weightInput.value);
    
    // memastikan inputan tidak kosong 
      if (isNaN(height) || isNaN(weight)) {
        resultDiv.innerHTML = "Please enter a valid height and weight.";
        return;
      }
    
    // menghitung BMI
      var bmi = weight / ((height / 100) ** 2);
      var category = "";
    
    // menentukan kategori BMI berdasarkan hasil perhitungan variable bmi
      if (bmi < 18.5) {
        category = "<span class='text-yellow-500 font-bold'>Underweight</span> <br> You need to gain some weight!";
      } else if (bmi < 25) {
        category = "<span class='text-blue-500 font-bold'>Normal Weight</span> <br> Ideal!";
      } else if (bmi < 30) {
        category = "<span class='text-red-500 font-bold'>Overweight</span> <br> Chill out!";
      } else {
        category = "<span class='text-red-950 font-bold'>Obese</span> <br> You need to lose some weight!";
      }
      
    // menampilkan hasil perhitungan
      resultDiv.innerHTML = "Your BMI is <span class='text-blue-400'>" + bmi.toFixed(2) + "</span> <br> " + category + "";
    
    
    
    }