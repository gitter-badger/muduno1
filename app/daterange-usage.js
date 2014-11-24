$(document).ready(function dateRange() {
    $('#reservation').daterangepicker(
        {
            format: 'DD-MM-YY',
            startDate: '01-10-14',
            endDate: '31-12-15'
        }, 
        function callback(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        }
        function 
    );
});