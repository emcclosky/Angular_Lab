(function(){
  angular
    .module('app')
    .controller('FormController', FormController)

  function FormController () {
    var vm = this;
    vm.items = [];

    vm.addItem = function () {
    if(!vm.newItem){
      return;
    }
      vm.items.push(vm.newItem);
      vm.newItem = '';
    }

    vm.remove = function(index){
      // var itemIdex = vm.items.indexOf(index);
      vm.items.splice(index, 1);
    }
  }
})();
