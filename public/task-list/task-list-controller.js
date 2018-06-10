(function(){
  angular.module('app')
    .controller('TaskListController', function(APIFactory){
      var vm = this;

      vm.toggleComplete = function (item){
        APIFactory.patch(item.id, {task: { completed: item.completed }}).then(function(result){
          Object.assign(item, result.data);
        }).catch(function(err){
          console.log(err);
        })
      }

      vm.remove = function(id){
        APIFactory.deleteTodo(id).then(function() {
          vm.getList();
        }).catch(function(err){
            console.log(err);
        });

      };

    })
})();
