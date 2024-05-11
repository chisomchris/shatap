import { Camera } from "lucide-react";
import Link from "next/link";

export function CameraButton() {
  return (
    <Link href='/camera'>
      <Camera size={36} strokeWidth={1} />
    </Link>
  );
}
