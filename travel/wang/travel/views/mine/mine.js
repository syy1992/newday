/**
 * Created by hxsd on 2016/9/29.
 */
app.controller("mineCtrl",function($scope,$ionicPopup){
    $scope.showPopup = function () {
        $scope.data = {};

        // 一个精心制作的自定义弹出窗口
        var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="$scope.data.name" placeholder="请输入账号名"><br/><input type="password" ng-model="$scope.data.password" placeholder="请输入密码">',
            title: '请输入账号密码',

            scope: $scope,
            buttons: [
                {text: '取消'},
                {
                    text: '<b>登录</b>',
                    type: 'button-balanced',
                    onTap: function (e) {
                        if (!$scope.data.name || !$scope.data.password) {
                            // 不允许用户关闭，除非输入wifi密码
                            e.preventDefault();
                        } else {
                            return $scope.data.name;
                        }
                    }
                }
            ]
        });


    };




})