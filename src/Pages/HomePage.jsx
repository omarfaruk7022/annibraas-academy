"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GraduationCap,
  Book,
  Users,
  Search,
  ChevronRight,
  Globe,
  Clock,
  Award,
  Code,
} from "lucide-react";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpeg";
import avatar from "../assets/images/avatar.jpeg";

function WaveGrid() {
  const meshRef = useRef();
  const geometry = new THREE.PlaneGeometry(30, 30, 50, 50);
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ff80,
    wireframe: true,
    side: THREE.DoubleSide,
  });

  useFrame(({ clock }) => {
    const positions = meshRef.current.geometry.attributes.position;
    const time = clock.getElapsedTime();

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = 0.5 * Math.sin(x + time) * Math.cos(y + time);
      positions.setZ(i, z);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 3, 0, 0]}
      position={[0, -2, 0]}
      geometry={geometry}
      material={material}
    />
  );
}

export default function EnhancedHomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-900 text-white">
      <main className="flex-grow">
        <section className="h-screen relative bg-gradient-to-b from-gray-900 to-green-900 overflow-hidden">
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <WaveGrid />
            </Canvas>
          </div>
          <header className=" mx-auto container shadow-sm">
            <div className="  px-4 py-4 flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-green-600">
                  Annibrass Academy
                </span>
              </Link>
              <Button className="hidden md:inline-flex bg-green-600 text-white hover:bg-green-700 focus:outline-none">
                Sign Up
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </header>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
                Let&apos;s Build Your Future in An-nibrass
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Transform your career with cutting-edge courses at An-nibrass
                Academy
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 text-white hover:bg-green-600 text-lg px-8 py-6">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-lg px-8 py-6"
                >
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm flex flex-col items-center animate-bounce">
            <span className="mb-2">Scroll</span>
            <ChevronRight className="h-4 w-4 rotate-90" />
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        {/* Featured Courses Section */}
        {/* <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((course) => (
                <div
                  key={course}
                  className=" rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                >
                  <img
                    src={heroImage}
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
        </section> */}
        <section className="py-40 bg-gradient-to-b from-green-900 to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Web Development Mastery", icon: Code },
                { title: "Data Science Fundamentals", icon: Globe },
                { title: "Mobile App Development", icon: Users },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border border-green-500/30"
                >
                  <div className="p-10 flex flex-col items-center">
                    <course.icon className="h-16 w-16 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      {course.title}
                    </h3>
                    <p className="text-gray-100 mb-4 text-center">
                      Master the latest technologies and advance your career.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-auto text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-900"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Approach to Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Book className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Comprehensive Curriculum
                </h3>
                <p>
                  Carefully crafted courses covering all aspects of your chosen
                  field.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Expert Instructors
                </h3>
                <p>
                  Learn from industry professionals with years of experience.
                </p>
              </div>
              <div className="text-center">
                <GraduationCap className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
                <p>
                  Gain hands-on experience through projects and real-world
                  applications.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-40 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
              Our Approach to Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Comprehensive Curriculum",
                  icon: Book,
                  description:
                    "Carefully crafted courses covering all aspects of your chosen field.",
                },
                {
                  title: "Expert Instructors",
                  icon: Users,
                  description:
                    "Learn from industry professionals with years of experience.",
                },
                {
                  title: "Practical Skills",
                  icon: GraduationCap,
                  description:
                    "Gain hands-on experience through projects and real-world applications.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800 p-8 rounded-lg shadow-lg"
                >
                  <item.icon className="h-16 w-16 mx-auto mb-4 text-green-400" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Annibrass Academy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Globe className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                <p>Connect with learners from around the world.</p>
              </div>
              <div className="text-center">
                <Clock className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Flexible Learning
                </h3>
                <p>Study at your own pace, anytime, anywhere.</p>
              </div>
              <div className="text-center">
                <Award className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Recognized Certificates
                </h3>
                <p>Earn certificates valued by top employers.</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Career Support</h3>
                <p>Get guidance to advance your professional journey.</p>
              </div>
            </div>
          </div>
  
  </section> */}
        <section className="py-40 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
              Why Choose Annibrass Academy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Global Community",
                  icon: Globe,
                  description: "Connect with learners from around the world.",
                },
                {
                  title: "Flexible Learning",
                  icon: Clock,
                  description: "Study at your own pace, anytime, anywhere.",
                },
                {
                  title: "Recognized Certificates",
                  icon: Award,
                  description: "Earn certificates valued by top employers.",
                },
                {
                  title: "Career Support",
                  icon: Users,
                  description:
                    "Get guidance to advance your professional journey.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-green-400" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="py-20">
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
                      src={avatar}
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
        </section> */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <WaveGrid />
            </Canvas>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of students and begin your educational journey
              today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 bg-gray-800 text-white placeholder-gray-400 border-green-500 focus:border-green-400"
              />
              <Button className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* <section className="py-20 bg-gradient-to-r from-pink-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((event) => (
                <div
                  key={event}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={heroImage}
                    alt={`Event ${event}`}
                    className="w-full h-48 object-cover "
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Webinar: Future of AI
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join us for an insightful discussion on the future of AI
                      and its impact on various industries.
                    </p>
                    <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">
                      Register Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
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
        </section> */}
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                About Us
              </h3>
              <p className="text-gray-300">
                Annibrass Academy is dedicated to providing high-quality online
                education to learners worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
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
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
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
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
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
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                Newsletter
              </h3>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest courses and offers.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none bg-gray-700 text-white placeholder-gray-400 border-green-500 focus:border-green-400"
                />
                <Button className="rounded-l-none bg-green-500 hover:bg-green-600">
                  Subscribe
                </Button>
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
