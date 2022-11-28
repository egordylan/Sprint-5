Feature: Check HTML attributes

    Scenario: Check HTML attributes with data table
    	When I open url 'https://automationteststore.com'
    	Then I expect elements attributes:
            | element     | attribute | value                            |
            | .logo       | href      | https://automationteststore.com/ |
            | #bestseller | class     | row mt20                         |
            | .facebook   | rel       | noopener                         |


# npx wdio -f cucumber --spec features/htmlAttr.feature
