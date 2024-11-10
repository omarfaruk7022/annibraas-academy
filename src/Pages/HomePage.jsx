"use client";

import { Button } from "@/components/ui/button";
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
import heroImage from "../assets/images/hero.jpeg";
import avatar from "../assets/images/avatar.jpeg";
import Footer from "../components/common/Footer";
import SendMail from "../components/home/SendMail";
import Header from "../components/common/Header";

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

          <div className="relative">
            <Header />
          </div>

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

        <section className="pb-40 bg-gray-900">
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

        <SendMail />
      </main>

      <Footer />
    </div>
  );
}
