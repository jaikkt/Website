const Projects = () => {
  return (
    <div id="Projects" className="flex min-h-[80vh] flex-col items-center justify-evenly p-10 gap-12 font-poppins">
      <h2 className="text-center text-4xl font-light text-white md:text-6xl">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Tech Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-medium text-white">Technical Projects</h3>
          <div className="space-y-8">
            <div className="border p-6 rounded-lg">
              <h4 className="text-xl font-medium text-white mb-4">Project Management App</h4>
              <p className="text-white mb-4">A full-stack application built with React and Node.js for managing team projects and tasks.</p>
              <p className="text-sm text-gray-300">Technologies: React, Node.js, MongoDB, Express</p>
            </div>
            <div className="border p-6 rounded-lg">
              <h4 className="text-xl font-medium text-white mb-4">E-commerce Platform</h4>
              <p className="text-white mb-4">Developed a responsive e-commerce website with user authentication and payment integration.</p>
              <p className="text-sm text-gray-300">Technologies: Next.js, Stripe, PostgreSQL, Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Video Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-medium text-white">Video Projects</h3>
          <div className="space-y-8">
            <div className="border p-6 rounded-lg">
              <h4 className="text-xl font-medium text-white mb-4">Documentary Short</h4>
              <p className="text-white mb-4">A 15-minute documentary exploring local artisans and their craft.</p>
              <p className="text-sm text-gray-300">Tools: Adobe Premiere Pro, After Effects</p>
            </div>
            <div className="border p-6 rounded-lg">
              <h4 className="text-xl font-medium text-white mb-4">Marketing Campaign</h4>
              <p className="text-white mb-4">Series of promotional videos for a local business's social media campaign.</p>
              <p className="text-sm text-gray-300">Tools: Final Cut Pro, DaVinci Resolve</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://drive.google.com/file/d/1EZMs1lxlmcq7J9Ld6LndVnTVObOOqvjn/preview"
    allow="autoplay"
    />
   </div>
    </div>
  )
}

export default Projects
