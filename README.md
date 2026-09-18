1. PROJECT DESCRIPTION


The Student Management System is a React.js application created with Vite.
It provides a simple interface for managing student records without refreshing the page.
The application demonstrates React components, props, state, events, JSX, arrays, objects,
map(), filter(), conditional rendering, and form handling.

2. Project Structure


src/
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── StudentCard.jsx
│   ├── StudentForm.jsx
│   └── StudentList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

Each component has a specific responsibility, making the application easier to understand,
reuse, maintain, and modify.

3. Header Component

Header.jsx displays the application heading using JSX.
The <header> and <p> elements use `className` so CSS can style the interface.


 4. StudentForm Component

StudentForm.jsx contains the form used to add and edit students.
It collects the student's full name, age, course, and email.
The form uses `onChange` to detect input changes and `onSubmit` to submit the form.
event.target.name identifies the field being changed, while event.target.value
gets the value entered or selected by the user.
The form also performs validation and displays an error when required fields are empty.
The title and button change depending on whether a student is being added or edited.

5. StudentCard Component

StudentCard.jsx dislays one student at a time.
It receives student, onEdit, and onDelete through props.
The student object provides the name, age, course, email, and ID.
The Edit button calls `onEdit(student)`, while Delete calls `onDelete(student.id)`.

6. StudentList Component

StudentList.jsx receives the students array through props.
It uses "MAP" to create a StudentCard for every student.
Each card has a unique `key={student.id}` so React can identify each item.
If there are no students, conditional rendering displays "No student available".

 7. SearchBar Component

SearchBar.jsx contains the search input and course dropdown.
The search input uses `onChange` to update the search value.
The dropdown allows filtering by All Courses, Software Development,
Computer Science, Information Technology, or Networking.

 8. App Component and State

App.jsx is the main component that connects all other components.
useState() is used to store students, the current form student, search text,
selected course, and validation errors.
When state changes, React automatically re-renders the affected interface.

 9. Add, Edit, and Delete Operations

handleSubmit() uses event.preventDefault() to stop the browser from refreshing.
A new student is added to the array, and the form is cleared afterward.
For editing, `map()` finds the student with the matching ID and replaces the old data.
For deleting, `filter()` removes the student whose ID matches the selected ID.

 10. Search, Filter, and Statistics

visibleStudents uses filter to find students whose names match the search text
and whose course matches the selected course.
toLowerCase() makes name searching case-insensitive.
students.length` displays the total number of students dynamically.

 11. React Concepts Demonstrated

The project demonstrates components, JSX, variables in JSX, imports/exports, props,
useState, onClick onChange, onSubmit, form handling, arrays, objects,
map filter(), conditional rendering, unique keys, state updates,
and reusable components.

 12. Requirement Note

The current students state starts as an empty array .
Therefore, four initial student records still need to be added to fully satisfy
the assignment requirement that four students exist when the application starts.
