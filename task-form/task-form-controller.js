(function(){
  angular
    .module('app')
    .controller('TaskFormController', function (DataFactory) {
    var vm = this;
    vm.toDos = DataFactory.getData() || [];

    vm.addtoDos = function () {
    if(!vm.newItem){
      return;
    }
      vm.toDos.push(vm.newItem);
      DataFactory.setData(vm.toDos);
      vm.newItem = '';
    };

  });
})();
