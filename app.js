  (function () {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var ToBuy = this;
    ToBuy.items = ShoppingListCheckOffService.getToBuyItems();
    ToBuy.buyItem = function (itemIndex){
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var Bought = this;
    Bought.items = ShoppingListCheckOffService.boughtItems();
  };

  function ShoppingListCheckOffService(){
    var service = this;
    var tobuyitems = [
    {name: 'Milk',quantity: 2},
    {name: 'Bread',quantity: 1},
    {name: 'Cookies',quantity: 12},
    {name: 'Eggs',quantity: 10},
    {name: 'Milk',quantity: 1}];

    //Array of object literals defining already bought items
    var boughtItems = [];
    //Method to return the array of items
    service.getToBuyItems = function (){
      return tobuyitems;
    };

    service.buyItem = function (itemIndex){
      //Add the item to the BoughtItems array
      var addItem = {
        name:tobuyitems[itemIndex].name,
        quantity:tobuyitems[itemIndex].quantity
      };
      boughtItems.push(addItem);
      tobuyitems.splice(itemIndex,1);
    };

    service.boughtItems = function () {
      return boughtItems;
    };
  };

  })();
