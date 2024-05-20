import { ModeToggle } from "@/components/ui/toggle";
import { Wrapper } from "./ui/wrapper";
import { Logo } from "./ui/logo";
import { CameraButton } from "./ui/camera-button";
import { Input } from "@/components/ui/input";
import { LogoutButton } from "./logout-button";

export function Header({ className = "" }: { className?: string }) {
  return (
    <header className={className}>
      <Wrapper>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <CameraButton />
            <ModeToggle />
            <LogoutButton />
          </div>
        </div>

        <Input
          type="search"
          edge="pill"
          className="mt-4"
          placeholder="Search ..."
        />
      </Wrapper>
    </header>
  );
}
