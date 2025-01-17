// components/SocialLink.tsx
import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaLink } from "react-icons/fa"; // Importar los íconos de react-icons

type SocialLinkProps = {
  platform: string;
  url: string;
  color: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ platform, url, color }) => {
  // Se puede usar un switch o un objeto para asignar el ícono correcto basado en la plataforma
  let Icon;
  switch (platform) {
    case "Warpcast":
      Icon = <FaTwitter />;
      break;
    case "Lens":
      Icon = <FaInstagram />;
      break;
    case "X.com":
      Icon = <FaLinkedin />;
      break;
    case "Pulse":
      Icon = <FaGithub />;
      break;
    case "OpenSea":
      Icon = <FaLink />;
      break;
    case "Base Profile":
      Icon = <FaLink />;
      break;
    case "Webpage":
      Icon = <FaLink />;
      break;
    default:
      Icon = <FaLink />;
  }

  return (
    <a
      href={url}
      className={`flex items-center p-4 rounded-lg shadow-md ${color} hover:opacity-80 m-5`}
      target="_blank" // Para abrir en una nueva pestaña
      rel="noopener noreferrer" // Mejor seguridad
    >
      <div className="mr-4 text-xl">{Icon}</div> {/* Mostrar el ícono */}
      <div>
        <div className="font-bold text-lg">{platform}</div>
      </div>
      </a>
  );
};

export default SocialLink;
