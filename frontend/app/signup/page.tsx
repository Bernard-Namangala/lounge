import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 text-light-50 overflow-hidden flex items-center justify-center px-4 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] right-[10%] w-[60%] h-[60%] rounded-full bg-accent-DEFAULT/5 blur-[100px]"></div>
        <div className="absolute -bottom-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary-DEFAULT/5 blur-[100px]"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Glow effect behind card */}
        <div className="absolute inset-0 -z-10 blur-[80px] opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-accent-DEFAULT/20"></div>
        </div>

        <div className="relative z-10 bg-gradient-to-br from-dark-800/90 to-dark-700/90 backdrop-blur-md p-10 rounded-2xl border border-dark-600 shadow-xl shadow-dark-900/50">
          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-block px-3 py-1 mb-2 rounded-full bg-dark-700/50 border border-dark-600 backdrop-blur-sm">
              <span className="text-accent-light text-sm font-medium">
                Join the community
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-light-50 to-light-300">
              Create an account
            </h1>

            <p className="text-sm text-light-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-accent-light hover:text-accent-DEFAULT transition-colors font-medium"
              >
                Log in
              </Link>
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-light-200 mb-2 transition-colors group-focus-within:text-accent-light"
                  >
                    First name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="w-full py-3 pl-9 pr-3 bg-dark-700/70 border border-dark-600 rounded-lg text-light-50 placeholder:text-light-500 focus:outline-none focus:ring-2 focus:ring-accent-DEFAULT/50 focus:border-accent-DEFAULT transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-light-200 mb-2 transition-colors group-focus-within:text-accent-light"
                  >
                    Last name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="w-full py-3 pl-9 pr-3 bg-dark-700/70 border border-dark-600 rounded-lg text-light-50 placeholder:text-light-500 focus:outline-none focus:ring-2 focus:ring-accent-DEFAULT/50 focus:border-accent-DEFAULT transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-200 mb-2 transition-colors group-focus-within:text-accent-light"
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full py-3 pl-10 pr-4 bg-dark-700/70 border border-dark-600 rounded-lg text-light-50 placeholder:text-light-500 focus:outline-none focus:ring-2 focus:ring-accent-DEFAULT/50 focus:border-accent-DEFAULT transition-all duration-300"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-light-200 mb-2 transition-colors group-focus-within:text-accent-light"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="w-full py-3 pl-10 pr-4 bg-dark-700/70 border border-dark-600 rounded-lg text-light-50 placeholder:text-light-500 focus:outline-none focus:ring-2 focus:ring-accent-DEFAULT/50 focus:border-accent-DEFAULT transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>
                <p className="mt-1.5 text-xs text-light-400 flex items-center">
                  <svg
                    className="w-3 h-3 mr-1 text-accent-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Must be at least 8 characters long
                </p>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <div className="relative">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-dark-600 bg-dark-700 text-accent-DEFAULT focus:ring-accent-DEFAULT focus:ring-offset-dark-800 transition-colors"
                />
                <div className="absolute inset-0 bg-accent-DEFAULT/20 scale-0 rounded-sm opacity-0 transition-transform duration-200 peer-checked:scale-100 peer-checked:opacity-100"></div>
              </div>
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-light-400"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-accent-light hover:text-accent-DEFAULT transition-colors"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-accent-light hover:text-accent-DEFAULT transition-colors"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-accent-DEFAULT hover:bg-accent-dark text-white rounded-lg transition-all duration-300 shadow-lg shadow-accent-DEFAULT/20 hover:shadow-xl hover:shadow-accent-DEFAULT/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-dark-800 mt-6"
            >
              Create account
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-dark-800/50 text-light-400 backdrop-blur-sm">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center py-2.5 px-4 bg-dark-700/70 hover:bg-dark-600/70 text-light-200 rounded-lg border border-dark-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center py-2.5 px-4 bg-dark-700/70 hover:bg-dark-600/70 text-light-200 rounded-lg border border-dark-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.236-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
