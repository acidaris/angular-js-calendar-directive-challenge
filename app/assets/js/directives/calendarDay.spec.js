describe('calendar day directive tests', function() {
  var element;
  var $scope;
  var elementScope;

  beforeEach(module('calendar'));
  beforeEach(module('./assets/partials/calendar.html'));
  beforeEach(module('./assets/partials/calendar-day.html'));

  beforeEach(inject(function(_$rootScope_, $compile) {
    $scope = _$rootScope_.$new();

    element = $compile('<div calendar></div>')($scope);
    $scope.$digest();

    elementScope = element.scope();

  }));

  it('correct days marked as past/future', function() {
    $scope.calendar.month = '3';
    $scope.calendar.year = '2010';
    $scope.$digest();

    var days = element.find('div.day');
    expect(days.eq(0).find('div').attr('class')).toEqual('ng-binding notInMonth');
    expect(days.eq(1).find('div').attr('class')).toEqual('ng-binding weekday');

    expect(days.eq(33).find('div').attr('class')).toEqual('ng-binding weekday notInMonth');
    expect(days.eq(32).find('div').attr('class')).toEqual('ng-binding weekday notInMonth');
    expect(days.eq(31).find('div').attr('class')).toEqual('ng-binding weekday');

  });
});