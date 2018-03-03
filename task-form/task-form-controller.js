(function(){
  angular
    .module('app')
    .controller('TaskFormController', TaskFormController)

  function TaskFormController () {
    var vm = this;
    vm.toDos = [];

    vm.addtoDos = function () {
    if(!vm.newItem){
      return;
    }
      vm.toDos.push(vm.newItem);
      vm.newItem = '';
    };

  }
})();
