import { FaLinkedin, FaGithub, FaInstagram, FaGoogle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mt-8 mb-20 flex items-center justify-between py-6">
    <h1 className="text-3xl font-medium">Portfolio</h1>
    <div className="mr-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/hongdnn/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
    </a>
    <a href="mailto:namhongdoan99@gmail.com">
        <FaGoogle />
    </a>
    <a href="https://github.com/hongdnn" target="_blank" rel="noopener noreferrer">
        <FaGithub />
    </a>
    <a href="https://www.instagram.com/hongdnn/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
    </a>
    <a href="https://x.com/DoanNgNamHong" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter />
    </a>
    </div>
  </nav>
}

export default Navbar