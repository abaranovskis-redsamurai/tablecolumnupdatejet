/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider', 'ojs/ojtable', 'ojs/ojgauge', 'ojs/ojbutton'],
  function (oj, ko, $, ArrayDataProvider) {

    function DashboardViewModel() {
      var self = this;

      self.thresholdValues = [{ "max": 0.33, "color": "#66B77D" }, { "max": 0.66, "color": "#F4D058" }, { "color": "#E66446" }];

      var invArray = [
        {
          InvoiceId: 'MAR410', CustomerName: 'Treatley', GrandTotal: 70.35, Risk: ko.observable(0)
        },
        {
          InvoiceId: 'MAR409', CustomerName: 'Veggius', GrandTotal: 54.51, Risk: ko.observable(0)
        },
        {
          InvoiceId: 'MAR408', CustomerName: 'Beetro', GrandTotal: 40.75, Risk: ko.observable(0)
        },
        {
          InvoiceId: 'MAR407', CustomerName: 'Feasthouse', GrandTotal: 81.46, Risk: ko.observable(0)
        },
        {
          InvoiceId: 'MAR406', CustomerName: 'Lemonini', GrandTotal: 372.75, Risk: ko.observable(0)
        }];

      self.dataprovider = new ArrayDataProvider(invArray, { keyAttributes: 'InvoiceId' });

      self.columnArray = [{
        "headerText": "Invoice ID",
        "field": "InvoiceId"
      },
      {
        "headerText": "Customer Name",
        "field": "CustomerName"
      },
      {
        "headerText": "Grand Total",
        "field": "GrandTotal",
        "template": "amountTemplate"
      },
      {
        "headerText": "Risk",
        "field": "Risk",
        "template": "riskCellTemplate"
      }];

      self.constructNumberConverter = function () {
        var options = { style: "currency", currency: "USD", currencyDisplay: "symbol" };
        var numberConverterFactory = oj.Validation.converterFactory("number");
        return numberConverterFactory.createConverter(options);
      }

      self.numberConverter = self.constructNumberConverter();

      self.paymentRiskCalculation = function () {
        for (var j = 0; j < invArray.length; j++) {
          invArray[j].Risk(Math.random());
        }
      }

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function () {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
