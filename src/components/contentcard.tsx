import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TypeChildren {
  className?: string;
  classContent?: string;
  children: React.ReactNode;
}

export const ContentCard = ({
  className,
  classContent,
  children,
}: TypeChildren) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className={cn(classContent)}>{children}</CardContent>
    </Card>
  );
};
