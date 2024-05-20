"use client";

declare global {
  interface Window {
    localStream: MediaStream | undefined;
  }
}

import { MouseEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { Wrapper } from "../../components/ui/wrapper";
import { Check, Image, ImagePlus, RefreshCcwDot, X } from "lucide-react";
import { ModeToggle } from "../../components/ui/toggle";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useDeviceSize } from "@/hooks/useDeviceSize";

export function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  const [width, height] = useDeviceSize();
  const [isStreaming, setIsStreaming] = useState(false);
  const [src, setSrc] = useState("");
  const [facingMode, setFacingMode] = useState<"front" | "rear">("front");
  const [mediaType, setMediaType] = useState<"video" | "picture">("picture");

  const [picturePreview, setPicturePreview] = useState(false);

  function takePicture(
    video: HTMLVideoElement | null,
    canvas: HTMLCanvasElement | null
  ) {
    return function (
      evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) {
      if (
        !(
          canvas instanceof HTMLCanvasElement &&
          video instanceof HTMLVideoElement
        )
      )
        return;
      const context = canvas.getContext("2d");
      const width = video.offsetWidth;
      const height = video.offsetHeight;
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        if (!context) return;
        context.translate(width, 0);
        context.scale(-1, 1);
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL("image/png");
        setSrc(data);
        setPicturePreview(true);
      }
    };
  }

  function canPlay(canvas: HTMLCanvasElement | null) {
    return function (evt: SyntheticEvent<HTMLVideoElement, Event>) {
      const video = evt.target;

      if (!isStreaming) {
        video instanceof HTMLVideoElement &&
          video instanceof HTMLImageElement &&
          video.setAttribute("width", `${width}`);
        video instanceof HTMLImageElement &&
          video.setAttribute("height", `${height}`);
        canvas instanceof HTMLCanvasElement &&
          canvas.setAttribute("width", `${width}`);
        canvas instanceof HTMLCanvasElement &&
          canvas.setAttribute("height", `${height}`);
        setIsStreaming(true);
      }
    };
  }

  function closeCamera(evt: MouseEvent<HTMLAnchorElement, Event>) {
    evt.preventDefault();
    router.back();
  }

  useEffect(() => {
    if (navigator.mediaDevices && width && height && !isStreaming) {
      const constraints =
        width > 768
          ? {
              video: {
                width: {
                  exact: 640,
                },
                aspectRatio: 4 / 3,
              },
              audio: false,
            }
          : {
              video: {
                width: {
                  exact: width,
                },
                height: {
                  exact: height - 76 - 160,
                },
              },
              audio: false,
            };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          {
            if (videoRef.current instanceof HTMLVideoElement) {
              videoRef.current.srcObject = stream;
              window.localStream = stream;
              setIsStreaming(true);
            }
          }
        })
        .catch((err) => console.error(err));

      return () => {
        if (window.localStream instanceof MediaStream) {
          window.localStream.getTracks().forEach((track) => track.stop());
          if (videoRef.current instanceof HTMLVideoElement) {
            videoRef.current.srcObject = null;
          }
        }
      };
    }
  }, [height, width]);

  return (
    <>
      <main className="min-h-screen flex flex-col justify-between overflow-y-hidden">
        <div className="bg-background h-[80px] flex items-center">
          <Wrapper className="flex items-center justify-between md:max-w-3xl">
            <Link href="/" className="text-3xl" onClick={closeCamera}>
              <X />
            </Link>
            <ModeToggle />
          </Wrapper>
        </div>

        <div className="relative">
          <video
            ref={videoRef}
            style={{ transform: "scale(-1,1)" }}
            className="h-full w-full md:w-[640px] md:mb-4 md:mx-auto md:rounded-lg"
            onCanPlay={() => canPlay(canvasRef.current)}
            autoPlay
          ></video>
          <canvas ref={canvasRef} className="hidden"></canvas>
        </div>

        <div className="bg-background h-[168px]">
          <Control
            type={mediaType}
            takePicture={takePicture(videoRef.current, canvasRef.current)}
          />

          <div className="bg-accent-foreground/5 py-2 flex justify-center gap-2 items-center">
            <button
              className={`px-6 py-2 rounded-full ${
                mediaType === "picture"
                  ? "bg-accent-foreground/15 text-foreground"
                  : "bg-accent-foreground/5 text-foreground/75"
              }`}
              onClick={() => {
                setMediaType("picture");
              }}
            >
              Photo
            </button>
            <button
              className={`px-6 py-2 rounded-full ${
                mediaType === "video"
                  ? "bg-accent-foreground/15 text-foreground"
                  : "bg-accent-foreground/5 text-foreground/75"
              }`}
              onClick={() => {
                setMediaType("video");
              }}
            >
              Video
            </button>
          </div>
        </div>
        {picturePreview && (
          <ImageModal src={src} setPicturePreview={setPicturePreview} />
        )}
      </main>
    </>
  );
}

function Control({
  takePicture,
  type,
}: {
  type: "picture" | "video";
  takePicture: (
    evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}) {
  return (
    <Wrapper className="flex items-center justify-between pt-1 md:max-w-3xl">
      <button className="bg-accent-foreground/5 p-3 rounded-full">
        <Image size={28} />
      </button>
      <button
        onClick={(e) => {
          if (type === "picture") {
            takePicture(e);
          }
        }}
        className="p-0 rounded-full"
      >
        <Capture type={type} />
      </button>
      <button className="bg-accent-foreground/5 p-3 rounded-full">
        <RefreshCcwDot size={28} />
      </button>
    </Wrapper>
  );
}

function Capture({ type }: { type: "video" | "picture" }) {
  return (
    <div
      className={`aspect-square w-[72px] rounded-full grid place-items-center border-foreground border-solid border-4 ${
        type === "video" ? "p-[14px]" : "p-[6px]"
      }`}
    >
      <div className="aspect-square w-full rounded-full bg-foreground"></div>
    </div>
  );
}

function ImageModal({
  src = "",
  setPicturePreview,
}: {
  src: string;
  setPicturePreview: Function;
}) {
  return (
    <div className="fixed bg-background left-0 right-0 top-0 bottom-0 overflow-y-auto flex flex-col justify-between">
      <div className="bg-background h-[88px] flex items-center">
        <Wrapper className="flex items-center justify-between">
          <Button variant="plain" onClick={() => setPicturePreview(false)}>
            <X />
          </Button>
        </Wrapper>
      </div>

      <div className="md:mx-auto">
        <img alt="snapshot" className="rounded" src={src} />
      </div>
      <Wrapper className="bg-background h-[176px] flex flex-col">
        <div className="flex items-center justify-between gap-4 mt-auto">
          <div className="relative rounded-full overflow-hidden w-full">
            <ImagePlus className="absolute top-1/2 left-4 -translate-y-1/2" />
            <input
              type="text"
              className="w-full py-3 pr-6 pl-12 outline-none bg-accent-foreground/5 placeholder:text-foreground/80"
              placeholder="Add a caption..."
            />
          </div>

          <button className="bg-green-500 text-foreground aspect-square w-14 rounded-full grid place-items-center shrink-0">
            <Check />
          </button>
        </div>
      </Wrapper>
    </div>
  );
}
