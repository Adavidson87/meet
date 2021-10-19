Feature: Show/Hide an Event’s Details

Scenario: An event element is collapsed by default.
Given the event elements are collapsed.
When the user opens the app.
Then the user should see a list of collapsed events.

Scenario: User can expand an event to see its details.
Given the event elements are collapsed.
When the user clicks on the show event button.
Then the event element expands to show details.

Scenario: User can collapse an event to hide its details.
Given the event element is expanded.
When the user clicks on the hide details button.
Then the event element collapses.