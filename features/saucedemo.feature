
Feature: Sauce Demo End-to-End Scenarios

  Background:
    Given I open the Sauce Demo login page

  Scenario: Valid login
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page

  Scenario: Invalid login
    When I login with username "wrong_user" and password "bad_pass"
    Then I should see a login error message

  Scenario: Add multiple items and checkout
    When I login with username "standard_user" and password "secret_sauce"
    And I add items "Sauce Labs Backpack,Sauce Labs Bike Light" to cart
    And I go to cart
    Then I should see 2 items in cart
    And I checkout with user details "Gaurav","Singh","4000"
    Then I should see the order complete page

  Scenario: Sort items by price
    When I login with username "standard_user" and password "secret_sauce"
    And I sort items by "Price (low to high)"
    Then items should be sorted by price ascending

  Scenario: Sort items by name
    When I login with username "standard_user" and password "secret_sauce"
    And I sort items by "Name (A to Z)"
    Then items should be sorted by name ascending
