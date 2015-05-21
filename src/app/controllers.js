'use strict';

// Main/root controller
angular.module('securityhq')
  .controller('AppController', function ($scope, $modal) {

      // Signup
      $scope.signup = function () {
          $modal.open({
              templateUrl: 'signup_modal',
              controller: $scope.signupModalController,
              windowClass: 'auth-modal',
              size: 'sm'
          });
      };

      $scope.signupModalController = ['$scope', '$modalInstance', function ($scope, $http, $modalInstance) {
          $scope.user = {};

          // Save or create item
          $scope.submit = function () {
              $scope.error = null;
              if ($scope.signupForm.$invalid) {
                  return;
              }

              // For is valid - POST login data to an API
              $http.post('/api/login', $scope.user).success(function (response) {
                  // Do something on success
              });

          };

          $scope.close = function () {
              $modalInstance.dismiss('cancel');
          };

      }];

  });
