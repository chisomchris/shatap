import { ModeToggle } from "@/components/ui/toggle";
import {Wrapper} from "./ui/wrapper";
import { Logo } from "./ui/logo";
import { CameraButton } from "./ui/camera-button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="shadow">
      <Wrapper>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <CameraButton />
            <ModeToggle />
          </div>
        </div>

        <Input edge="pill" className="mt-4" placeholder="Search ..."/>
      </Wrapper>
    </header>
  );
}
