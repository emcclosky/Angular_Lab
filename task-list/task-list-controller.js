(function(){
  angular.module('app')
    .controller('TaskListController', function(){
      var vm = this;

      vm.remove = function(index){
        // var itemIdex = vm.items.indexOf(index);
        vm.toDos.splice(index, 1);
      }

});
})();
