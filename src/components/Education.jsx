import React from "react";

const Education = () => {
  return (
    <main className="w-full flex justify-center bg-DARK pt-10">
      <div className="container flex justify-center items-center flex-col">
        <div className="text-RED01 font-bold text-5xl">Education</div>
        <div className="relative mt-8 md:w-[60%]">
          <div className=" px-1  ">
            <div className="border-l-4 border-RED01 text-white flex flex-col">
              <div className="flex flex-col pl-4">
                <span className="text-lg">2021 - Now</span>
                <span className="text-xl">INSTITUT TEKNOLOGI KALIMANTAN</span>
                <span className="text-base italic">Informatics</span>
                <p className="text-lg">
                  Jl. Soekarno Hatta No.KM 15, Karang Joang, Kec. Balikpapan Utara, Kota
                  Balikpapan, Kalimantan Timur
                </p>
              </div>
              <div className="flex flex-col pl-4 mt-6">
                <span className="text-lg">2018 - 2021</span>
                <span className="text-xl">SMA NEGERI 3 TARAKAN</span>
                <span className="text-base italic">Science</span>
                <p className="text-lg">
                  Jl. Pangeran Aji Iskandar, Juata Kerikil, Kec. Tarakan Utara, Kota
                  Tarakan Prov. Kalimantan Utara
                </p>
              </div>
            </div>

            {/* <div className="p-2  bg-RED01 rounded-full max-w-fit  ml-0 absolute top-1/2 -translate-y-1/2 "></div> */}
          </div>
          <div className="p-[6px]  bg-white rounded-full max-w-fit  absolute top-[25%] -translate-y-1/2 "></div>
          <div className="p-[6px]  bg-white rounded-full max-w-fit  absolute top-[75%] -translate-y-1/2 "></div>
        </div>
      </div>
    </main>
  );
};

export default Education;
