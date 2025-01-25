export default function Projects() {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'A fully responsive e-commerce website built with Next.js and Tailwind CSS.',
        link: 'https://ecommerce-platform.example.com',
        repo: 'https://github.com/yourusername/ecommerce-platform',
      },
      {
        title: 'Task Manager App',
        description: 'A Kanban-style task management app with drag-and-drop functionality.',
        link: 'https://task-manager.example.com',
        repo: 'https://github.com/yourusername/task-manager',
      },
      {
        title: 'Weather App',
        description: 'A weather app using the OpenWeather API with real-time forecasts.',
        link: 'https://weather-app.example.com',
        repo: 'https://github.com/yourusername/weather-app',
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  