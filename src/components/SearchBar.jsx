function SearchBar({ search, course, onSearch, onCourseChange }) {
return(
<section className="search-bar">
<input value={search} onChange={(event) => onSearch(event.target.value)}
placeholder="Search by name" aria-label="Search by name"/>

<select value={course} onChange={(event) => onCourseChange(event.target.value)}>
<option value="all courses">All courses</option>
<option>Software Development</option>
<option>Computer Science</option>
<option>Information Technology</option>
<option>Networking</option>
</select>
</section>
)
}

export default SearchBar