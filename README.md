# Personal Budget Spreadsheet
I built my own budget spreadsheet using Google Sheets and App Script.

## Background
I have been keeping track of my spendings in iCloud Numbers since 2024. As time went, I had more things to spend my money on, and also needed to track my earnings now. I took this as an opportunity to move from iCloud Numbers that glitched often to Google Sheets which I thought was a more powerful tool because of the built-in scripting platfrom called App Script, which allowed making custom functions.

## Goals & Framework
Since money is a major cause of headaches, the top priorities in my budget spreadsheet were intuitiveness, convenience, and simplicity.

There are tons of budget spreadsheet templates online, many of which being very convenient with advanced features like predicting future incomes. However, I wanted to build one of my own that reflected the way I see and manage my money. My framework goes as follows:

1. Plan my budget considering each department (Transportation, Grocery, Health, etc.) and sources of money (Work, Family—although they are much more than just that).
2. Spend and Earn.
3. Transfer between departments to make ends meet, when they overlap. For example, if buying organic food is overbudget for the department of grocery, the department of health can transfer some of its budget to help.
4. Summarize the spendings and earnings, and review.

## Features Curated
#### Settings
Here the user can add or remove departments and sources of income. The rest of the spreadsheet is linked to these settings, so when a new department is added, they update automatically. However, adding or removing a department or a source is not expected to be frequent, so the user has to rearrange the rows in Summary and Plan.

Period to Number and Recent Days are just helper cells. I tried to not have any helper cells, but calling on App Script for a switch statement turned out to be very slow and cause glitches on mobile, so I had to compromise.

#### Plan
For each department and source, the user sets the period (monthly, quarterly, etc.) and the allocation or expected income per period. The period of each item automatically updates how the summary is shown. It is expected that the user tries and matches the total allocation and expected income, which are in thicker border.

#### Flow
The user can spend, earn, or transfer between departments. They record the date, amount, the department(s) or source involved, and a short description about the transaction. Typing was minized using drop-down menues for mobile devices. App Script was used to clear the drop-down once a date is selected, which saves a lot of time.

#### Summary
The user can see the status of each department and source in one screen. The numbers in the middle of the "Period Summary" are calculated by:

    (allocation for the department for the period the month is in - spending from the department during the period the month is in - transfer out of the department during the period the month is in)
The numbers in the middle of the "Income Summary" are calculated by:

    (-expected income for the source for the period the month is in + earning from the source during the period the month is in)

The rows in "Period Summary" and "Income Summary" automatically merge by period. This dark magic could only be done using App Script.