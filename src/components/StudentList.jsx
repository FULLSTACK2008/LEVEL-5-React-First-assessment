import StudentCard from "./StudentCard";

function StudentList({ students, onEdit, onDelete }) {
if (students.length === 0) {
return<p>No student  available</p>
}
return(
<section className="student-list">
    {students.map((student) => (
<StudentCard
key={student.id}
student={student}
onEdit={onEdit}
onDelete={onDelete}
    />
))}
</section>
)
}

export default StudentList