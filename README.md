## **WeddriverIO/ Cucumber/ Allure Report Practice Tasks**

---

### WebdriverIO + Allure Report:
* WebdriverIO Locators types;
* Using Forms Page Objects;
* Using Tables Page Objects;
* Configure WebdriverIO Services;
* Configure WebdriverIO Reports;
* Allure report API;
* Allure report customization;

### Cucumber:
* BDD, Data-driven and Keyword-driven Testing;
* Hooks;
* Scenario Outlines ;
* Data Tables;
* Docstrings.

---

### Task:

1. Install and configure Cucumber for WebdriverIO

2. Write page object to fill both login and register forms in the https://automationteststore.com/, rewrite related tests using Cucumber Framework + WebdriverIO

3. Rewrite your negative Login test using Cucumber + Scenario Outlines

4. Create step definition with mass HTML attribute checking using data tables,  and come up with simple test using the step e.g.:
When I open url "https://ya.ru&quot;
Then I expect elements attributes:
| element       | attribute | value               |
| .home-link2   | href.     | https://ya.ru/?nr=1 |
| input         | name.     | text2               |

5. Create step definition to check all shopping card images using doc string and JSON format, e.g.:
When I check shopping card item images:
"""
[
{'src'='/images/123.png', 'width'='75', height='75'},
{'src'='/images/546.png', 'width'='100', height='100'},

.....
]
"""
6. Install and configure 'Cucumber Viewport Logger Service' - https://webdriver.io/docs/wdio-cucumber-viewport-logger-service
7. Install and configure https://webdriver.io/docs/allure-reporter
8. Customize Allure report - it should add screenshot, page source, cookies to the test attachments

---

### Comments:

Use WebdriverIO hooks to customize Allure Report