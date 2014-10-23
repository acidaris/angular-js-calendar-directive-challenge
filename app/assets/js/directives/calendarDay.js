/**
 * Day on the calendar.  Should display a day in the calendar and attach classes appropriate with that day.
 */
angular.module('calendar').directive('calendarDay', function () {
   return {
     restrict: 'A',
     require:'?^calendar',
     templateUrl: './assets/partials/calendar-day.html'

   }
});
