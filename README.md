# Student Management App
This is a simple React app for adding, editing, deleting, searching, and filtering students.

## The Error
The error came from this incorrect line:
```js
const =[students, setStudents] = useState([])
```
There must be a name before `=`. The correct line is:
```js
const [students, setStudents] = useState([])
```
`students` is the current data, and `setStudents` changes the data.

## Main Ideas
- `useState` stores information that can change in the app.
- `props` pass data or functions from a parent to a child component.
- `handleChange` updates the form when the user types.
- `handleSubmit` checks and saves a student.
- `editStudent` puts a selected student into the form.
- `deleteStudent` removes a student.
- `SearchBar` searches names and filters courses.
- `StudentList` displays students using `StudentCard`.

## State
- `students`: all students.
- `student`: the student currently in the form.
- `search`: text in the search box.
- `course`: the selected course.
- `error`: a message when the form is incomplete.

## Props
- `StudentForm` receives `student`, `onChange`, `onSubmit`, `onCancel`, and `error`.
- `SearchBar` receives `search`, `course`, `onSearch`, and `onCourseChange`.
- `StudentList` receives `students`, `onEdit`, and `onDelete`.

## Built-in Functions
- `map` edits a student in an array.
- `filter` searches or deletes students.
- `includes` finds text inside a name.
- `Date.now()` creates an id for a new student.
- `preventDefault()` stops the page from refreshing after form submission.

## Run The App
```bash
npm install
npm run dev
```
Check the code with:
```bash
npm run lint
npm run build
```

Students are stored temporarily in React state, so refreshing the page clears them.
