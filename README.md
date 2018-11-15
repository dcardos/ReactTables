# React Tables
Considering table options between

### [React-table](https://react-table.js.org/#/story/readme)

### [Kendo UI - Grid](https://www.telerik.com/kendo-react-ui/components/grid/)

IMHO, both will easily satisfy the need to build a basic table, but the React-table has some defaults which made it easier to get a lightweight table, meanwhile the documentation of Kendo UI is better in both organization and live examples.

It is also important to consider which functionalities you want to have in a table. More complex features as inline editing is much easier done with Kendo UI, which supports, by default, data types when editing. Trying to do the same with React-Table prove to be cumbersome, the code is not intuitive and it also does not support different data types editing by default. You can check the example in this project.
Kendo UI has a better documentation for: exporting to a file, table hierarchy (table inside another), sorting with user input options, and other features you can check at the Advanced implementations topic on their website.

Nonetheless, in the example of this project you can notice the code needed to build a basic table with sorting, pagination and filtering is slightly shorter using React-Table, although I think the code using Kendo UI it is easier to read and follow.
Another difference is regarding the HTML generated. As you can check, Kendo-UI Grid indeed is converted into a table while the React-Table is converted into div elements.

All in all, I would go for Kendo UI, specially because when you find a bug it is easier to look up for a solution searching for "kendo grid", on the other hand, searching for "react-table" brings a ton of results not exactly related to "react-table.js". Also, they offer better support: https://www.telerik.com/kendo-react-ui/support/ .
