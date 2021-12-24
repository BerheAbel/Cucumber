$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankCash.feature");
formatter.feature({
  "line": 2,
  "name": "verifying cash and account creating options",
  "description": "",
  "id": "verifying-cash-and-account-creating-options",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankAndCash"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login to techfios page",
  "description": "",
  "id": "verifying-cash-and-account-creating-options;user-should-be-able-to-login-to-techfios-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is already sign in and on the dashboard page using vaild \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user put valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks \"bank and cash\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks \"create account\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fillup account title fild as \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fillup discription filled \"\u003cdiscription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fillup initial balance filled \"\u003cbalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fillup account number fild \"\u003caccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fillup contact filled \"\u003ccontact\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fillup phone number filed \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should be able to get confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "verifying-cash-and-account-creating-options;user-should-be-able-to-login-to-techfios-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "discription",
        "balance",
        "account",
        "contact",
        "phone"
      ],
      "line": 21,
      "id": "verifying-cash-and-account-creating-options;user-should-be-able-to-login-to-techfios-page;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "MR Abel",
        "saving",
        "50000.00",
        "001-028-285",
        "lala",
        "548-891-4444"
      ],
      "line": 22,
      "id": "verifying-cash-and-account-creating-options;user-should-be-able-to-login-to-techfios-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4039667000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to login to techfios page",
  "description": "",
  "id": "verifying-cash-and-account-creating-options;user-should-be-able-to-login-to-techfios-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario"
    },
    {
      "line": 1,
      "name": "@BankAndCash"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is already sign in and on the dashboard page using vaild \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user put valid \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks \"bank and cash\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks \"create account\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fillup account title fild as \"MR Abel\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fillup discription filled \"saving\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fillup initial balance filled \"50000.00\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fillup account number fild \"001-028-285\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fillup contact filled \"lala\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fillup phone number filed \"548-891-4444\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should be able to get confirmation message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 63
    }
  ],
  "location": "StepsDefinition.user_is_already_sign_in_and_on_the_dashboard_page_using_vaild(String)"
});
formatter.result({
  "duration": 314490100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 16
    }
  ],
  "location": "StepsDefinition.user_put_valid(String)"
});
formatter.result({
  "duration": 97748700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Signin",
      "offset": 13
    }
  ],
  "location": "StepsDefinition.user_clicks(String)"
});
formatter.result({
  "duration": 2059014700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bank and cash",
      "offset": 13
    }
  ],
  "location": "StepsDefinition.user_clicks(String)"
});
formatter.result({
  "duration": 80630500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create account",
      "offset": 13
    }
  ],
  "location": "StepsDefinition.user_clicks(String)"
});
formatter.result({
  "duration": 716030800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MR Abel",
      "offset": 35
    }
  ],
  "location": "StepsDefinition.user_fillup_account_title_fild_as(String)"
});
formatter.result({
  "duration": 126624500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saving",
      "offset": 32
    }
  ],
  "location": "StepsDefinition.user_fillup_discription_filled(String)"
});
formatter.result({
  "duration": 122927900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000.00",
      "offset": 36
    }
  ],
  "location": "StepsDefinition.user_fillup_initial_balance_filled(String)"
});
formatter.result({
  "duration": 117252000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "001-028-285",
      "offset": 33
    }
  ],
  "location": "StepsDefinition.user_fillup_account_number_fild(String)"
});
formatter.result({
  "duration": 94161900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lala",
      "offset": 28
    }
  ],
  "location": "StepsDefinition.user_fillup_contact_filled(String)"
});
formatter.result({
  "duration": 83538000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "548-891-4444",
      "offset": 32
    }
  ],
  "location": "StepsDefinition.user_fillup_phone_number_filed(String)"
});
formatter.result({
  "duration": 94803500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 13
    }
  ],
  "location": "StepsDefinition.user_clicks(String)"
});
formatter.result({
  "duration": 4180846100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_should_be_able_to_get_confirmation_message()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.after({
  "duration": 371241000,
  "status": "passed"
});
});