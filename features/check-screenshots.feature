Feature: Chesking screenshots

    Scenario: Checking all shopping card images using doc string and JSON format
        Given I go to the Main page
            When I add some goods to the shoping cart
            Then I check shopping card item image:
                """
                    [
                        {"src":"//automationteststore.com/image/thumbnails/18/6f/demo_product01_jpg-100089-75x75.jpg", "width":"75", "height":"75"},
                        {"src":"//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-75x75.jpg", "width":"75", "height":"75"}
                    ]
                """

# npx wdio -f cucumber --spec features/check-screenshots.feature