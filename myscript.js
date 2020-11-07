var balance = 0;
var income = 0;
var expense = 0;
var investments = 0;
let name = document.getElementById("name");
let table = document.getElementById("myTable");
let button = document.getElementById("button");
let sel = document.getElementById("type");
let amount = document.getElementById("input");
    let type = document.getElementById("type");
let addTransaction = (amount,type) =>{
    if(type == 'income')
    {
        income = income+parseInt(amount);
        balance +=parseInt(amount);
        
        let row = table.insertRow(1);
        row.className = "income";
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
       cell1.innerHTML = type;
       cell2.innerHTML = name.value;
       let m = new Date();
let dateString = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate();
       cell3.innerHTML = dateString;
       cell4.innerHTML  = amount;
       let bal = document.getElementById("bal");
       bal.innerHTML = balance;
       displayChart(income,expense,investments);
    }
    else if(type == 'investment'){
        investments += parseInt(amount);
        balance -=parseInt(amount);
        let row = table.insertRow(1);
        row.className = "investment";
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
       cell1.innerHTML = type;
       cell2.innerHTML = name.value;
       let m = new Date();
let dateString = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate();
       cell3.innerHTML = dateString;
       cell4.innerHTML  = amount;
       bal.innerHTML = balance;
       displayChart(income,expense,investments);
        //alert(`${amount} has been debited from your account and your total is ${income}`);
    }
    else{
        expense += parseInt(amount);
        balance -=parseInt(amount);
        let row = table.insertRow(1);
        row.className = "expense";
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
       cell1.innerHTML = type;
       cell2.innerHTML = name.value;
       let m = new Date();
let dateString = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate();
       cell3.innerHTML = dateString;
       cell4.innerHTML  = amount;
       bal.innerHTML = balance;
       displayChart(income,expense,investments);
        //alert(`${amount} has been debited from your account and your total is ${income}`);
    }
}

button.onclick = function(){
    if(type.value=="" || amount.value ==""|| name.value == "")
    {
        alert("Enter All the Values");
        return false;
    }
    addTransaction(amount.value,type.value);
    amount.value='';
    name.value='';
    sel.selectedIndex = 0;
    button.style.display = "none";
};

sel.onchange = function(){

if(sel.value == "income")
{
   name.placeholder = "where did you earn this";
   button.style.backgroundColor = "#4CAF50";
   button.style.display = "inline";
}
else if(sel.value == "investment"){
    name.placeholder = "where did you spand this";
    button.style.backgroundColor = "gold";
    button.style.display = "inline";
}
else{
    name.placeholder = "where did you spand this";
    button.style.backgroundColor = "red";
    button.style.display = "inline";
}
}
function    displayChart(savings = 0, expenses = 0, investments = 0) {
    let ctx = document.querySelector("#expense-chart");
    let expenseChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Savings', 'Expenses', 'Investments'],
            datasets: [{
                data: [savings, expenses, investments],
                backgroundColor: [
                    'rgba(32, 137, 56, 1)',
                    'rgba(255, 84, 98, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 0.5
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        }
    });
};
function demoFromHTML() {
    var sTable = document.getElementById('items').innerHTML;

        var style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";

        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.
    }
