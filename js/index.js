$(function () {

    $('#txtFromDate').datepicker({
        startDate: '-0m',
        format: "yyyy-mm-dd",
        autoclose: true
    });

    $('#txtToDate').datepicker({
        startDate: '-0m',
        format: "yyyy-mm-dd",
        autoclose: true
    });

    $('#txtCycle').on('change', function () {
        if ($(this).val() > max)
            $(this).val(max);
        else if ($(this).val() <= 0)
            $(this).val(max);

        Cycle = $(this).val();
    });

    $('#txtFromDate').on('change', function () {
        FromDate = $(this).val();
        setMax();

        $('#txtToDate').datepicker('remove').datepicker({
            startDate: FromDate,
            format: "yyyy-mm-dd",
            autoclose: true
        });
    });

    $('#txtToDate').on('change', function () {
        ToDate = $(this).val();
        setMax();
    });
});


function setMax() {
    var From = $('#txtFromDate').val();
    var To = $('#txtToDate').val();

    if (From !== '' && To !== '') {
        max = moment(To).diff(moment(From), 'days') + 1;
        $('#txtCycle').attr('max', max);
        $('#txtCycle').val(max);
    }
}

var FromDate;
var ToDate;
var max;
