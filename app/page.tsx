'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">KAYA</div>
          <div className="flex gap-4">
            <Link href="/login" className="text-black hover:text-gray-600 font-medium">
              Sign In
            </Link>
            <Link href="/register" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Create Account
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert Dermatology Care, Personalized For You
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Over 20 years of expertise in treating Indian skin. Access your medical records, track treatment progress, and maintain seamless care with Kaya.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/register"
                  className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800"
                >
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-black"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">🏥</div>
                <p>Expert Dermatology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Your Complete Skin Health Management System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4">
                📋
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Medical Records</h3>
              <p className="text-gray-600">
                Complete access to your consultation notes, treatment history, and prescriptions from every visit with our dermatologists.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4">
                📸
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Progress Tracking</h3>
              <p className="text-gray-600">
                Before & after gallery to visualize your skin's transformation. Compare results across treatments and timeline.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4">
                💊
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Medication Tracking</h3>
              <p className="text-gray-600">
                Smart reminders for prescribed medications. Log your daily intake and get nudges based on your treatment schedule.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4">
                📅
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Appointment Management</h3>
              <p className="text-gray-600">
                Manage your appointments with expert dermatologists. Get reminders and reschedule with ease.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4">
                🎁
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Loyalty Rewards</h3>
              <p className="text-gray-600">
                Earn points on every visit and treatment. Unlock exclusive discounts, free consultations, and VIP benefits.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4">
                🤖
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">AI Assistant</h3>
              <p className="text-gray-600">
                Get instant answers to common dermatology questions. Our AI chatbot is trained on Kaya's expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Kaya?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-gray-300">Years of Dermatology Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Research</div>
              <p className="text-gray-300">Developed for Indian Skin</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Expert</div>
              <p className="text-gray-300">Board-Certified Dermatologists</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Take Control of Your Skin Health?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of patients managing their dermatology care with Kaya.
          </p>
          <Link
            href="/register"
            className="bg-black text-white px-8 py-4 rounded font-semibold text-lg hover:bg-gray-800 inline-block"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Kaya Skin Clinic. Expert Dermatology Care.</p>
        </div>
      </footer>
    </div>
  );
}
