import BGInfo from '../../assets/bg.jpg'
function InfoSection() {
  return (
    <div
      className="text-white py-20 px-6 text-center min-h-[700px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${BGInfo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto max-w-3xl bg-black rounded opacity-90">
        <h2 className="text-3xl font-bold mb-4">Información Importante</h2>
        <p className="text-lg mb-6">
          Aquí puedes poner alguna información relevante o promociones especiales.
        </p>
        {/* Puedes agregar más contenido o estilos aquí según sea necesario */}
      </div>
    </div>
  );
}

export default InfoSection;
