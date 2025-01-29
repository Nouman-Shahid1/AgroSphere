
const Features = () => {
    return (
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-5xl font-bold text-green-700 mb-4">
              Why AgroSphere Stands Out
            </h1>
            <p className="pt-4 text-lg text-black max-w-2xl mx-auto">
              Revolutionizing agriculture through technology and sustainability
            </p>
          </div>
  
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                
                title: 'Smart Farming',
                text: 'AI-powered insights and IoT integration for precision agriculture and optimal resource management.'
              },
              {
               
                title: 'Eco Innovation',
                text: 'Sustainable practices that increase yield while preserving natural ecosystems.'
              },
              {
                
                title: 'Market Analytics',
                text: 'Real-time market data and predictive analytics to maximize your profits.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-green-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 border border-green-50 hover:border-green-100"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  {/* <div className="w-16 h-16 mb-6 rounded-2xl bg-green-500/10 flex items-center justify-center text-3xl transition-colors duration-300 group-hover:bg-green-500/20">
                    {feature.icon}
                  </div> */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Decorative elements */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4">
              <div className="h-2 w-8 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="h-2 w-8 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
              <div className="h-2 w-8 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;