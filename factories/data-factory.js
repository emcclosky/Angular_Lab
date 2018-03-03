(function(){
  angular.module('app')
    .factory('DataFactory', function(){
      var data;
      return{
        setData: setData,
        getData: getData
        //can also just do setData by itself with getData by itself because they have the same.
        //so: setData,
        //    getData
      };

      function setData(newData){
        data = newData;
      }

      function getData(){
        return data;
      }

    });
})();
