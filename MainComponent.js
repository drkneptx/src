function MainComponent() {
        </div>
      </nav>

      {/* Side Navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === section
                ? "bg-purple-400 w-4 h-4"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="text-center z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lalit Dubey | DRK Egoist
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Content Creator | Editor | Gamer
          </h2>
          <p className="text-lg md:text-xl text-purple-400 italic">
            "Wanted to be the richest in my family."
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-[#1a1a1a] p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
            <p className="mb-4">
              I'm a passionate content creator and editor specializing in gaming
              content. With expertise in creating engaging reels and montages, I
              bring gaming moments to life through creative editing and smooth
              transitions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-purple-400"></i>
                <span>Location: India</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-clock text-purple-400"></i>
                <span>Experience: 3+ years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center py-20 px-4"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Alight Motion", icon: "fas fa-magic" },
              { title: "Fast Cuts & Transitions", icon: "fas fa-cut" },
              { title: "Reels & Montages", icon: "fas fa-film" },
              { title: "Commission Work", icon: "fas fa-handshake" },
            ].map((skill) => (
              <div
                key={skill.title}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <i
                  className={`${skill.icon} text-purple-400 text-2xl mb-4`}
