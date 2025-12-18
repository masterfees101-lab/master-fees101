import { Mail, MessageCircle, Phone, BookOpen, Search } from "lucide-react";

export default function CustomerSupport() {
  return (
    <div className="bg-white p-10 h-screen rounded-md overflow-auto font-sans">
      <div className="max-w-[1400px]">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-[48px] font-bold text-[#003630] mb-6 leading-tight">
            How can we help?
          </h1>
          <p className="text-xl text-black font-normal">
            Get answers, find resources, or connect with our support team
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-24">
          <div className="relative max-w-[800px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              className="w-full pl-16 pr-6 h-20 rounded-2xl outline-none shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-gray-600 text-lg placeholder:text-gray-400 border border-gray-100"
            />
          </div>
        </div>

        {/* Get in Touch Section */}
        <section>
          <h2 className="text-[32px] font-bold text-black mb-10">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Live Chat */}
            <div className="border border-gray-200 p-8 rounded-[32px] flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#003630] rounded-2xl flex items-center justify-center">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold text-black mb-2">Live Chat</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Chat with our
                  <br />
                  support team in real-
                  <br />
                  time
                </p>
                <button className="text-[#003630] font-bold text-lg hover:underline">
                  Start Chat
                </button>
              </div>
            </div>

            {/* Email Support */}
            <div className="border border-gray-200 p-8 rounded-[32px] flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#003630] rounded-2xl flex items-center justify-center">
                <Mail className="text-white w-5 h-5" />
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold text-black mb-2">
                  Email Support
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Send us a<br />
                  detailed message
                </p>
                <button className="text-[#003630] font-bold text-lg hover:underline">
                  Send Email
                </button>
              </div>
            </div>

            {/* Phone Support */}
            <div className="border border-gray-200 p-8 rounded-[32px] flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#003630] rounded-2xl flex items-center justify-center">
                <Phone className="text-white w-5 h-5" />
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold text-black mb-2">
                  Phone Support
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Speak directly with
                  <br />a specialist
                </p>
                <button className="text-[#003630] font-bold text-lg hover:underline">
                  Call Now
                </button>
              </div>
            </div>

            {/* Documentation */}
            <div className="border border-gray-200 p-8 rounded-[32px] flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#003630] rounded-2xl flex items-center justify-center">
                <BookOpen className="text-white w-5 h-5" />
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold text-black mb-2">
                  Documentation
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Browse our
                  <br />
                  comprehensive
                  <br />
                  guides
                </p>
                <button className="text-[#003630] font-bold text-lg hover:underline">
                  View Docs
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
