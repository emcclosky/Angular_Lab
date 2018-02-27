(function(){
  angular
    .module('app')
    .controller('FormController', FormController)

  function FormController () {
    var vm = this;
    vm.items = [];

    vm.addItem = function () {
      vm.items.push(vm.newItem);
      vm.newItem = '';
    }

    vm.remove = function(item){
      var itemIdex = vm.items.indexOf(item);
      vm.items.splice(itemIdex, 1);
    }
  }
})();
