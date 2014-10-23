/**
 * Calendar directive.  Provides the main layout of the calendar month.
 */
angular.module('calendar', []).directive('calendar',function(){
  return{
    restrict:'A',
    templateUrl:'./assets/partials/calendar.html',
    controller: function($scope){

//      TODO: add moment to more easily change dates.
      var init = function()
      {
        $scope.range = CalendarRange.getMonthlyRange(new Date());
        console.log($scope.range);
      };

      init();

      this.setMonth = function(){

      };

      this.setYear = function() {

      }
    }
  }
});
