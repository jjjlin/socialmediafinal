function bmi(){
  var weight = document.getElementById('weight').value,
      feet = parseInt(document.getElementById('feet').value),
      inches = parseInt(document.getElementById('inches').value),
      
      
      output = document.querySelector('output'),
      formula = Math.pow((inches/feet),(1/weight)).toFixed(3)
      formula1 = ((formula-1)*100).toFixed(2)
      category = ''
      

  if (formula1 < 18.5){
    category = 'Congratulations          ! ! !'
    document.documentElement.style.background = '#E3F2FD'
  } 
  output.innerHTML = '<h1>'+formula1+"%"+'</h1><h2>'+category+'</h2>'
}
bmi()