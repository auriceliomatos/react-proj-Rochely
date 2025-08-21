//const img1 = "https://cs210033fff90d2f7ac.s3.us-east-1.amazonaws.com/sodine/banner/2025-01-21T11:36:01.358_124.avif";

import img2 from "../../../src/assets/img/f2.jpeg";

export const Papel = () => {
  return (
    <div className="relative w-full flex items-center justify-center bg-white">
      <img
        src={img2}
        alt="img1"
        className="w-full sm:h-60 md:h-80 lg:h-100 opacity-80 
        transition delay-150 duration-700 ease-in-out hover:-translate-x-1 hover:scale-102 
        "
      />
    </div>
  )
}

