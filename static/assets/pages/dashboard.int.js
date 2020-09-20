
/*
 Template Name: Zinzer - Responsive Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Dashboard js
 */

!function ($) {
    "use strict";

    var Dashboard = function () {
    };

    //creates line chart
    Dashboard.prototype.createLineChart = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          hideHover: 'auto',
          gridLineColor: '#eef0f2',
          resize: true, //defaulted to true
          lineColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true,
            colors: colors
        });
    },




    Dashboard.prototype.init = function () {

        //create line chart
        var $data  = [
            { y: '08/09', a: 45 },
            { y: '09/09', a: 75},
            { y: '10/09', a: 50 },
            { y: '11/09', a: 95 },
            { y: '13/09', a: 50},
            { y: '14/09', a: 65},
            { y: '15/09', a: 80 }
          ];
        this.createLineChart('morris-line-example', $data, 'y', 'a', 'Заказов', '#5985ee');

        //creating donut chart
        var $donutData = [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ];
        this.createDonutChart('morris-donut-example', $donutData, ['#4bbbce', '#5985ee', '#46cd93']);

    },

        //init
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing
    function ($) {

        "use strict";
        setTimeout(() => {  $.Dashboard.init();}, 2000);
       
    }(window.jQuery);