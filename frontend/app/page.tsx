import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 text-light-50 overflow-hidden">
      {/* Hero Section with Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary-DEFAULT/5 blur-[100px]"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent-DEFAULT/5 blur-[100px]"></div>
        <div className="absolute top-[20%] left-[50%] w-[40%] h-[40%] rounded-full bg-primary-light/5 blur-[80px]"></div>
      </div>

      {/* Header Section */}
      <section className="relative px-4 py-28 sm:py-32 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-dark-700/50 border border-dark-600 backdrop-blur-sm">
            <span className="text-primary-light text-sm font-medium">
              The ultimate virtual hangout space
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight animate-fade-in">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light">
              Chill Lounge
            </span>
          </h1>

          <p className="text-xl text-light-300 max-w-2xl mx-auto animate-fade-in opacity-90">
            Your virtual hangout space for music, games, and good vibes. Create
            or join lounges, connect with friends, and enjoy shared experiences
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in">
            <Link
              href="/create-lounge"
              className="px-8 py-4 bg-primary-DEFAULT text-white rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary-DEFAULT/20 hover:shadow-xl hover:shadow-primary-DEFAULT/30 hover:-translate-y-0.5"
            >
              Create a Lounge
            </Link>
            <Link
              href="/explore"
              className="px-8 py-4 bg-dark-700/80 backdrop-blur-sm text-white rounded-lg hover:bg-dark-600 transition-all duration-300 border border-dark-600 hover:border-light-300/20 hover:-translate-y-0.5"
            >
              Explore Lounges
            </Link>
          </div>

          <div className="pt-16 pb-8 opacity-75">
            <div className="animate-bounce flex justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with Card Design */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-light-50 to-light-200">
            Everything You Need to Hang Out
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Music Feature */}
          <div className="group relative bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl border border-dark-600 hover:border-primary-light transition-all duration-300 hover:shadow-xl hover:shadow-primary-DEFAULT/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-DEFAULT/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-xl bg-primary-DEFAULT/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-7 w-7 text-primary-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-light-50 group-hover:text-primary-light transition-colors">
                Synchronized Music
              </h3>
              <p className="text-light-400 leading-relaxed">
                Listen to music together in real-time. Take turns being the DJ
                and create collaborative playlists with friends.
              </p>
            </div>
          </div>

          {/* Games Feature */}
          <div className="group relative bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl border border-dark-600 hover:border-accent-light transition-all duration-300 hover:shadow-xl hover:shadow-accent-DEFAULT/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-DEFAULT/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-xl bg-accent-DEFAULT/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-7 w-7 text-accent-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-light-50 group-hover:text-accent-light transition-colors">
                Multiplayer Games
              </h3>
              <p className="text-light-400 leading-relaxed">
                Enjoy card games, board games, and quick casual games with your
                lounge mates anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Chat Feature */}
          <div className="group relative bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl border border-dark-600 hover:border-primary-DEFAULT transition-all duration-300 hover:shadow-xl hover:shadow-success/10">
            <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative">
              <div className="h-14 w-14 rounded-xl bg-success/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-7 w-7 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-light-50 group-hover:text-success transition-colors">
                Real-time Chat
              </h3>
              <p className="text-light-400 leading-relaxed">
                Text and voice chat with emoji support, reactions, and thread
                replies for seamless communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div
          className="rounded-3xl p-10 text-center backdrop-blur-sm border border-dark-700"
          style={{
            background:
              "linear-gradient(to right, rgba(74, 77, 231, 0.08), rgba(45, 210, 192, 0.08))",
            backgroundColor: "#121214",
          }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-light-50 to-light-300">
            Join the Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="bg-dark-800/50 p-6 rounded-xl border border-dark-700 backdrop-blur-sm">
              <span className="block text-5xl font-bold text-primary-light mb-2">
                1000+
              </span>
              <span className="text-light-400">Active Lounges</span>
            </div>
            <div className="bg-dark-800/50 p-6 rounded-xl border border-dark-700 backdrop-blur-sm">
              <span className="block text-5xl font-bold text-accent-light mb-2">
                50K+
              </span>
              <span className="text-light-400">Happy Users</span>
            </div>
            <div className="bg-dark-800/50 p-6 rounded-xl border border-dark-700 backdrop-blur-sm">
              <span className="block text-5xl font-bold text-success mb-2">
                24/7
              </span>
              <span className="text-light-400">Always Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="relative z-10 bg-dark-800/60 backdrop-blur-md rounded-3xl border border-dark-600 p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-light-50">
            Ready to Join the Fun?
          </h2>
          <p className="text-xl text-light-300 mb-8 max-w-2xl mx-auto opacity-90">
            Create your own lounge or join existing ones. Start hanging out with
            friends in a whole new way today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-accent-DEFAULT to-accent-dark text-white rounded-lg hover:translate-y-[-2px] transition-all duration-300 shadow-lg shadow-accent-DEFAULT/20"
            >
              Get Started Free
            </Link>
            <Link
              href="/explore"
              className="px-8 py-4 bg-dark-700/80 backdrop-blur-sm text-white rounded-lg hover:bg-dark-600 transition-all duration-300 border border-dark-600"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute inset-0 -z-10 blur-[80px] opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-accent-DEFAULT/30"></div>
        </div>
      </section>
    </main>
  );
}
