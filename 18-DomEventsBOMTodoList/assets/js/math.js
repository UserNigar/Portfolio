function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = '';

    
    if (isNaN(num1) && isNaN(num2)) {
        alert("Please enter both numbers");
        return;
      }
    

      if (isNaN(num1)) {
        alert("Enter the first number");
        return;
      }
    
      if (isNaN(num2)) {
        alert("Enter the second number");
        return;
      }

    else {
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
          break;

          case 'percent':
            result = num1*num2/100
            
            break;
        default:
          result = 'Unknown operation';
      }
    }
  
    document.getElementById('result').value = result;
  }
  