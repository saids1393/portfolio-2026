const Contact = () => {
    return (
      <section id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center z-0">
        <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
          <h2 className="text-center text-5xl md:text-7xl">
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
      Go !
            </span>
          </h2>
            <p className="text-center text-lg font-semibold text-gray-500">
            Envie de discuter ? 
            Envoyez-moi un e-mail via ce bouton et je répondrais dès que je pourrais.
            </p>
            <a href="mailto:soidroudinesaid51@gmail.com" className='text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600'>
              Contactez-Moi
            </a>
        </div>
      </section>
    )
  }

  export default Contact
