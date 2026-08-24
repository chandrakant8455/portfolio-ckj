export const portfolio = {
  name: 'Chandra Kanta Jena',
  initials: 'CKJ',
  title: 'B.Tech CSE | AI & ML Student',
  availability: 'Open to learning, building & collaborating',
  bio: 'Passionate about programming, artificial intelligence, machine learning, web development, and building real-world projects. Currently learning, experimenting, and improving my skills every day.',
  about: "I'm a 2nd-year B.Tech Computer Science and Engineering student interested in Artificial Intelligence, Machine Learning, software development, and problem solving. I enjoy learning new technologies and turning ideas into practical projects.",
  profileImage: '/profile-student.png',
  resumeUrl: '#resume-placeholder',
  email: 'your.email@example.com',
  location: '[Your Location]',
  socials: { github: 'https://github.com/yourusername', linkedin: 'https://linkedin.com/in/yourusername' },
  skills: {
    programming: ['Python', 'C', 'C++', 'JavaScript'],
    web: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    ai: ['Machine Learning', 'Artificial Intelligence', 'NumPy', 'Pandas', 'Scikit-learn'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva'],
  },
  learning: [
    ['Data Structures & Algorithms', 'Improving problem-solving and competitive programming skills.'],
    ['Artificial Intelligence', 'Learning AI concepts and applications.'],
    ['Machine Learning', 'Learning algorithms, preprocessing, model training and evaluation.'],
    ['Web Development', 'Building responsive and interactive websites.'],
  ],
  projects: [
    ['Personal Portfolio', 'A responsive portfolio website built to showcase skills, projects, education and achievements.', 'HTML · CSS · JavaScript / React'],
    ['Student Management System', 'A student management application for adding, updating, deleting and viewing student records.', 'Python · File Handling / SQLite'],
    ['To-Do List Web App', 'A simple productivity application for managing daily tasks.', 'HTML · CSS · JavaScript'],
    ['Weather Application', 'A weather application that retrieves real-time weather information using an API.', 'HTML · CSS · JavaScript · Weather API'],
  ],
  internships: [['Web Development Intern', 'Organization Name', 'May 2026 – June 2026', 'HTML · CSS · JavaScript · Git', 'Worked on web development tasks and learned practical concepts related to responsive design, frontend development and version control.']],
  education: { degree: 'B.Tech Computer Science & Engineering', university: '[University Name]', year: '2025 – 2029', status: 'Currently pursuing', cgpa: '[Your CGPA]' },
  achievements: ['Coding achievements', 'Hackathons', 'SIH participation', 'Certifications', 'Workshops', 'Technical competitions'],
  certificates: [['Certificate title', 'Issuing organization', '[Date]'], ['Another certificate', 'Issuing organization', '[Date]']],
} as const

export type Portfolio = typeof portfolio
