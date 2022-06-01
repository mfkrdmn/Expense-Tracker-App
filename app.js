let amountInput = document.getElementById("amountInput")
let balanceAmount = document.getElementById("balanceAmount")
let titleInput = document.getElementById("titleInput")
let totalIncome = document.getElementById("totalIncome")
let totalOutCome = document.getElementById("totalOutCome")
let dashboard = document.querySelector(".dashboard")
let results = document.getElementById("results")

 

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
    $(".results").append(incomeDiv)
    let IncomeSpanTitle = document.createElement("span")
    let IncomeSpanAmount = document.createElement("span")
    incomeDiv.appendChild(IncomeSpanTitle)
    incomeDiv.appendChild(IncomeSpanAmount)
    IncomeSpanTitle.innerText= titleInput.value + ": "
    IncomeSpanAmount.innerText= amountInput.value
    IncomeSpanTitle.classList.add("IncomeSpanTitle")
    IncomeSpanAmount.style.fontWeight="400"
    IncomeSpanAmount.style.color = "rgb(83, 108, 250)"; 
    
    let IncomeSpanTrashBox = document.createElement("span")
    incomeDiv.appendChild(IncomeSpanTrashBox)
    IncomeSpanTrashBox.classList.add("IncomeSpanTrashBox")
    IncomeSpanTrashBox.innerHTML='<i class="fa-solid fa-trash"></i>'
    IncomeSpanTrashBox.id='IncomeSpanTrashBox'
    
    $("#IncomeSpanTrashBox").click(function(){
    
    
        var listarr = []
        listarr.push(incomeDiv.innerText)
        console.log(listarr)


    })



    totalIncome.innerText = parseInt(totalIncome.innerText) + parseInt(IncomeSpanAmount.innerText) 

    amountInput.value=""
    titleInput.value=""

            $(".Expenses").click(function(){
                
                results.removeChild(incomeDiv)

            
                  $(".Income").click(function(){
                    
                    results.appendChild(incomeDiv)

                  })

            })

            
    balance.innerText = totalIncome.innerText - totalOutCome.innerText

    if(balance.innerText>0){
        balance.style.color='white'
    }
            
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
    $(".results").append(expensesDiv)
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
               
            results.removeChild(expensesDiv)
           
                $(".Expenses").click(function(){
                   
                    results.appendChild(expensesDiv)

                })

        })

    //allDiv.innerText = allDiv.innerText + amountInput.value

    balance.innerText = totalIncome.innerText - totalOutCome.innerText
    
    if(balance.innerText<0){
        balance.style.color='red'
    }

})



//  $(".All").click(function(){

//      $(".All").css("font-weight", "700");
//      $("#expensesTxt").css("font-weight", "400");
//      $("#incomeTxt").css("font-weight", "400");
//      $(".add").css("display","none")

//  })

//  let allDiv = document.createElement("div")
//  allDiv.classList.add("allDiv")


