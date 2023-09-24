import VideoPlayer from "@/app/components/video-player";
import Circularbutton from "@/app/components/circular-button";
function BienestarUniversitarioPage() {
  const videoUrl =
    "https://drive.google.com/uc?id=12UmVcV_XpDeF7V2PhrMQ0opcDXSwCZiJ";
  const videoWidth = "74%";
  const videoHeight = "380";
  return (
    <>
      <div>
        <h1 className="text-center mt-4 text-4xl font-bold text-white">
          <p>Cajas</p>
        </h1>
      </div>
      <div className="grid grid-cols-9 w-full px-16 gap-x-8">
        <div className="col-span-4 bg-green">
          <h2 className="text-center mt-4 text-2xl font-bold text-white mb-2">
            Ubicación
          </h2>
          <div className="grid justify-items-center">
            <VideoPlayer
              url={videoUrl}
              width={videoWidth}
              height={videoHeight}
            />
          </div>
        </div>
        <div className="col-span-5 grid grid-cols-2 gap-16 p-8 h-fit mt-6">
          <div className="bg-[#898989] rounded-2xl p-4 text-white my-auto shadow-lg h-full">
            <h3 className="text-center text-2xl font-bold mb-2">Requisitos</h3>
            <ul className="text-xl p-6 pt-2 text-center">
              <li>Carnet de Identidad</li>
              <li>
                <h3 className="text-center text-2xl font-bold mb-2 mt-4">
                  Contactos
                </h3>
              </li>
              <li>Teléfonos: 2001800 </li>
              <li>2246725</li>
              <li>2246726</li>
              <li>Whatsapp: +59177277872</li>
            </ul>
          </div>
          <div className="bg-[#898989] rounded-2xl p-4 text-white my-auto shadow-lg h-full">
            <h3 className="text-center text-2xl font-bold mb-2">
              Horarios de atención
            </h3>
            <ul className="text-xl p-6 pt-2 text-center">
              <li>Lunes a Viernes: 08:00 a 19:00</li>
              <li>Sabado: 08:00 a 12:00</li>
              <li>
                <h3 className="text-center text-2xl font-bold mb-2 mt-4">
                  Ubicación
                </h3>
              </li>
              <li>Torre inovación</li>
              <li>Planta Baja</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-10 text-4xl font-bold text-white">
          Servicios de Cajas
        </h1>
        <div className="flex flex-row m-10 mt-4 mb-0 justify-evenly">
          <Circularbutton
            imageUrl={
              "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
            }
            text={"Cobro de Colegiatura"}
            routeUrl="/administracion/cajas/servicios"
          />
          <Circularbutton
            imageUrl={
              "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
            }
            text={"Cobro de Trámites"}
            routeUrl="/administracion/cajas/servicios"
          />
          <Circularbutton
            imageUrl={
              "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
            }
            text={"Cobro de Cheques"}
            routeUrl="/administracion/cajas/servicios"
          />
        </div>
      </div>
    </>
  );
}

export default BienestarUniversitarioPage;