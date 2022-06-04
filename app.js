let amountInput = document.getElementById("amountInput")
let titleInput = document.getElementById("titleInput")
let totalIncome = document.getElementById("totalIncome")
let totalOutCome = document.getElementById("totalOutCome")
let dashboard = document.querySelector(".dashboard")
let results = document.getElementById("results")
let incomeResults = document.getElementById("incomeResults")
let faces = document.getElementById("faces")
 

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
    let IncomeSpanAmount = document.createElement("input")
    incomeDiv.appendChild(IncomeSpanTitle)
    incomeDiv.appendChild(IncomeSpanAmount)
    IncomeSpanTitle.innerText= titleInput.value + ": "
    IncomeSpanAmount.value = amountInput.value
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

    totalIncome.innerText = parseInt(totalIncome.innerText) + parseInt(IncomeSpanAmount.value) 

    IncomeSpanTrashBox.addEventListener("click", function(){
        incomeDiv.remove()
        totalIncome.innerText = parseInt(totalIncome.innerText) - parseInt(IncomeSpanAmount.value) 
        balance.innerText = totalIncome.innerText - totalOutCome.innerText

        if(balance.innerText<0){
            $(".header").css("background-color","red")
        }
        else if(balance.innerText>=0){
            balance.style.color='white'
            $(".header").css("background-color","rgb(83, 108, 250)")
        }

        if(incomeResults.innerText == ""){
            incomeResults.style.display="none"
        }
        else(
            incomeResults.style.display="block"
        )
    
    })

    document.getElementById("IncomeSpanAmount").disabled = true

    let a = IncomeSpanAmount.value

    editIcon.addEventListener("click", function(){

        document.getElementById("IncomeSpanAmount").disabled = false

        IncomeSpanAmount.addEventListener("change", function(){

            let b = IncomeSpanAmount.value
                
                totalIncome.innerText = parseInt(totalIncome.innerText) - parseInt(a) + parseInt(b)
                balance.innerText = totalIncome.innerText - totalOutCome.innerText

                if(balance.innerText<0){
                    $(".header").css("background-color","red")
                }
                else if(balance.innerText>=0){
                    $(".header").css("background-color","rgb(83, 108, 250)")
                }        
    
        });

    }, {once : true})

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

    
    if(balance.innerText<0){
        $(".header").css("background-color","red")
    }
    else if(balance.innerText>=0){
        $(".header").css("background-color","rgb(83, 108, 250)")
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
    let expenseSpanAmount = document.createElement("input")
    expenseSpanAmount.id="expenseSpanAmount"
    expensesDiv.appendChild(expenseSpanTitle)
    expensesDiv.appendChild(expenseSpanAmount)
    expenseSpanTitle.innerText = titleInput.value + ": "
    expenseSpanAmount.value = amountInput.value
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
    
    let editIcon = document.createElement("span")
    expensesDiv.appendChild(editIcon)
    editIcon.classList.add("editIconExpense")
    editIcon.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'

    document.getElementById("expenseSpanAmount").disabled = true

    let a = expenseSpanAmount.value

    editIcon.addEventListener("click", function(){

        document.getElementById("expenseSpanAmount").disabled = false

        expenseSpanAmount.addEventListener("change", function(){

            let b = expenseSpanAmount.value
                
            totalOutCome.innerText = parseInt(totalOutCome.innerText) - parseInt(a) + parseInt(b)
            balance.innerText = totalIncome.innerText - totalOutCome.innerText

            if(balance.innerText<0){
                $(".header").css("background-color","red")
            }
            else if(balance.innerText>=0){
                $(".header").css("background-color","rgb(83, 108, 250)")
            }        

        });

    }, {once : true})

    totalOutCome.innerText = parseInt(totalOutCome.innerText) + parseInt(expenseSpanAmount.value) 

    ExpenseSpanTrashBox.addEventListener("click", function(){
        expensesDiv.remove()
        totalOutCome.innerText = parseInt(totalOutCome.innerText) - parseInt(expenseSpanAmount.value) 

        balance.innerText = totalIncome.innerText - totalOutCome.innerText

        if(balance.innerText<0){
            $(".header").css("background-color","red")
        }
        else if(balance.innerText>=0){
            balance.style.color='white'
            $(".header").css("background-color","rgb(83, 108, 250)")
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
        $(".header").css("background-color","red")
    }
    else if(balance.innerText>=0){
        $(".header").css("background-color","rgb(83, 108, 250)")
    }


})

let expenseResults = document.getElementById("expenseResults")


