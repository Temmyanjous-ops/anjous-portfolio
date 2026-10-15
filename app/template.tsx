import { PageAnimations } from "@/components/PageAnimations";

// Re-mounts on every navigation, so each page gets fresh animations.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PageAnimations />
    </>
  );
}
