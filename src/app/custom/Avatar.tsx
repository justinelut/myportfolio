import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TypeProps {
    image: string
}

export function MyAvatar({image}:TypeProps) {
  return (
    <Avatar className="w-20 h-20">
      <AvatarImage src={image} alt="@justinegichana" />
      <AvatarFallback>Justine Gichana</AvatarFallback>
    </Avatar>
  );
}
