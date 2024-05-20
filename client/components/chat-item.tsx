"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Check,
  CheckCheck,
  CircleUserRound,
  FileVideo,
  Headphones,
  Image,
  PhoneIncoming,
  PhoneOutgoing,
  SquarePlay,
  User,
  Video,
} from "lucide-react";
import { Badge } from "./ui/badge";

type Action =
  | {
      type: "message";
      message: string;
      direction: "outgoing" | "incoming";
      status: "sent" | "delivered" | "read";
    }
  | {
      type: "call";
      direction: "outgoing" | "incoming";
      call_type: "video" | "voice";
      status: "missed" | "picked";
    }
  | {
      type: "media";
      direction: "outgoing" | "incoming";
      media_type: "video" | "audio" | "image";
      caption?: string;
      status: "sent" | "delivered" | "read";
    };

export type ChatItemProps = {
  avatar: string;
  timestamp: number | string | Date;
  name: string;
  unread_count?: number | string;
  last_action: Action;
};

export function ChatItem({
  avatar,
  name,
  last_action,
  unread_count,
}: ChatItemProps) {
  return (
    <div className="p-2 flex items-center gap-4 rounded-lg hover:bg-foreground/5 sm:px-3 md:px-4">
      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 md:h-14 md:w-14">
        <AvatarImage src={avatar} className="bg-accent" />
        <AvatarFallback>
          <User size={32} />
        </AvatarFallback>
      </Avatar>

      <div className="w-full">
        <div className="flex gap-6 justify-between items-center">
          <h2 className="font-bold line-clamp-1">{name}</h2>
          <p
            className={`text-nowrap text-sm ${
              last_action.direction !== "outgoing" &&
              last_action.status !== "read" &&
              !!unread_count &&
              "text-green-600"
            }`}
          >
            3:45 PM
          </p>
        </div>
        <div className="flex gap-6 justify-between items-center pt-1">
          {last_action.type === "message" ? (
            <>
              <div className="gap-1 flex items-center">
                {last_action.direction === "outgoing" ? (
                  last_action.status === "delivered" ||
                  last_action.status === "read" ? (
                    <CheckCheck
                      size={18}
                      className={`${
                        last_action.status === "read" ? "text-blue-400" : ""
                      }`}
                    />
                  ) : (
                    <Check size={18} />
                  )
                ) : null}

                <p className="line-clamp-1 ">{last_action.message}</p>
              </div>
              {last_action.direction !== "outgoing" &&
                last_action.status !== "read" &&
                !!unread_count && (
                  <Badge className="bg-green-600">{unread_count}</Badge>
                )}
            </>
          ) : last_action.type === "call" ? (
            <>
              <p className="line-clamp-1 inline-flex gap-1 items-center">
                {last_action.direction === "incoming" ? (
                  last_action.call_type === "voice" ? (
                    <PhoneIncoming
                      size={18}
                      //   className={`${
                      //     last_action.status === "missed" ? "text-red-600" : ""
                      //   }`}
                    />
                  ) : last_action.call_type === "video" ? (
                    <Video size={18} />
                  ) : null
                ) : (
                  <>
                    {last_action.call_type === "voice" ? (
                      <PhoneOutgoing size={18} />
                    ) : last_action.call_type === "video" ? (
                      <Video size={18} />
                    ) : null}
                  </>
                )}

                {last_action.call_type === "voice" ? (
                  <span
                    className={`text-xs sm:text-sm ${
                      last_action.status === "missed"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {last_action.status === "missed" &&
                      last_action.direction === "incoming" &&
                      "Missed"}{" "}
                    Voice Call
                  </span>
                ) : (
                  <span
                    className={`text-xs sm:text-sm ${
                      last_action.status === "missed"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {last_action.status === "missed" &&
                      last_action.direction === "incoming" &&
                      "Missed"}{" "}
                    {last_action.direction === "outgoing" && "Outgoing  "}
                    Video Call
                  </span>
                )}
              </p>
            </>
          ) : last_action.type === "media" ? (
            <>
              <div className="gap-1 flex items-center">
                {last_action.direction === "outgoing" ? (
                  last_action.status === "delivered" ||
                  last_action.status === "read" ? (
                    <CheckCheck
                      size={16}
                      className={`${
                        last_action.status === "read" ? "text-blue-400" : ""
                      }`}
                    />
                  ) : (
                    <Check size={16} />
                  )
                ) : null}

                <div className="gap-1 flex items-center">
                  {last_action.media_type === "video" ? (
                    // <SquarePlay size={18} />
                    <FileVideo size={18} />
                  ) : last_action.media_type === "image" ? (
                    <Image size={18} />
                  ) : (
                    <Headphones size={18} />
                  )}

                  <p className="line-clamp-1 ">
                    {last_action.caption
                      ? last_action.caption
                      : last_action.media_type === "video"
                      ? "Video"
                      : last_action.media_type === "image"
                      ? "Picture"
                      : "Audio"}
                  </p>
                </div>
              </div>
              {last_action.direction === "incoming" &&
                last_action.status !== "read" &&
                !!unread_count && (
                  <Badge className="bg-green-600">{unread_count}</Badge>
                )}
            </>
          ) : null}
        </div>
        {/* <CheckCheck />
        <Check />
        <Image />
        
        
         */}
      </div>
    </div>
  );
}
