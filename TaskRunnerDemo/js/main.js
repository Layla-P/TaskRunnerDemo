
$(function () {

    $("#sortable").sortable();
    $("#sortable").disableSelection();

    $("#sortable").sortable({
        update: function (event, ui) {
            greedy: true;
            console.log('event fired');
            orderList();
        }
    });

    $("#sortable > li > div").on("drop", function (event, ui) { });

});




function orderList() {

    var ourCollection = [];

    $('#sortable > li > div').each(function (index) {
        //this.id;    

        var ourId = $(this).attr("data-id");

        console.log(ourId);
        var ourNewObject = { "Importance": index, "TaskId": ourId };
        ourCollection.push(ourNewObject);
    })
    var listId = $('section').attr("data-id");
    console.log(listId);

    var ourNewestObject = { Tasks: ourCollection, TaskListId: listId };

    console.log(ourCollection);

    $.ajax({
        type: 'POST',
        data: JSON.stringify(ourNewestObject),
        contentType: "application/json",
        url: '/api/Ordering',
        success: function (data) {
            console.log('it worked')
        },
        error: function (data) {
            console.log('error');
            console.log(data);
        }
    });
};
