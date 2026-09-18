function StudentForm({ student, onChange, onSubmit, onCancel, error }) {
return(
<form className="student-form" onSubmit={onSubmit}>
<h2>{student.id ? 'edit Student' : 'Add student'}</h2>
<label htmlFor="student-name">Full name</label>
<input id="student-name" name="name" value={student.name} onChange={onChange} placeholder="Enter your names" />
<label htmlFor="student-age">Age</label>
<input id="student-age" name="age" type="number" value={student.age}
onChange={onChange} placeholder="enter your ages" />
<label htmlFor="student-course">Course</label>
<select id="student-course" name="course" value={student.course} onChange={onChange} >
<option value="">Choose course</option>
<option value="Software Development">Software Development</option>
<option value="Computer Science">Computer Science</option>
<option value="Information Technology">Information Technology</option>
<option value="Networking">Networking</option>
</select>
<label htmlFor="student-email">Email</label>
<input id="student-email" name="email" type="email" value={student.email}
onChange={onChange} />
{ error && <p>{error}</p>}
<button type="submit">{student.id ?  'Update Student' :'Add Student'}</button>
{student.id && <button type="button" onClick={onCancel}>Cancel</button>}
</form>
)
}
export default StudentForm