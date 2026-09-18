function StudentCard({student,onEdit,onDelete}){
return(
<article className="student-card">
<h3>{student.name}</h3>
<p>Age: {student.age}</p>
<p>Course: {student.course}</p>
<p>Email: {student.email}</p>
<button onClick={()=>onEdit(student)}>Edit</button>
<button onClick={()=>onDelete(student.id)}>Delete</button>
</article>
)
}
export default StudentCard