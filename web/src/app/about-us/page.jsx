import Footer from '@/src/Components/Footer/Footer';
import Navbar from '@/src/Components/Navbar/Navbar';
import Image from 'next/image';

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl text-green-900 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Welcome to Agro-Sphere
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your one-stop agriculture mart, providing innovative solutions, premium-quality products, and expert guidance to farmers and agricultural enthusiasts.
          </p>
        </div>
        <div className="relative mt-12">
          <Image
            src="/about.png"
            alt="Agriculture field"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg mx-auto"
          />
          <p className="absolute top-4 left-4 bg-green-600 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow">
            Empowering Farmers, Growing Futures
          </p>
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To enhance the agricultural experience by delivering innovative tools, sustainable resources, and expert guidance to boost productivity and ensure success.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To revolutionize agriculture by creating a global platform where farmers connect, learn, and access premium products that drive meaningful impact.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Innovation with purpose</li>
              <li>Commitment to sustainability</li>
              <li>Empowering farming communities</li>
              <li>Integrity in every interaction</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 bg-green-100 p-12 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-900">Our Journey</h3>
          <div className="mt-8 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center">
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                Agro-Sphere began with a vision to address the challenges faced by farmers in accessing reliable resources and guidance. Over the years, we’ve grown into a trusted platform, partnering with industry leaders to bring the latest agricultural technologies to your doorstep.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                From seeds to machinery, from fertilizers to expert advice, we’ve got everything you need to make your farming journey successful. Our goal is to make agriculture smarter, more efficient, and sustainable for future generations.
              </p>
            </div>
            <div className="relative flex-1 h-80">
              <Image
                src="/about-2.jpg"
                alt="Farmer in the field"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-900">What Farmers Say</h3>
          <div className="mt-12 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            {[
              {
                name: 'Ali Khan',
                feedback:
                  'Agro-Sphere has completely transformed how I manage my farm. Their products are top-notch, and the support team is always helpful.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOGJ805NtKTASqdFa7LX7kY-WZOHRqWm44w&s',
              },
              {
                name: 'Sara Ahmed',
                feedback:
                  'I love how Agro-Sphere combines technology with farming. It’s a game-changer for small-scale farmers like me.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbvVtNRfBEa2HybaMCEexiKo_NX6E61yXow&s',
              },
              {
                name: 'John Doe',
                feedback:
                  'The quality of seeds and fertilizers I get here is unmatched. My yields have doubled since I started shopping with Agro-Sphere!',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOGJ805NtKTASqdFa7LX7kY-WZOHRqWm44w&s',
              },
            ].map(({ name, feedback, image }) => (
              <div key={name} className="bg-white p-6 rounded-lg shadow-md text-center flex-1">
                <Image
                  src={image}
                  alt={name}
                  width={80}
                  height={80}
                  className="mx-auto rounded-full"
                />
                <h4 className="mt-4 text-lg font-medium text-gray-900">{name}</h4>
                <p className="mt-2 text-gray-600">{feedback}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-green-900 text-white p-12 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold">Join the Agro-Sphere Community</h3>
          <p className="mt-4 text-lg">
            Be a part of a global movement to revolutionize agriculture. Explore our products, connect with experts, and grow smarter.
          </p>
          <button className="mt-6 bg-white text-green-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default page;
