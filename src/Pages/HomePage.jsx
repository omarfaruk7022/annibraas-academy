import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Book, Users, Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">
              Annibrass Academy
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="#"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Courses
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-green-600 text-white hover:bg-green-700">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Unlock Your Potential with Annibrass Academy
              </h1>
              <p className="text-xl mb-6">
                Discover a world of knowledge with our expert-led courses.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((course) => (
                <div
                  key={course}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                >
                  <img
                    src={`https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={`Course ${course}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Course Title {course}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn the fundamentals and advance your skills.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">
                        $49.99
                      </span>
                      <Button
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <div
                  key={testimonial}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={`/placeholder.svg?height=50&width=50&text=Student+${testimonial}`}
                      alt={`Student ${testimonial}`}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">Student Name</h3>
                      <p className="text-gray-600 text-sm">Course Taken</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Annibrass Academy has transformed my learning experience.
                    The courses are engaging and the instructors are top-notch."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of students and begin your educational journey
              today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 bg-white text-gray-800 placeholder-gray-500"
              />
              <Button className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Annibrass Academy is dedicated to providing high-quality online
                education to learners worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest courses and offers.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 Annibrass Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
