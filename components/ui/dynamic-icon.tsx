import { Loader2Icon, LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

interface LucideIconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const DynamicIcon = ({ name, ...props }: LucideIconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name], {
    loading: () => (
      <Loader2Icon className="w-4 h-4 animate-spin text-muted-foreground" />
    ), // Replace with your loading placeholder
    // ssr: false, // Disable server-side rendering for dynamic import
  });

  return <LucideIcon {...props} />;
};

export default DynamicIcon;
