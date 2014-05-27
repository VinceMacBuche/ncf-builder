


function swapTwoArrayItems(array, index1, index2) {
    var item = array[index1];
    array[index1] = array[index2];
    array[index2] = item;
    return array;
}


function findIndex(array, elem) {
    for (index in array) {
        var item = array[index];
        if (angular.equals(item,elem)) {
          return array.indexOf(item);
        }
    }
    return -1;
}

angular.module('ncf', ['ui.bootstrap','ui.bootstrap.tpls'])
.controller('generic', function ($scope, $modal) { 
    
  $scope.capitaliseFirstLetter = function (string) {
    if (string.length === 0) {
        return string;
    } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
  
  // Transome a row technique into a valid UI technique
  // transform method call args by surrounding them by transforming them into an object so we can iterate on them
  // Add original_index to the method call, so we can track their modification on index
  $scope.toTechUI = function (technique) {
    var calls = technique.method_calls.map( function (method_call, i2) {
      method_call.args = method_call.args.map( function (v, i) {
          if (v.hasOwnProperty("value")) {
              return v;
          } else {
        return {"value" : v};
          }
      });
      method_call["original_index"] = i2;
      return method_call;
    });
    technique.method_calls = calls;
    return technique;
  }
  
  
  $scope.isSelected = function(technique) {
    return angular.equals($scope.original,technique);
  }
  $scope.isSelectedMethod = function(method) {
    return angular.equals($scope.selectedMethod,method);
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
$scope.selectedMethodIndex=undefined;
$scope.addNew=false;

    
  $scope.checkSelect = function(technique) {
      if($scope.selected === undefined) {
          $scope.selectTechnique(technique);
      } else {
        if(angular.equals($scope.original,$scope.selected)) {
           $scope.selectTechnique(technique);
        } else {
           $scope.selectPopup(technique);
        }        
    }
  };
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
    var originalMethod = $scope.original.method_calls[method_call.original_index]
    if(angular.equals($scope.selectedMethod,method_call) ) {
         $scope.selectedMethod = undefined;
    } else {
    $scope.addNew=false;
    $scope.selectedMethodIndex = index;
    $scope.selectedMethod=method_call;
    }
    //$scope.original=undefined;
  };
    
  $scope.openMethods = function() {
      
        $scope.addNew=true;
         $scope.selectedMethod = undefined;
         $scope.originalMethod = undefined;
      
  }
  $scope.addMethod = function(bundle) {
    var original_index = $scope.selected.method_calls.length;
    var call = { "method_name" : bundle.bundle_name
      , "original_index" : original_index
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
    return angular.equals(methodCall, $scope.original.method_calls[methodCall.original_index]);
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
    $scope.selected = $scope.toTechUI($scope.selected);
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

  $scope.selectPopup = function( nextTechnique ) {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        technique: function () {
          return $scope.original;
        }
      }
    });

    modalInstance.result.then(function (doSave) {
      if (doSave) {
          $scope.saveTechnique();
      }
      $scope.selectTechnique(nextTechnique);
    });
  };
});


var ModalInstanceCtrl = function ($scope, $modalInstance, technique) {

  $scope.technique = technique;
  $scope.save = function() {
    $modalInstance.close(true);
  }

  $scope.discard = function () {
    $modalInstance.close(false);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};