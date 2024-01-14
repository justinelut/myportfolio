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
    <Card className={cn("min-w-[350px] w-full items-start", className)}>
      <CardContent className={cn(classContent)}>{children}</CardContent>
    </Card>
  );
};
