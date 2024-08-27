import Image from "next/image";

import ibama_logo from "@/assets/logos/ibama_logo.png";
import petrobras_logo from "@/assets/logos/petrobras_logo.png";
import ipead_nova_logo from "@/assets/logos/logo_ipead_nova.png";
import uenf_logo from "@/assets/logos/uenf.png";

export function Footer() {
  return (
    <footer className="flex gap-8 items-center justify-center max-[980px]:flex-col">
      <Image src="https://pescarte.org.br/images/footer_logos-6519e6e1efc1c537d749b6d6b88cd649.png" alt="Footer Pescarte" width={4000} height={100}/>

    {/* <div className="flex justify-center gap-8 max-[550px]:flex-col max-[550px]:items-center">
    //     <Image src={ibama_logo} className="w-full h-auto" width={46} height={40} alt="" />
    //     <Image src={uenf_logo} className="w-full h-auto" width={62} height={40} alt="" />
    //     <Image src={petrobras_logo} className="w-full h-auto" width={142} height={80} alt="" />
    //     <Image src={ipead_nova_logo} className="w-full h-auto" width={186} height={80} alt="" priority={true}/>
    //   </div>
    //   <p className="max-w-[405px] text-lg font-semibold text-black  max-[980px]:text-center">
    //     A realização do Projeto Pescarte é uma medida de mitigação exigida pelo
    //     licenciamento ambiental federal, conduzido pelo IBAMA.
    //   </p> */}
    </footer>
  );
}
