Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, thirty-two is the default number.
Given a user hasn't specified a number of events.
When the app is open.
Then list thirty-two events.

Scenario: User can change the number of events they want to see.
Given the user can see the list of events.
When the user changes the number of desired events to be seen.
Then change the number of events shown to what the user chose.