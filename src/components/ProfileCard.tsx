// components/ProfileCard.tsx
import Image from "next/image";

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  bio: string;
}

const ProfileCard = ({ imageUrl, name, bio }: ProfileCardProps) => (
  <div className="text-center">
    <div className="relative w-32 h-32 mx-auto mb-4">
      <Image
        src={imageUrl}
        alt={name}
        layout="fill"
        className="rounded-full object-cover"
      />
    </div>
    <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
    <p className="text-lg text-gray-400">{bio}</p>
  </div>
);

export default ProfileCard;
