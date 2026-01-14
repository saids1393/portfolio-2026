import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Contact</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-gray-700 flex-1">
              <p className="font-semibold text-gray-900 mb-1">Email :</p>
              <a
                href="mailto:soidroudinesaid51@gmail.com"
                className="text-indigo-600 hover:text-indigo-700"
              >
                soidroudinesaid51@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-gray-700 flex-1">
              <p className="font-semibold text-gray-900 mb-1">Téléphone :</p>
              <a
                href="tel:+33766445427"
                className="text-indigo-600 hover:text-indigo-700"
              >
                +33 7 66 44 54 27
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
