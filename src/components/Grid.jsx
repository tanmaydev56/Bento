import Spline from "@splinetool/react-spline";

const Grid = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#121212] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-around items-start w-full px-4 md:px-0">
     
        <div className="flex flex-col justify-around w-full md:w-[600px] mb-2">
          <div className="flex justify-center">
            <div className="w-full h-[790px] mt-10 ">
              <Spline  scene="https://prod.spline.design/oNQfDl6s3Ran6MK3/scene.splinecode" />
            </div>
          </div>
        </div>

   
        <div className="flex flex-col gap-16 w-full md:w-[700px]">
          <div className="relative w-full h-[400px] bg-[#121212]">
            <video
              className="w-full h-full rounded-[20px]  bg-[#121212]"
              autoPlay
              loop
              muted
              playsInline
              src="/3d-carousel.zip.mp4"
            />
          </div>

        
          <div className="flex flex-col md:flex-row justify-center gap-6">
            
            <div className="w-full z-[2] md:w-[361px] flex-shrink-0 rounded-[20px] bg-[#E9EEE9] flex flex-col justify-between shadow-lg">
              <img
                className=" absolute h-[305px] z-[-1] w-[361px] rounded-[20px] object-cover"
                src="/pexels-cottonbro-6153354.jpg"
                alt="Artificial Intelligence"
              />
              <div className="w-full flex flex-col gap-5 p-4">
                <h2 className="font-bold text-white text-[31px] leading-13">
                  Artificial Intelligence
                </h2>
                <p className="text-white text-[23px] font-bold">
                  Explore our range of AI-driven solutions designed to enhance efficiency and drive innovation in your business.
                  {/* Additional content can be added here */}
                </p>
              </div>
            </div>

       
            <div className="w-full md:w-[361px] flex-shrink-0 rounded-[20px] bg-[#c4c4c4] flex flex-col justify-between shadow-lg">
              <div className="w-full flex flex-col gap-5 p-4">
                <h2 className="font-bold text-white text-[31px]">
                  Intelligent Resource
                </h2>
                <p className="text-white text-[23px] font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi tempora, in officia unde tenetur aut, quasi expedita labore saepe optio temporibus ad.
                  {/* Additional content can be added here */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;