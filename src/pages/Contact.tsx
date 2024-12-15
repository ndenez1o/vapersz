function Contact () {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Contacto</h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-2">Nombre</label>
                        <input type="text" id="name" className="w-full border border-gray-400 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2">Correo electrónico</label>
                        <input type="email" id="email" className="w-full border border-gray-400 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-bold mb-2">Mensaje</label>
                        <textarea id="message" className="w-full border border-gray-400 p-2 rounded" rows={4} />
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact