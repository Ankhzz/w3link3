// pages/index.tsx
import ProfileCard from "../components/ProfileCard";
import SocialLink from "../components/SocialLink";

const Index = () => {
  const links = [
    { platform: "Warpcast", url: "#", color: "bg-blue-500" },
    { platform: "Lens", url: "#", color: "bg-orange-500" },
    { platform: "X.com", url: "#", color: "bg-gray-800" },
    { platform: "Pulse", url: "#", color: "bg-red-500" },
    { platform: "OpenSea", url: "#", color: "bg-blue-600" },
    { platform: "Base Profile", url: "#", color: "bg-purple-600" },
    { platform: "Webpage", url: "#", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
      <div className="max-w-xl w-full">
        <ProfileCard
          imageUrl="https://gateway.pinata.cloud/ipfs/bafybeihqcur6rqhviocqfea7z2efkharot467n7sehslalqyprtybhyw5u" // Usa tu imagen de perfil
          name="Ankhz"
          bio="NFT Creator / Web3 Developer / Musician / Degen"
        />
        <div className="mt-8">
          {links.map((link) => (
            <SocialLink
              key={link.platform}
              platform={link.platform}
              url={link.url}
              color={link.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
