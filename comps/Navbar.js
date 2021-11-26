import Image from 'next/image'
const Navbar = () => {
    return (
      <nav>
        <div className="logo">
        <Image src="/picture.jpg" alt="site logo" width={230} height={265} />
        </div>
        <a>Perez Govender</a>
        
      </nav>
  );
  }
   
  export default Navbar;