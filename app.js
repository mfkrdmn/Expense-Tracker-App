let amountInput = document.getElementById("amountInput")
let balanceAmount = document.getElementById("balanceAmount")
let titleInput = document.getElementById("titleInput")
let totalIncome = document.getElementById("totalIncome")
let totalOutCome = document.getElementById("totalOutCome")
let dashboard = document.querySelector(".dashboard")
let balance = document.getElementById("balance")

$(".Income").click(function(){
  
    $(".add").css("display","flex")
    $("#incomeTxt").css("font-weight", "700");
    $("#expensesTxt").css("font-weight", "400");
    $(".plus").css("display","inline-block")
    $(".plusexpense").css("display","none")
    $(".All").css("font-weight", "400");
  
})

$(".plus").click(function(){

    let incomeDiv = document.createElement("div")
    incomeDiv.classList.add("incomeDiv")
    $(".dashboard").append(incomeDiv)
    let IncomeSpanTitle = document.createElement("span")
    let IncomeSpanAmount = document.createElement("span")
    incomeDiv.appendChild(IncomeSpanTitle)
    incomeDiv.appendChild(IncomeSpanAmount)
    IncomeSpanTitle.innerText= titleInput.value + ": "
    IncomeSpanAmount.innerText= amountInput.value
    IncomeSpanTitle.style.color = "rgb(83, 108, 250)"; 
    IncomeSpanTitle.style.fontWeight="700"
    IncomeSpanTitle.style.textTransform="capitalize"
    IncomeSpanAmount.style.fontWeight="400"
    IncomeSpanAmount.style.color = "rgb(83, 108, 250)"; 

    totalIncome.innerText = parseInt(totalIncome.innerText) + parseInt(IncomeSpanAmount.innerText) 

    amountInput.value=""
    titleInput.value=""

            $(".Expenses").click(function(){
                
              dashboard.removeChild(incomeDiv)

            
                  $(".Income").click(function(){
                    
                     dashboard.appendChild(incomeDiv)

                  })

            })
            
            
    // allDiv.innerText = IncomeSpanTitle.innerText + IncomeSpanAmount.innerText

})


$(".Expenses").click(function(){
  
    $(".add").css("display","flex")
    $("#expensesTxt").css("font-weight", "700");
    $("#incomeTxt").css("font-weight", "400");
    $(".plus").css("display","none")
    $(".plusexpense").css("display","inline-block")
    $(".All").css("font-weight", "400");

})

$(".plusexpense").click(function(){

    let expensesDiv = document.createElement("div")
    expensesDiv.classList.add("expensesDiv")
    $(".dashboard").append(expensesDiv)
    let expenseSpanTitle = document.createElement("span")
    let expenseSpanAmount = document.createElement("span")
    expensesDiv.appendChild(expenseSpanTitle)
    expensesDiv.appendChild(expenseSpanAmount)
    expenseSpanTitle.innerText = titleInput.value + ": "
    expenseSpanAmount.innerText = amountInput.value
    expenseSpanTitle.style.color="red"
    expenseSpanTitle.style.fontWeight="700"
    expenseSpanTitle.style.textTransform="capitalize"
    expenseSpanAmount.style.fontWeight="400"
    expenseSpanAmount.style.color="red"

    totalOutCome.innerText = parseInt(totalOutCome.innerText) + parseInt(expenseSpanAmount.innerText) 

    amountInput.value=""
    titleInput.value=""

        $(".Income").click(function(){
               
              dashboard.removeChild(expensesDiv)
           
                $(".Expenses").click(function(){
                   
                      dashboard.appendChild(expensesDiv)

                })

        })

    //allDiv.innerText = allDiv.innerText + amountInput.value


})


// $(".All").click(function(){

//     $(".All").css("font-weight", "700");
//     $("#expensesTxt").css("font-weight", "400");
//     $("#incomeTxt").css("font-weight", "400");
//     $(".add").css("display","none")

// })

// let allDiv = document.createElement("div")
// allDiv.classList.add("allDiv")
// //$(".dashboard").append(allDiv)    

