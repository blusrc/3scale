import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

interface LucideIconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const DynamicIcon = ({ name, ...props }: LucideIconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

export default DynamicIcon;
