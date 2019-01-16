# Simple Changlelog Snippets

It provides snippets which could be helpful in making of Changlelogs.

## Features

_**Snippets**_

| Snippet           | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| changelog         | Adds a choosable changelog template                                        |
| changelog.all     | Adds a changelog template with all available Added, Changed, and others... |
| changelog.basic   | Adds a basic changelog template                                            |
| changelog.starter | Adds a starter changelog template                                          |

_**Each snippet also adds current date**_ (format of DateTime can be modified through settings, see below.)

_**Screenshot**_

![screenshot1](https://raw.githubusercontent.com/harry-public/simple-changelog-snippets/master/images/screenshot1.png)

## Extension Settings

_**Format of date can be modified:**_

#### `"simpleChanglogSnippets.dateFormat": "${CURRENT_DATE}-${CURRENT_MONTH}-${CURRENT_DATE}"`

_These are available **DateTime** variables_


| Variable                 | Descriptions                                |
| ------------------------ | ------------------------------------------- |
| CURRENT_YEAR             | The current year                            |
| CURRENT_YEAR_SHORT       | The current year's last two digits          |
| CURRENT_MONTH            | The month as two digits (example '02')      |
| CURRENT_MONTH_NAME       | The full name of the month (example 'July') |
| CURRENT_MONTH_NAME_SHORT | The short name of the month (example 'Jul') |
| CURRENT_DATE             | The day of the month                        |
| CURRENT_DAY_NAME         | The name of day (example 'Monday')          |
| CURRENT_DAY_NAME_SHORT   | The short name of the day (example 'Mon')   |
| CURRENT_HOUR             | The current hour in 24-hour clock format    |
| CURRENT_MINUTE           | The current minute                          |
| CURRENT_SECOND           | The current second                          |

