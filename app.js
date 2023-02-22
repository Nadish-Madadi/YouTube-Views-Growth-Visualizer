module.exports = {
  sayHello: function(){
    return 'hello';
  },
  addNumbers: function(value1, value2){
    return value1+value2;
  },

  generate: function(){
    var totalViewsArray = [1];

    for (var i = 1; i < 5; i++){
      var videosCount = i+1;
      var totalViews = totalViewsArray[i-1] + (videosCount * 10);

      totalViewsArray.push(totalViews);
      
    }
    return totalViewsArray;
  }
  
}