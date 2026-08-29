export const portfolio = {
  name: 'Chandra Kanta Jena',
  initials: 'CKJ',
  title: 'B.Tech CSE | AI & ML Student',
  availability: 'Open to learning, building & collaborating',
  bio: 'Passionate about programming, artificial intelligence, machine learning, web development, and building real-world projects. Currently learning, experimenting, and improving my skills every day.',
  about: "I'm a 2nd-year B.Tech Computer Science and Engineering student interested in Artificial Intelligence, Machine Learning, software development, and problem solving. I enjoy learning new technologies and turning ideas into practical projects.",
  profileImage: '/profile-student.png',
  resumeUrl: '#resume-placeholder',
  email: 'chandrakant9078@gmail.com',
  location: '[Your Location]',
  socials: { github: 'https://github.com/chandrakant8455', linkedin: 'https://www.linkedin.com/in/chandra-kanta-jena16/' },
  skills: {
    programming: ['Python', 'C', 'C++', 'JavaScript'],
    web: ['HTML', 'CSS', 'JavaScript'],
    ai: ['Machine Learning', 'Artificial Intelligence', 'NumPy', 'Pandas'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva'],
  },
  learning: [
    ['Data Structures & Algorithms', 'Improving problem-solving and competitive programming skills.'],
    ['Artificial Intelligence', 'Learning AI concepts and applications.'],
    ['Machine Learning', 'Learning algorithms, preprocessing, model training and evaluation.'],
    ['Web Development', 'Building responsive and interactive websites.'],
  ],
  projects: [
    { title: 'Personal Portfolio', description: 'A responsive portfolio website built to showcase skills, projects, education and achievements.', tags: 'HTML · CSS · JavaScript / React', image: '/projects/personal-portfolio.png', githubUrl: 'YOUR_GITHUB_REPO_URL', demoUrl: '#contact' },
    { title: 'Student Management System', description: 'A student management application for adding, updating, deleting and viewing student records.', tags: 'Python · File Handling / SQLite', image: '/projects/student-management.png', githubUrl: 'YOUR_GITHUB_REPO_URL', demoUrl: '#contact' },
    { title: 'To-Do List Web App', description: 'A simple productivity application for managing daily tasks.', tags: 'HTML · CSS · JavaScript', image: '/projects/todo-list.png', githubUrl: 'YOUR_GITHUB_REPO_URL', demoUrl: '#contact' },
    { title: 'Weather Application', description: 'A weather application that retrieves real-time weather information using an API.', tags: 'HTML · CSS · JavaScript · Weather API', image: '/projects/weather-app.png', githubUrl: 'YOUR_GITHUB_REPO_URL', demoUrl: '#contact' },
  ],
  internships: [['AI ML INTERN', '3skill', 'Aug 2026 – Sept 2026', 'Pyton - Numpy - Pandas - Matplotlib', 'Gaining hands-on experience in Artificial Intelligence and Machine Learning through Python, data preprocessing, data analysis, machine learning models, and practical projects. Working with real-world datasets to develop and evaluate AI/ML solutions.']],
  education: { degree: 'B.Tech Computer Science & Engineering', university: 'Lovely Professional University', year: '2025 – 2029', status: 'Currently pursuing'},
  achievements: ['Coding achievements', 'Hackathons', 'SIH participation', 'Certifications', 'Workshops', 'Technical competitions'],
  certificates: [
    { title: 'AI Fundamentals - Google', issuer: 'Coursera', year: '2026', image: '', certificateUrl: '' },
    { title: 'Introduction to Structured Query Language (SQL) - University of Michigan', issuer: 'Coursera', year: '2026', image: '', certificateUrl: '' },
    { title: 'Certificate title', issuer: 'Issuing platform', year: 'Year', image: '', certificateUrl: '' },
    { title: 'Certificate title', issuer: 'Issuing platform', year: 'Year', image: '', certificateUrl: '' },
  ],
} as const

export type Portfolio = typeof portfolio
