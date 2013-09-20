
angular.module('wydFilters', []).filter('prependZero', function() {
  return function(number, limit) {
    if(limit == null) {
      limit = 99;
    }
    
    var acc = 10;
    var prepend = "";
    
    while(acc <= limit) {
      prepend += "0";
      acc *= 10;
    }
    
    return prepend + number;
  };
});
