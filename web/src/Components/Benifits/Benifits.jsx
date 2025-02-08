
  
export default function Benefits() {
    return (
      <section className="bg-green-100 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-green-700 mb-8">
  Benefits of Using AgroSphere
</h2>

            <p className="text-xl text-black max-w-2xl mx-auto">
              Transforming agriculture through innovation and sustainable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
           
            <div className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="w-16 h-16 mb-6 rounded-xl bg-emerald-600/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Smart Farming Tech</h3>
                <p className="text-emerald-700/90 leading-relaxed">
                  AI-powered insights and IoT integration optimize crop yields and resource management
                </p>
              </div>
            </div>

            
            <div className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="w-16 h-16 mb-6 rounded-xl bg-emerald-600/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Eco-First Approach</h3>
                <p className="text-emerald-700/90 leading-relaxed">
                  Sustainable practices that reduce environmental impact while boosting productivity
                </p>
              </div>
            </div>

           
            <div className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="w-16 h-16 mb-6 rounded-xl bg-emerald-600/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Grower Community</h3>
                <p className="text-emerald-700/90 leading-relaxed">
                  Collaborative platform connecting farmers with experts and market insights
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-200">
              Start Your Smart Farming Journey
            </button>
          </div>
        </div>
      </section>
    );
}