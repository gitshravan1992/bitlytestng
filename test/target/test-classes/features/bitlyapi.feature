Feature: To test services in https://bitly.com

Prereq: User has created an account in bitly and also created several links

Scenario:To test following methods 
			GET/groups/{group_guid}
			GET/groups/{group_guid}/bitlinks/{sort}
			POST/bitlinks

#------------------------GET/groups/{group_guid}------------------------------#

#------------------Status Code Validation---------------#
Scenario Outline: To validate status code of  GET/groups/{group_guid}
			
Given user has generated "<token>" token for Authorization
When user performs  GET/groups/{group_guid}
Then user retrieves response status code as <response>

Examples:

|				token						| response |
|             invalid						|    403   | #To verify the invalid usecases
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    200   |
#| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    201   | #This is fail as status code should be 200


#------------------Response Body Validation---------------#

Scenario Outline: To validate response body of  GET/groups/{group_guid}
			
Given user has generated "<token>" token for Authorization
When user performs  GET/groups/{group_guid}
Then user retrieves all details for a group
And user validates whether json body "<key>" has value "<value>"

Examples:

|				token						|  	  key		|	value	   |
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    guid		| Bm4n5pZfPiT  |
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    name		| shravanbitly |
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|   is_active	|    true	   |

#------------------------GET/groups/{group_guid}/bitlinks/{sort}------------------------------#

#------------------Status Code Validation---------------#


Scenario Outline: To validate status code of  GET/groups/{group_guid}/bitlinks/{sort}
			
Given user has generated "<token>" token for Authorization
When user performs  GET/groups/{group_guid}/bitlinks/{sort}
Then user retrieves response status code as <response>

Examples:

|				token						| response |
|             invalid						|    403   | #To verify the invalid usecases
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    200   |
#| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    201   | #This is fail as status code should be 200

#------------------Response body Validation---------------#

Scenario Outline: To validates response body of GET/groups/{group_guid}/bitlinks/{sort}
			
Given user has generated "<token>" token for Authorization
When user performs  GET/groups/{group_guid}/bitlinks/{sort}
Then user gets list of bitlinks sorted by group
And user validates whether json body "<key>" has value "<value>"

Examples:

|				token						|  	  key				|					value	   					   |
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|	sorted_links.id		| [bit.ly/3L8ojHm, bit.ly/3xTcl0J, bit.ly/3vwyizy] |
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|	sorted_links.clicks	|              [2, 1, 1]   						   |



#----------------------------POST/bitlinks---------------------------------#

#------------------Status Code Validation---------------#
Scenario Outline: To validate status code of  POST/bitlinks when body is not entered
			
Given user has generated "<token>" token for Authorization
When user performs POST/bitlinks
Then user retrieves response status code as <response>

Examples:

|				token						| response |
|             invalid						|    403   | #To verify the invalid usecases
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    422   | #	This is will pass only once as 1st first only you can get 
			

Scenario Outline: To validate status code of  POST/bitlinks when body is entered
		
Given user has generated "<token>" token for Authorization
And user has entered json body with below contents
|	long_url |	https://www.elsevier.com/en-in	|
|	domain	 |			bit.ly					|
|	title	 |			Elsevier				|
When user performs POST/bitlinks
Then user retrieves response status code as <response>


Examples:

|				token						| response |
|             invalid						|    403   | #To verify the invalid usecases
#| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    201   | #	This is will pass only once as 1st first only you can get 
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|    200   | 




#------------------Response Body Validation---------------#

Scenario Outline: To validate response body of  POST/bitlinks
			
Given user has generated "<token>" token for Authorization
And user has entered json body with below contents
|	long_url |	https://www.elsevier.com/en-in	|
|	domain	 |			bit.ly					|
|	title	 |			Elsevier				|
When user performs POST/bitlinks
Then a bitlink is created
And user validates whether json body "<key>" has value "<value>"


Examples:

|				token						|  	  key		|				value	   			|
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|	long_url 	|	https://www.elsevier.com/en-in	|
| ee5bc095f2c67d11c579b9750dd6fcef64bfe554	|	title	 	|			Elsevier				|

			
#---------------------------------------END-------------------------------------------------------#