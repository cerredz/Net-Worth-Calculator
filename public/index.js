var headings  = [
    "Real Estate", "Savings Account", "Retirement Accounts", "Cars", 
    "Investments", "Other", "Mortgages", "Bank Debt", "Personal Loans", 
    "Student Loans", "Auto Loans", "Other Debts"
 ];


    var subHeadings = [
        "How much money do you can invested into real-estate?", 
        "How much money is in your savings account?",
        "How much money is in all of your retirement accounts?",
        "How much money is your car / cars worth?",
        "How much money do you have invested in the stock market / crypto?",
        "Do you have any other investments worth value? (Watches, clothes, etc)?",
        "How much do you owe on your mortgage / mortgages?",
        "How much debt do you owe on your bank account / accounts?",
        "How much money do you owe on your personal loans?",
        "How much money do you owe on your student loans?",
        "How much money do you owe on your auto loans?",
        "How much money do you owe on any other types of debts?"
    ];

    var index = 0;
    var totalNetWorth = 0;

    document.querySelector(".non-final-button").onclick = function() {
        document.querySelector(".heading").innerHTML = headings[index];
        if(index <= 6 ){
            totalNetWorth += Number(document.querySelector("input").value);
            document.querySelector(".sub-heading").innerHTML = subHeadings[index];
            document.querySelector("input").value = "";
        }else if (index > 6 && index < 12 ){
            totalNetWorth -= Number(document.querySelector("input").value);
            document.querySelector(".sub-heading").innerHTML = subHeadings[index];
            document.querySelector("input").value = "";
        }else if (index == 12){
            document.querySelector(".heading").innerHTML = "Your Total Net Worth is " + "$" + totalNetWorth + ".";
            document.querySelector(".sub-heading").remove();
            document.querySelector("input").remove();
            document.querySelector("button").innerHTML = "Calculate Net Worth Again"
        }else {
            document.location.reload();
        }


        index++;
        console.log(totalNetWorth);
    }

  




