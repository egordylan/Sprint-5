@log-reg

Feature: Testing Registration with Cucumber Framework with data table
    
    Scenario: Successfull registration of new user
        Given I go to the Main page
            Then I go to Login-Register page
                And Click the Continue button to make new user
            Then I create new user with data:
                """
                    firstName : "Peter"
                    lastName : "Parker"
                    email : "peterparkertheBest2@proton.com"
                    address1 : "412/17 River Str."
                    country: "United States"
                    city : "New York"
                    zip : "00001"
                    loginName : "SpiderManTheBest2"
                    password : "qwerty123*"
                """
            Then Check registration






# npm run test-log-reg
# npx wdio -f cucumber --spec features/login-register.feature