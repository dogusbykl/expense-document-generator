function executeWidgetCode() {

    var ExpenseApp = {

        init: function () {

            console.log("Expense Document Generator started.");

            widget.body.innerHTML =
                '<div class="expense-app">' +
                    '<h2>Expense Document Generator</h2>' +
                    '<p class="subtitle">Manage your expense documents.</p>' +
                    '<button id="addExpenseBtn">Add Expense</button>' +
                '</div>';

            document
                .getElementById("addExpenseBtn")
                .addEventListener("click", function () {
                    alert("Add Expense clicked");
                });
        }
    };

    widget.addEvent("onLoad", ExpenseApp.init);
}
