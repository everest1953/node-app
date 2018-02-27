$(document).ready(function() {
  $("#housemodal").on("show.bs.modal", function(event) {
    // id of the modal with event
    var button = $(event.relatedTarget); // Button that triggered the modal
    var houseId = button.data("id"); // Extract info from data-* attributes
    var address = button.data("address");
    var desciption = button.data("description");
    var image = button.data("image");


    var title = '/img/sm_houses/'+image
    var body = desciption;
    // var content = "Are you sure want to delete " + productname + "?";

    // Update the modal's content.
    var modal = $(this);
    modal.find(".modal-header > img").attr('src', image);
    modal.find(".modal-body").text(body);
    // modal.find(".modal-body").text(content);

    // And if you wish to pass the productid to modal's 'Yes' button for further processing
    // modal.find("button.btn-danger").val(id);
  });
});

// function callAlert(){
//    fetch("http://localhost:3000/suburb/Palmerston%20North")
//      .then(function(response) {
//        response.json().then(function(data) {
//          console.log(data);
//        });
//      })
//      .catch(function(err) {
//        console.log(err);
//      });

// }

// function callAlert2(){
//   var base_url = window.location.origin;
//   alert(base_url);
// }