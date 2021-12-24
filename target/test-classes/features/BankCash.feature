@BankAndCash
Feature: verifying cash and account creating options
@Scenario 
Scenario Outline: User should be able to login to techfios page  
	Given User is already sign in and on the dashboard page using vaild "<username>"  
	When user put valid "<password>"  
	And user clicks "Signin"  
	And user clicks "bank and cash" 
	And user clicks "create account" 
	And  user fillup account title fild as "<title>"
	And user fillup discription filled "<discription>" 
	And user fillup initial balance filled "<balance>"
	And user fillup account number fild "<account>" 
	And user fillup contact filled "<contact>"
	And user fillup phone number filed "<phone>"
	And user clicks "submit"
	Then user should be able to get confirmation message
	 
	
Examples:
|username|password|title|discription|balance|account|contact|phone|
|demo@techfios.com|abc123|MR Abel|saving|50000.00|001-028-285|lala|548-891-4444|