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

      $scope.signupModalController = ['$scope', '$modalInstance', function ($scope, $modalInstance) {
          $scope.user = {};

          // Save or create item
          $scope.submit = function (e) {
              $scope.error = null;
              if ($scope.signupForm.$invalid) {
                  return;
              }

              var $form = angular.element(e.target);
              $form.attr('action', $form.attr('data-mailchimp'));
              $form[0].submit();
          };

          $scope.close = function () {
              $modalInstance.dismiss('cancel');
          };

      }];

  });
