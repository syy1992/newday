/**
 * Created by hxsd on 2016/9/30.
 */
app.controller("commentCtrl",function($scope,$ionicHistory){
    $scope.re_page=function(){
        $ionicHistory.goBack();
    }

})