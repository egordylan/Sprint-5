@neglogin

Feature: Testing web-page with Cucumber Framework
    
    @neglogin
    Scenario Outline: Login negative with invalid credentials
        Given I go to the Main page
            Then I go to Login-Register page
            When I login with "<username>" and "<password>"
            Then I should see a flash message saying <message>
                Examples:
                    | username   | password    | message                                      |
                    | JohnyBravo | password1   | Error: Incorrect login or password provided. |
                    | JohnyBravo |             | Error: Incorrect login or password provided. |
                    | JohnyB     | password123 | Error: Incorrect login or password provided. |
                    | JohnyB     | password1   | Error: Incorrect login or password provided. |
                    |            | password123 | Error: Incorrect login or password provided. |
                    |            |             | Error: Incorrect login or password provided. |

# npm run test-login-neg