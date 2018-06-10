(function(){
  angular
    .module('app')
    .controller('TaskFormController', function (APIFactory, DataFactory) {
      var vm = this;
      // vm.toDos = DataFactory.getData() || [];
      
      vm.getList = function () {
        APIFactory.getDataFromApi().then(function(result){
          vm.toDos = result.data;
      });
    }
    vm.getList();

    vm.addtoDos = function () {
      if(!vm.newItem){
        return;
      }
      APIFactory.post({task: vm.newItem}).then(function(result) {
        
        vm.toDos.push(result.data);
        DataFactory.setData(vm.toDos);
        vm.newItem = '';        
      
      }).catch(function(err){
        console.log(err);
      })

      };

  });
})();
