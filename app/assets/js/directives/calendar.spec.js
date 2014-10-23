describe('calendar directive tests',function(){
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


  it('contains number of days matching day count', function() {
    expect(element.find('div#calendar-body div.day').length).toEqual(elementScope.range.days.length);
  });

  it('contains select field for month', function() {
    expect(element.find('div#control select').eq(0).attr('ng-model')).toEqual('calendar.month');
  });

  it('contains select field for year', function() {
    expect(element.find('div#control select').eq(1).attr('ng-model')).toEqual('calendar.year');
  });

  describe('dayStyle() function', function() {
    it('25% for 4 weeks', function() {
      $scope.calendar.month ='2';
      $scope.calendar.year ='2009';
      $scope.$digest();

      expect($scope.range.days.length).toEqual(28);
      expect($scope.dayStyle()).toEqual({height:'25%'});

    });
    it('20% for 5 weeks', function() {
      $scope.calendar.month = '10';
      $scope.calendar.year = '2014';
      $scope.$digest();

      expect($scope.range.days.length).toEqual(35);
      expect($scope.dayStyle()).toEqual({height : '20%'});

    });

    it('16% for 6 weeks', function() {
      $scope.calendar.month = '5';
      $scope.calendar.year = '2010';
      $scope.$digest();

      expect($scope.range.days.length).toEqual(42);
      expect($scope.dayStyle()).toEqual({height : '16%'});

    });
  });
});