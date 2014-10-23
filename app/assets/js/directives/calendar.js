/**
 * Calendar directive.  Provides the main layout of the calendar month.
 */
angular.module('calendar', []).directive('calendar', function() {
  return{
    restrict : 'A',
    templateUrl : './assets/partials/calendar.html',
    controller : function($scope) {

      var date;
      var init = function() {
        date = moment().startOf('month');
        $scope.calendar = {};
        $scope.calendar.month = date.month() + 1;
        $scope.calendar.year = date.year();

        $scope.range = CalendarRange.getMonthlyRange(date.toDate());
      };

      init();

      $scope.$watch('calendar.month', function(value) {
        if (date) {
          date.set('month', value - 1);
          $scope.range = CalendarRange.getMonthlyRange(date.toDate());
        }
      });

      $scope.$watch('calendar.year', function(value) {
        if (date) {
          date.set('year', value);
          $scope.range = CalendarRange.getMonthlyRange(date.toDate());
        }
      });

    }
  }
});
