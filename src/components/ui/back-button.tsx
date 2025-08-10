import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface BackButtonProps {
  to?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function BackButton({ 
  to = "/", 
  className = "", 
  variant = "ghost",
  size = "default"
}: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to === "back") {
      // Go back to previous page in history
      navigate(-1);
    } else {
      // Navigate to specific route
      navigate(to);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleBack}
      className={`flex items-center gap-2 ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
}
