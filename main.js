$(()=>{
    $(".table").on("click", (event) => {
        console.log($(event.target).attr("id"));
        $("#form").removeClass("hide");
        $("#form").addClass("show");
        




        let tableNumber = (event.target.firstChild.data);
        $("#table-number").text(tableNumber);



        let tableNumberId = `#table-${tableNumber}`;

        $("#save").on("click", () => {
            $(tableNumberId).removeClass("available");
            $(tableNumberId).addClass("reserved");
            $(tableNumberId).prop("disabled", true);
            $(`#form`).removeClass("show");
            $(`#form`).addClass("hide");
            console.log($("#name").val(""));
            console.log($("#number").val(""));
            console.log($("#group").val(""));
        });

        $("#exit-button").on("click", () => {
            tableNumberId = null;
            $("#form").removeClass("show");
            $("#form").addClass("hide");
            $("#name").val("");
            $("#number").val("");
            $("#group").val("");
        });
    });
    

});