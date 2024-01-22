import Image from "next/image";

const Chessiitk = () => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/chess.png'} width={737} height={678} alt='' className='translate-z-0 w-full h-full'/>
  </div>
  );
};

export default Chessiitk;
