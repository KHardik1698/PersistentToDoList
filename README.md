# JavaScript Persistent To-Do List

This Repository contains a Persistent To Do List application made using Vanilla JavaScript Functions.\
This Project is created using a Modular approach, where various functionalities are divided into various Modules.\
It has the option of adding any Task which the User wants to enter.\
The Add Task Button will add it to the List of Tasks & clear the Input Field.\
The Clear Button is also used to clear the Input Field with a single click instead of backspacing all the typed contents.\
Then, we can view the List of tasks, where we have the Task along with it's Serial Number & 2 Buttons i.e. Complete/Incomplete Button & Delete Button.\
The Complete/Incomplete Button is used to change the status of the task, & it also changes the Task appearance with it.\
The Delete button will delete the task & the 2 buttons with it as well.

# Main Component:

The Main Component is used to View the Data that is Stored in the Local Storage.\
It's next function is to perform the Form Submission Task.

# Form Submission Component:

The Form Submission Component is used to export multiple modules & it performs the operation of adding a Task to the To Do List.\
It uses the Task Constructor to create a Task Object.\
It then checks whether the Input is valid or not.\
It then adds the task details to the To Do List Data & the Local Storage.\
It then creates the Markup for the newly added Task.\
It also cleares the Input Field after the submission of Task.

# Task Constructor Component:

The Task Constructor Component is used to create a task constructor with a random Task Id which is generated using Faker, the task Description & it's Status(class).

# Input Validation Component:

The Input Validation Component is used to check whether the Input entered by the User is valid or not.\
It checks for a blank input, & it checks for a set of special characters.\
Whenever some invalid Input is entered, an alert will appear, telling the User to enter a valid Input.

# To Do List Data Component:

The To Do List Data Component is used to store whatever data is getting entered by the User.\
This gets stored in the Local Storage as well, so this List gets empty whenever the page is refreshed or closed.

# Task Component:

The Task Component is used for creating the Markup whenever the User enters a new Task.\
It gets the "ul" tag, then creates a "div" tag, inside that it creates a "li" tag with it's id, description & class.\
It also creates the "buttons" for Complete/Incomplete & Delete.\
It appends all the elements to the div, then appends the div to ul & returns this generated Markup.

# Local Storage Component:

The Local Storage Component is used to store the Task Data into the Local Storage, view the Local Storage data whenever the Page is loaded or refreshed, & it is viewed with it's proper Markup.\
The Local Storage data is Stored & Retreived in JSON Format.

# Delete Task Component:

The Delete Task Component is used to delete a task from the To Do List Data or the Local Storage by finding the Id of the Task List & then removing that particular entire Div from the Markup.

# Update Task Status Component:

The Update Task Status Component is used to update the class of that particular task.\
The class value can is used to give the effect of Completed or Incompleted Task.

# Demo:

Live Demo of the JavaScript Persistent To-Do List can be found here:\
https://khardik1698.github.io/PersistentToDoList/
