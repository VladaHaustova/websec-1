function calculate(){
  let option=document.querySelector("#option");
  let value1=document.querySelector("#input1");
  let value2=document.querySelector("#input2");
  let result=document.querySelector("#result");
  
  switch(option.value){
      case "1":
            result.innerHTML = Number(value1.value) + Number(value2.value);
            break;
        case "2":
            result.innerHTML = Number(value1.value) - Number(value2.value);
            break;
        case "3":
            result.innerHTML = Number(value1.value) * Number(value2.value);
            break;
        case "4":
            if (Number(value2.value) === 0) {
                alert("На 0 делить нельзя");
                break;
            }
            result.innerHTML = Number(value1.value) / Number(value2.value);
            break;
  }
  
}