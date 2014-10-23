describe('calendar month directive tests', function() {
  var element;

  beforeEach(module('calendar'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    element = _$compile_('<select calendar-month></select>')(_$rootScope_);
    _$rootScope_.$digest();
  }));

  it('adds options to select', function() {
    angular.forEach(element[0], function(option) {
      expect(option.tagName).toBe('OPTION');
    });
  });

  it('sets value', function() {
    expect(element[0].children[0].value).toBe('1');
  });

  it('sets view text', function() {
    expect(element[0].children[0].text).toBe('January');
  });
});