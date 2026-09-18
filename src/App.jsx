import { useState } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";

const emptyStudent = { name: "", age: "", course: "", email: "" };

function App() {
const [students, setStudents] = useState([]);
const [student, setStudent] = useState(emptyStudent);
const [search, setSearch] = useState("");
const [course, setCourse] = useState("all courses");
const [error, setError] = useState("");

function handleChange(event) {
setStudent({ ...student, [event.target.name]: event.target.value });
}

function handleSubmit(event) {
event.preventDefault();
if (!student.name || !student.age || !student.course || !student.email) {
setError("Please fill in all fields");
return;
}
if (student.id) {
setStudents(students.map((item) => item.id === student.id ? student : item));
} else {
setStudents([...students, { ...student, id: Date.now() }]);
}
setStudent(emptyStudent);
setError("");
}

function editStudent(item) {
setStudent(item);
setError("");
}

function deleteStudent(id) {
setStudents(students.filter((item) => item.id !== id));
}

const visibleStudents = students.filter((item) => {
const matchesName = item.name.toLowerCase().includes(search.toLowerCase());
const matchesCourse = course === "all courses" || item.course === course;
return matchesName && matchesCourse;
});

return(
<main className={`app ${students.length > 6 ? "students-many" : ""}`}>
<Header />
<StudentForm
student={student}
onChange={handleChange}
onSubmit={handleSubmit}
onCancel={()=> setStudent(emptyStudent)}
error={error}
/>
<h2 className="student-count">Total students: {students.length}</h2>
<SearchBar
search={search}
course={course}
onSearch={setSearch}
onCourseChange={setCourse}
  />

<StudentList
students={visibleStudents}
onEdit={editStudent}
onDelete={deleteStudent}
/>
</main>
)
}
export default App