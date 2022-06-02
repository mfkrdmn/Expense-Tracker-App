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

    let incomeDiv = document.createElement("p")
    incomeDiv.classList.add("incomeDiv")
    $(".incomeResults").append(incomeDiv)
    $(".incomeResults").css("display","block")
    let IncomeSpanTitle = document.createElement("span")
    let IncomeSpanAmount = document.createElement("span")
    incomeDiv.appendChild(IncomeSpanTitle)
    incomeDiv.appendChild(IncomeSpanAmount)
    IncomeSpanTitle.innerText= titleInput.value + ": "
    IncomeSpanAmount.innerText= amountInput.value
    IncomeSpanTitle.classList.add("IncomeSpanTitle")
    IncomeSpanAmount.style.fontWeight="400"
    IncomeSpanAmount.style.color = "rgb(83, 108, 250)"; 
    IncomeSpanAmount.id='IncomeSpanAmount'
    
    let IncomeSpanTrashBox = document.createElement("span")
    incomeDiv.appendChild(IncomeSpanTrashBox)
    IncomeSpanTrashBox.classList.add("IncomeSpanTrashBox")
    IncomeSpanTrashBox.innerHTML='<i class="fa-solid fa-trash"></i>'
    IncomeSpanTrashBox.id='IncomeSpanTrashBox'

    let editIcon = document.createElement("span")
    incomeDiv.appendChild(editIcon)
    editIcon.classList.add("editIcon")
    editIcon.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'

    totalIncome.innerText = parseInt(totalIncome.innerText) + parseInt(IncomeSpanAmount.innerText) 

    IncomeSpanTrashBox.addEventListener("click", function(){
        incomeDiv.remove()
        totalIncome.innerText = parseInt(totalIncome.innerText) - parseInt(IncomeSpanAmount.innerText) 
        balance.innerText = totalIncome.innerText - totalOutCome.innerText

        if(balance.innerText<0){
            balance.style.color='red'
        }
        else if(balance.innerText>0){
            balance.style.color='white'
        }

        if(incomeResults.innerText == ""){
            incomeResults.style.display="none"
        }
        else(
            incomeResults.style.display="block"
        )
    
    })

    editIcon.addEventListener("click", function(){

        IncomeSpanAmount.setAttribute("contenteditable", true);

             $(document).mouseup(function(){
                 if ($(document).closest("#IncomeSpanAmount").length == 0) {

                    totalIncome.innerText = parseInt(IncomeSpanAmount.innerText)
                     
                 }
             });

        $(".plus").click(function(){ 

                totalIncome.innerText = parseInt(totalIncome.innerText) + parseInt(IncomeSpanAmount.innerText) 

        })

            // IncomeSpanAmount.addEventListener("change", myFunction);

            // function myFunction() {

            //     //totalIncome.innerText = parseInt(totalIncome.innerText) - parseInt(IncomeSpanAmount.innerText) 

            //     IncomeSpanAmount.innerText =  parseInt(totalIncome.innerText) - parseInt(IncomeSpanAmount.innerText)

            // }

    })

    amountInput.value=""
    titleInput.value=""

             $(".Expenses").click(function(){
                
                $(".incomeResults").css("display","none")
            
                   $(".Income").click(function(){
                    
                    $(".expenseResults").css("display","none")
                    $(".incomeResults").css("display","block")

                   })
             })

            
    balance.innerText = totalIncome.innerText - totalOutCome.innerText

    if(balance.innerText>0){
        balance.style.color='white'
    }
            

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

    let expensesDiv = document.createElement("p")
    expensesDiv.classList.add("expensesDiv")
    $(".expenseResults").append(expensesDiv)
    $(".expenseResults").css("display","block")
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

    let ExpenseSpanTrashBox = document.createElement("span")
    expensesDiv.appendChild(ExpenseSpanTrashBox)
    ExpenseSpanTrashBox.classList.add("ExpenseSpanTrashBox")
    ExpenseSpanTrashBox.innerHTML='<i class="fa-solid fa-trash"></i>'
    ExpenseSpanTrashBox.id='ExpenseSpanTrashBox'

    totalOutCome.innerText = parseInt(totalOutCome.innerText) + parseInt(expenseSpanAmount.innerText) 

    ExpenseSpanTrashBox.addEventListener("click", function(){
        expensesDiv.remove()
        totalOutCome.innerText = parseInt(totalOutCome.innerText) - parseInt(expenseSpanAmount.innerText) 

        balance.innerText = totalIncome.innerText - totalOutCome.innerText

        if(balance.innerText<0){
            balance.style.color='red'
        }
        else if(balance.innerText>0 | balance.innerText == 0){
            balance.style.color='white'
        }
        else if(balance.innerText == 0){
            balance.style.color='red'
        }

        if(expenseResults.innerText == ""){
            expenseResults.style.display="none"
        }
        else(
            expenseResults.style.display="block"
        )
    

    })

    amountInput.value=""
    titleInput.value=""

         $(".Income").click(function(){
               
            $(".expenseResults").css("display","none")
           
                 $(".Expenses").click(function(){
                   
                    $(".expenseResults").css("display","block")
                    $(".incomeResults").css("display","none")

                 })

         })


    balance.innerText = totalIncome.innerText - totalOutCome.innerText

    
    if(balance.innerText<0){
        balance.style.color='red'
    }

})



