/**
 * Select box for calendar year.  Changing the value of this should update the year of the calendar.
 */
angular.module('calendar').directive('calendarYear', function () {
  return {
    restrict: 'A',
    require: '?^calendar',
    templateUrl: './assets/partials/calendar-year.html'
  }
});