'use client';
import React from 'react';

const CardPulseBorder = ({ title, description, tools }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Animated Border */}
      <div className="absolute top-0 flex w-full justify-center">
        <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-800 bg-gradient-to-b from-gray-950 to-black p-6">
        <h4 className="text-xl font-medium text-white">{title}</h4>
        <p className="text-white text-center">{description}</p>
        <p className="text-sm text-gray-300">{tools}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="Projects" className="flex min-h-screen flex-col items-center justify-start py-32 px-10 gap-16 font-poppins">
      {/* Title */}
      <h2 className="text-center text-4xl py-11 font-light text-white md:text-6xl drop-shadow-[0_0_0.2rem_#ffffff70]">
        My Projects
      </h2>

      {/* Coding Projects Section */}
      <div className="w-full max-w-6xl">
        <h3 className="text-center text-2xl font-medium text-gray-300 mb-8">Coding Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <CardPulseBorder
            title="AI Playlist Generator"
            description="A smart AI-powered playlist generator built using Java. It curates personalized playlists based on user preferences."
            tools="Technologies: Java, Eclipse, GitHub"
          />
          <CardPulseBorder
            title="AI Budget Tracker"
            description="A Python-based budget tracking app with an AI-powered chatbot assistant to provide spending insights."
            tools="Technologies: Python, Tkinter, ChatGPT API"
          />
        </div>
      </div>

      {/* Multimedia Marketing Section */}
      <div className="w-full max-w-6xl">
        <h3 className="text-center text-2xl font-medium text-gray-300 mb-8">Multimedia Marketing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <CardPulseBorder
            title="Photography Portfolio"
            description="A curated collection of event photography covering major university functions and student activities."
            tools="Tools: Adobe Lightroom, Photoshop"
          />
          <CardPulseBorder
            title="Marketing Campaigns"
            description="Designed and executed marketing strategies for student organizations, enhancing outreach and engagement."
            tools="Tools: Canva, Final Cut Pro, Social Media Ads"
          />
        </div>
      </div>

      {/* Video Section (Kept Exactly as You Originally Had It) */}
      <div className="w-full relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://drive.google.com/file/d/1EZMs1lxlmcq7J9Ld6LndVnTVObOOqvjn/preview"
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export default Projects;
