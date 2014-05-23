


function swapTwoArrayItems (array,index1,index2) {
    var item = array[index1];
    array[index1] = array[index2];
    array[index2] = item;
    return array;
}


function findIndex (array,elem) {
    for (index in array) {
        var item = array[index];
        if (angular.equals(item,elem)) {
          return array.indexOf(item);
        }
    }
    return -1;
}

angular.module('ncf', ['ui.bootstrap','ui.bootstrap.tpls','mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.affix'])
.controller('generic', function ($scope) { 
    
  $scope.capitaliseFirstLetter = function (string) {
    if (string.length === 0) {
        return string;
    } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
  $scope.toTechUI = function (technique) {
    var args = technique.method_calls.map( function (method_call, i2) {
      method_call.args = method_call.args.map( function (v, i) {
        return {"value" : v};
      });
      return method_call;
    });
    technique.method_calls = args;
    return technique;
  }
  
  
  $scope.isSelected = function(technique) {
    return angular.equals($scope.original,technique);
  }
  $scope.isSelectedMethod = function(method) {
    return angular.equals($scope.originalMethod,method);
  }
  
  $scope.getTechniques = function () {
    var techniques = []
    for (var techKey in techs) {
      var technique = $scope.toTechUI(techs[techKey]);
      techniques.push(technique);
    }
    return techniques;
  }

  $scope.orderGenericMethods = function () {
    var groupedMethods = {};
    for (var methodKey in methods) {
      var method = methods[methodKey];
      var name = methodKey.split('_')[0];
      var grouped = groupedMethods[name];
      if (grouped === undefined) {
          groupedMethods[name] = [method];
      } else {
        groupedMethods[name].push(method);
      }
    };
    return groupedMethods;      
  }
$scope.generic_methods = methods;
$scope.myMethods = $scope.orderGenericMethods();
$scope.techniques = $scope.getTechniques();
$scope.selected=undefined;
$scope.original=undefined;
$scope.selectedMethod=undefined;
$scope.originalMethod=undefined;
$scope.selectedMethodIndex=undefined;
$scope.addNew=false;

  $scope.selectTechnique = function(technique) {
        $scope.addNew=false;
        $scope.selectedMethod = undefined;
        $scope.originalMethod = undefined;
    if(angular.equals($scope.original,technique) ) {
        $scope.selected = undefined;
        $scope.original = undefined;
    } else {
    $scope.selected=angular.copy(technique);
    $scope.original=angular.copy($scope.selected);
    }
    //$scope.original=undefined;
  };
$scope.selectMethod = function(method_call, index) {
    if(angular.equals($scope.originalMethod,method_call) ) {
         $scope.selectedMethod = undefined;
         $scope.originalMethod = undefined;
    } else {
    $scope.addNew=false;
    $scope.selectedMethodIndex = index;
    $scope.selectedMethod=angular.copy(method_call);
    $scope.originalMethod=angular.copy($scope.selectedMethod);
    }
    //$scope.original=undefined;
  };
    
  $scope.openMethods = function() {
      
        $scope.addNew=true;
         $scope.selectedMethod = undefined;
         $scope.originalMethod = undefined;
      
  }
  $scope.addMethod = function(bundle) {
    
    var call = { "method_name" : bundle.bundle_name
      , "class_context" : "any"
      , "args": bundle.bundle_args.map(function(v,i) {
        return {"value" :  "" };
      })
    }

    $scope.selected.method_calls.push(call);
  };
    
  $scope.isUnchanged = function(technique) {
    return angular.equals(technique, $scope.original);
  };
    
  $scope.isUnchangedMethod = function(methodCall) {
    return angular.equals(methodCall, $scope.originalMethod);
  };

    
  $scope.resetTechnique = function() {
    $scope.selected=angular.copy($scope.original);
  };
    
    
  $scope.resetMethod = function() {
    $scope.selectedMethod=angular.copy($scope.originalMethod);
  };

  $scope.newTechnique = function() {
    var newTech = {
        "method_calls" : [],
        "name": "",
        "description": "",
        "version": "1.0",
        "bundle_name": undefined,
        "bundle_args": []
    };
    $scope.selectTechnique(newTech);
  };
    

  $scope.getMethodName = function(method_call) {
      if (method_call === undefined) {
      } else {
          if (method_call.method_name in $scope.generic_methods )
            return $scope.generic_methods[method_call.method_name].name
          else 
            return method_call.method_name
      }
  };
  $scope.getMethodDescription = function(method_call) {
          if (method_call.method_name in $scope.generic_methods )
      return $scope.generic_methods[method_call.method_name].description;
      else 
          return "";
  };
  $scope.getArgName = function(index,method_call) {
          if (method_call.method_name in $scope.generic_methods )
      return $scope.generic_methods[method_call.method_name].parameter[index].description;
      else {
          return "arg"
      }
  };

  $scope.removeMethod= function(index) {
      $scope.selected.method_calls.splice(index, 1);
  }
  
  $scope.move = function(from,to) {
      $scope.selected.method_calls = swapTwoArrayItems($scope.selected.method_calls,from,to);
      
      if (from === $scope.selectedMethodIndex) {
          $scope.selectedMethodIndex = to;
      } else {
        if (to === $scope.selectedMethodIndex) {
          $scope.selectedMethodIndex = from;
        }
      }
  }
  $scope.moveUp = function(index) {
      $scope.move(index,index+1);
  }
  $scope.moveDown = function(index) {
      $scope.move(index,index-1);
  }
  $scope.removeMethod= function(index) {
      $scope.selected.method_calls.splice(index, 1);
  }
  $scope.saveTechnique = function() {
    if ($scope.selected.bundle_name === undefined) {
        var bundle_name = $scope.selected.name.replace(/ /g,"_");
        $scope.selected.bundle_name = bundle_name;
    }
    var myNewTechnique = angular.copy($scope.selected);
    var index = findIndex($scope.techniques,$scope.original);
    if ( index === -1) {
      var length = $scope.techniques.length;
      $scope.techniques.push(myNewTechnique);
    } else {
      $scope.techniques[index] = myNewTechnique;
    }
    $scope.original=angular.copy($scope.selected);
    
  };
    
    
  $scope.saveMethod = function() {
    var method = angular.copy($scope.selectedMethod);
    $scope.selected.method_calls[$scope.selectedMethodIndex] = method;
    $scope.selectMethod(method);
  };

});
