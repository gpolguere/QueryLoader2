$(document).ready(function () {
    $("body").queryLoader2({
        percentage: true,
        percentageItem: $("#loader_percent"),
        completeAnimation: "none",
        minimumTime: 100
    });
});