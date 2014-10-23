describe('calendar year directive tests', function() {
  var element;

  beforeEach(module('calendar'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    element = _$compile_('<select calendar-year></select>')(_$rootScope_);
    _$rootScope_.$digest();
  }));

  it('adds options to select', function() {
    angular.forEach(element[0], function(option) {
      expect(option.tagName).toBe('OPTION');
    });
  });

  it('sets date values', function() {
    // This test will fail in 2015. Years are hard coded here to avoid excessive test logic.
    var select = element[0];
    expect(select.children.length).toEqual(41);
    expect(select.children[0].value).toBe('1994');
    expect(select.children[40].value).toBe('2034');
  });

  it('sets date view text', function() {
    // This test will fail in 2015. Years are hard coded here to avoid excessive test logic.
    var select = element[0];

    expect(select.children[0].text).toBe('1994');
    expect(select.children[40].text).toBe('2034');

  });

});