import { IconFinder } from "@/components/icon-finder";

export default async function IconChanger() {
  const lucideIconsFetch = await fetch("https://lucide.dev/api/icon-nodes", {
    cache: "force-cache",
  });
  const iconNodesData = await lucideIconsFetch.json();

  const transformedData: string[] = Object.keys(iconNodesData);

  return <IconFinder icons={transformedData} />;
}
