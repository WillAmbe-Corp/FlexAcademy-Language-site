"Use Client";
import Link from "next/link";
// import Image from "next/image";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaTiktok } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-700 mb-6">
            At FlexAcademy, we provide comprehensive language training and
            immigration assistance. Join our community of learners today!
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://web.facebook.com/flexakademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              <FaFacebook size={28} />
            </Link>
            <Link
              href="https://wa.link/w051dx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-green-600 transition-colors"
            >
              <FaWhatsapp size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/flexacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href="https://www.tiktok.com/@flexacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-pink-600 transition-colors"
            >
              <FaTiktok size={28} />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Details</h2>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Phone:</p>
            <p className="text-gray-700">(237) 690 558 914</p>
            <p className="text-gray-700">(237) 679 709 291</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Email:</p>
            <p className="text-gray-700">flexacademy237@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location</h2>
          <p className="text-gray-700 font-medium">DOUALA</p>
          <p className="text-gray-700">CAMPUS-II ANGE RAPHAEL</p>
          <p className="text-gray-700 font-medium mt-2">YAOUNDE</p>
          <p className="text-gray-700">BIYEM-ASSI LAC</p>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 mt-12 text-center">
        <p className="text-sm text-gray-600">
          &copy; 2025 FlexAcademy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;