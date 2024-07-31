import React from 'react'

const Contact = () => {
  return (
    <main>
        <section className='container mx-auto text-gray-300 p-4'>
  <h2 className="text-xl lg:text-3xl relative font-semibold text-center my-6">
    <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-700 rounded-full mx-auto w-1/4 transform translate-y-2"></span>
    <span className="text-custom-green font-semibold mr-2 ">&#8212;</span>
    Get {" "}
    <span className="text-custom-green font-bold">in Touch</span>
  </h2>
  <div className="max-w-lg mx-auto">
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium my-1 text-gray-200">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-700 rounded-md bg-transparent  text-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-green"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200 my-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-700 rounded-md bg-transparent  text-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-green"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-200 my-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border border-gray-700 rounded-md bg-transparent text-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-green"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-custom-green text-white font-semibold rounded-md shadow-md hover:bg-custom-green-dark focus:outline-none focus:ring-2 focus:ring-custom-green-dark"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>

    </main>
  )
}

export default Contact
