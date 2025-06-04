async function loadCourses() {
  const res = await fetch('/api/courses');
  const courses = await res.json();
  const container = document.getElementById('courses');
  container.innerHTML = '';
  courses.forEach(c => {
    const div = document.createElement('div');
    div.className = 'course';
    div.textContent = `${c.title} - ${c.description}`;
    container.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadCourses);
