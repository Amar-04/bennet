"use client";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#D7E48E] py-16 px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2">CONTACT US</h1>
          <h2 className="text-4xl font-bold mb-4">Drop a Message Here</h2>
          <p className="text-black">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email, Phone, First Name, Last Name */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NO."
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </div>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </div>
          </div>

          {/* Subject and Message */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="subject"
                placeholder="SUBJECT"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="WRITE MESSAGE"
                rows="1"
                required
                className="w-full px-4 py-3 rounded-md bg-white border border-black/50"
              ></textarea>
            </div>
          </div>

          {/* Footer and Submit */}
          <div className="text-sm text-black">
            Your email address will not be published. Required fields are marked
            *
          </div>
          <div>
            <button
              type="submit"
              className="w-32 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
