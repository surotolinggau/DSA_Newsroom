var $dates = $('#from, #to').datepicker();

$('#clear-dates').on('click', function () {
    $dates.datepicker('setDate', null);
});
