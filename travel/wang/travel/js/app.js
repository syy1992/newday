/**
 * Created by hxsd on 2016/9/28.
 */
var app=angular.module("myapp",["ionic"]);
    app.config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state("tabs", {
            url: "/tabs",
                abstract:true,
                templateUrl: "views/tabs/tabs.html"
        })
        $stateProvider.state("tabs.home",{
            url:"/home",
            views:{"home":{'templateUrl':'views/home/home.html',
                controller:'homeCtrl'}}


        })
        $stateProvider.state("tabs.together",{
            url:"/together",
            views:{"together": {'templateUrl':'views/together/together.html',
                controller:'togetherCtrl'}}
        })
        $stateProvider.state("tabs.reservation",{
            url:"/reservation",
            views:{"reservation": {'templateUrl':'views/reservation/reservation.html',
                controller:'reservationCtrl'
            }}

        })
        $stateProvider.state("tabs.free",{
            url:"/free",
            views:{"free": {'templateUrl':'views/free/free.html',
                controller:'freeCtrl'}}

        })
        $stateProvider.state("tabs.mine",{
            url:"/mine",
            views:{"mine": {'templateUrl':'views/mine/mine.html',
                controller:'mineCtrl'}}

        })
        $stateProvider.state("tabs.comment",{
            url:"/comment",
            views:{"together": {'templateUrl':'views/comment/comment.html',
                controller:'commentCtrl'}}
        })
        $stateProvider.state("tabs.comment2",{
            url:"/comment2",
            views:{"free": {'templateUrl':'views/comment2/comment2.html',
                controller:'comment2Ctrl'}}
        })
        $stateProvider.state("input",{
            url:"/input",
            templateUrl:"views/input/input.html",
            controller:'inputCtrl'

        })
        $stateProvider.state("gear",{
            url:"/gear",
            templateUrl:"views/gear/gear.html",

        })
        $stateProvider.state("detail",{
            url:"/detail",
            templateUrl:"views/detail/detail.html",

        })
        $urlRouterProvider.when("","/detail")




    })


