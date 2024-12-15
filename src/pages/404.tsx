import NotFound from '../assets/bgs/NotFound.svg';

function PageNotFound() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${NotFound})` }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                <h1 className="text-6xl font-bold">ERROR 404</h1>
                <p className="text-xl mt-4">Lo sentimos, la página que buscás no ha sido encontrada.</p>
                <a href="/" className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Volver al inicio</a>
            </div>
        </div>
    );
}

export default PageNotFound;
