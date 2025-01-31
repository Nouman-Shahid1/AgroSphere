import Footer from "@/src/Components/Footer/Footer";
import Navbar from "@/src/Components/Navbar/Navbar";

export default function Contact() {
    return (
      <>
      <Navbar/>
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl text-green-900 font-extrabold text-gray-900 sm:text-5xl">
                Get in Touch with Agro-Sphere
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We'd love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help.
              </p>
            </div>
  
            <div className="mt-12 flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0">
             
              <div className="bg-white p-8 rounded-lg shadow-md flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Contact Form</h3>
                <p className="mt-2 text-gray-600">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form action="#" method="POST" className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
  
              <div className="bg-white p-8 rounded-lg shadow-md flex-1 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Contact Information</h3>
                <p className="text-gray-600">
                  Reach out to us using any of the details below. We’re available Monday to Friday, 9:00 AM to 6:00 PM.
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                  <p className="mt-2 text-gray-600">
                    Agro-Sphere Headquarters<br />
                    123 Green Lane, Agro City,<br />
                    Lahore, Pakistan
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <p className="mt-2 text-gray-600">+92-312-3456789</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="mt-2 text-gray-600">info@agro-sphere.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Social Media</h4>
                  <p className="mt-2 text-gray-600">
                    Follow us on{' '}
                    <a href="#" className="text-green-600 hover:underline">
                      Facebook
                    </a>,{' '}
                    <a href="#" className="text-green-600 hover:underline">
                      Instagram
                    </a>, and{' '}
                    <a href="#" className="text-green-600 hover:underline">
                      Twitter
                    </a>.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Map */}
            <div className="mt-24">
              <h3 className="text-3xl font-bold text-gray-900 text-center">
                Visit Our Office
              </h3>
              <p className="mt-4 text-lg text-gray-600 text-center">
                Here’s where you can find us.
              </p>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5235034579587!2d74.358747!3d31.520369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045eaaaaaaab%3A0x74d157f1d9923bc7!2sLahore!5e0!3m2!1sen!2s!4v1685012345678"
                  width="100%"
                  height="400"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
  
            <div className="mt-24 bg-green-900 text-white p-12 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-bold">Have Questions?</h3>
              <p className="mt-4 text-lg">
                Our team is ready to assist you. Contact us today for inquiries or support.
              </p>
              <button className="mt-6 bg-white text-green-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
  