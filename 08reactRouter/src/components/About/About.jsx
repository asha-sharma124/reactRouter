import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                     As we know, React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It's widely used for creating dynamic and interactive web applications
                      </p>
                      <p className="mt-4 text-gray-600">
                      It uses a component-based architecture, a virtual DOM for performance optimization, and JSX for expressive syntax. With state management, lifecycle methods, and hooks, React enables the creation of dynamic and efficient web applications.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}