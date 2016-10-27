/**
 * Created by wjr on 2016/10/3.
 */
app.controller("inputCtrl",function($scope,$ionicPopup){
    $scope.showAlert = function () {
        $ionicPopup.alert({
            title: '您的计划已提交',
            template: '感谢您的信任，稍后我们会联系您；',
            buttons: [{text:"关闭"}]
        }).then(function (res) {

        });
    };

})