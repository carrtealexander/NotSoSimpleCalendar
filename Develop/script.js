

var today = dayjs();
$('#currentDay').text(today.format('dddd,MMMM D YYYY'));



  
  $(".save").on("click", function () {
    //setting items in the local storage
    localStorage.setItem("9", ($("#textarea0").val()))
    localStorage.setItem("10", ($("#textarea2").val()))
    localStorage.setItem("11", ($("#textarea3").val()))
    localStorage.setItem("12", ($("#textarea4").val()))
    localStorage.setItem("13", ($("#textarea5").val()))
    localStorage.setItem("14", ($("#textarea6").val()))
    localStorage.setItem("15", ($("#textarea7").val()))
    localStorage.setItem("16", ($("#textarea8").val()))
    localStorage.setItem("17", ($("#textarea9").val()))
})

