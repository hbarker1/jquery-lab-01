$(()=>{
    $(".table").on("click", (event) => {
        console.log($(event.target).attr("id"));
        //$("#form").removeClass("hide");
        //$("#form").addClass("show");
        $('#form').attr('class', 'show');
        
        let tableNumber =  $(event.target).text();
        $("#table-number").text(tableNumber);
        //$(document.getElementById('table-number')).text(tableNumber);


        let clearForm = () => {
            $("#form input").val("");
        }

        $("#save").on("click", () => {
            $(event.target).removeClass("available");
            $(event.target).addClass("reserved");
            //$("#form").removeClass("show");
            //$("#form").addClass("hide");
            $('#form').attr('class', 'hide');
            console.log($("#name").val());
            console.log($("#number").val());
            console.log($("#group").val());
            clearForm();
        });

        $("#exit-button").on("click", () => {
            $("#form").removeClass("show");
            $("#form").addClass("hide");
            clearForm();
        });
    });
    

});