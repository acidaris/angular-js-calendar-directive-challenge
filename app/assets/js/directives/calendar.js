/**
 * Calendar directive.  Provides the main layout of the calendar month.
 */
angular.module('calendar', []).directive('calendar', function() {
  return{
    restrict : 'A',
    templateUrl : './assets/partials/calendar.html',
    controller : function($scope) {

      /**
       * Date used to calculate month currently being dispayed.
       */
      var date;

      /**
       * Initialization of controller.
       */
      var init = function() {
        date = moment().startOf('month');
        $scope.calendar = {};
        $scope.calendar.month = date.month() + 1;
        $scope.calendar.year = date.year();

        $scope.range = CalendarRange.getMonthlyRange(date.toDate());
      };

      init();

      /**
       * Watch calendar month and update calendar
       */
      $scope.$watch('calendar.month', function(value) {
        if (date) {
          date.set('month', value - 1);
          $scope.range = CalendarRange.getMonthlyRange(date.toDate());
        }
      });

      /**
       * Watch calendar year and update calendar
       */
      $scope.$watch('calendar.year', function(value) {
        if (date) {
          date.set('year', value);
          $scope.range = CalendarRange.getMonthlyRange(date.toDate());
        }
      });

      /**
       * Provides height styles for days depending on the number of weeks in the month
       * being displayed.
       * @returns {{height: string}}
       */
      $scope.dayStyle = function() {
        var weeks = $scope.range.days.length / 7;
        return {height : Math.floor(100/weeks)+'%'};
      };

      this.getRange = function()
      {
        return $scope.range;
      };
    }
  };
});
