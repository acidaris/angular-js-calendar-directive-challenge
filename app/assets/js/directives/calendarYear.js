/**
 * Select box for calendar year.  Changing the value of this should update the year of the calendar.
 */
angular.module('calendar').directive('calendarYear', function () {

  /**
   * @private
   */
  var years = [];

  /**
   * @private
   */
  var currentYear = new Date().getFullYear();

  for (var year = currentYear-20; year <= (currentYear + 20); year++) {
    years.push(year);
  }

  return {
    restrict : 'A',
    compile : function(elem) {

      var options = '';

      angular.forEach(years, function(year) {
        options = options + '<option value="' + year + '">' + year + '</option>';
      });

      elem.append(options);
    }
  };
});