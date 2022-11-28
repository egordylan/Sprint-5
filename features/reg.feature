@logreg

Feature: Testing Registration with Cucumber Framework

    Scenario: Successfull registration of new user with random credentials
        Given I go to the Main page
            Then I go to Login-Register page
                And Click the Continue button to make new user
            Then I create new user
                And Check registration


# npm run test-lr
# npx wdio -f cucumber --spec features/reg.feature