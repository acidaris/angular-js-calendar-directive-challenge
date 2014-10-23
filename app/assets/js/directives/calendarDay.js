/**
 * Day on the calendar.  Should display a day in the calendar and attach classes appropriate with that day.
 */
angular.module('calendar').directive('calendarDay', function () {
   return {
     restrict: 'A',
     require:'?^calendar',
     templateUrl: './assets/partials/calendar-day.html',
     link: function(scope,element,attrs,calendarController){
        scope.inMonth = function(day)
        {
          var range = calendarController.getRange();

          var start = moment(range.start);
          var end = moment(range.end);
          var date = moment(day.date);

          if(date.isBefore(start,'day'))
          {
            return false;
          }
          if(date.isAfter(end,'day'))
          {
            return false;
          }
          return true;
        };
     }
   };
});
