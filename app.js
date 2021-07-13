const priceNormal = "4,59";
const finalPrice = "3,44";

//let finalPrice = priceNormal - priceNormal*0.2;

$(".strike").children().text(priceNormal);


$("#finalPrice").text(finalPrice);

$("#minus").click(function () {
  if (document.getElementById("itemQuantity").innerHTML > 0)
    document.getElementById("itemQuantity").innerHTML--;
});

$("#plus").click(function () {
  document.getElementById("itemQuantity").innerHTML++;
});


$(".button-share").click(function () {
  $(".toHide").toggleClass('fear');
});

$(".cancel").click(function () {
      $(".toHide").toggleClass('fear');
    });

