/**
 * Select box for calendar month.  Changing the value of this should update the month of the calendar.
 */
angular.module('calendar').directive('calendarMonth', function () {
  return {
    restrict: 'A',
    require: '?^calendar',
    templateUrl: './assets/partials/calendar-month.html'

  }
});