import { ChatItem, ChatItemProps } from "@/components/chat-item";
import { Header } from "@/components/header";
import { Protected } from "@/components/protected";
import { Wrapper } from "@/components/ui/wrapper";

export const metadata = {
  title: "Shatapp | Home",
};

export default function Home() {
  const users: ChatItemProps[] = [
    {
      name: "John Hoole 1",
      avatar: "",
      timestamp: new Date(),
      unread_count: 2,
      last_action: {
        message:
          "Hellow chisom from here hahaha I am joking you have been here before you",
        type: "message",
        direction: "incoming",
        status: "sent",
      },
    },
    {
      name: "John Hoole 2",
      unread_count: 10,
      avatar: "",
      timestamp: new Date(),
      last_action: {
        message: "Hellow",
        type: "message",
        direction: "incoming",
        status: "delivered",
      },
    },
    {
      name: "John Hoole 3",
      avatar: "",
      unread_count: 4,
      timestamp: new Date(),
      last_action: {
        message: "Hellow",
        type: "message",
        direction: "incoming",
        status: "read",
      },
    },
    {
      name: "John Hoole 4",
      avatar: "",
      timestamp: new Date(),
      last_action: {
        message: "Hellow",
        type: "message",
        direction: "outgoing",
        status: "sent",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "message",
        message: "I love you baby",
        direction: "outgoing",
        status: "delivered",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "message",
        message: "I love you baby",
        direction: "outgoing",
        status: "read",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "call",
        call_type: "video",
        direction: "incoming",
        status: "missed",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "call",
        call_type: "video",
        direction: "incoming",
        status: "picked",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "call",
        call_type: "video",
        direction: "outgoing",
        status: "missed",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "call",
        call_type: "video",
        direction: "outgoing",
        status: "picked",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "call",
        call_type: "voice",
        direction: "incoming",
        status: "missed",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "call",
        call_type: "voice",
        direction: "incoming",
        status: "picked",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "call",
        call_type: "voice",
        direction: "outgoing",
        status: "missed",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "call",
        call_type: "voice",
        direction: "outgoing",
        status: "picked",
      },
    },

    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "video",
        direction: "outgoing",
        status: "sent",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "video",
        direction: "outgoing",
        status: "delivered",
        caption: "watch me play football",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "video",
        direction: "outgoing",
        status: "read",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "video",
        direction: "incoming",
        status: "sent",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      unread_count: 3,
      last_action: {
        type: "media",
        media_type: "video",
        direction: "incoming",
        status: "delivered",
        caption: "watch me play football",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "video",
        direction: "incoming",
        status: "read",
      },
    },

    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "image",
        direction: "outgoing",
        status: "sent",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "image",
        direction: "outgoing",
        status: "delivered",
        caption: "watch me play football",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "image",
        direction: "outgoing",
        status: "read",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "image",
        direction: "incoming",
        status: "sent",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      unread_count: 3,
      last_action: {
        type: "media",
        media_type: "image",
        direction: "incoming",
        status: "delivered",
        caption: "watch me play football",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "image",
        direction: "incoming",
        status: "read",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "audio",
        direction: "outgoing",
        status: "sent",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "audio",
        direction: "outgoing",
        status: "delivered",
        caption: "watch me play football",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "audio",
        direction: "outgoing",
        status: "read",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "audio",
        direction: "incoming",
        status: "sent",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      unread_count: 3,
      last_action: {
        type: "media",
        media_type: "audio",
        direction: "incoming",
        status: "delivered",
        caption: "watch me play football",
      },
    },
    {
      name: "John Chris",
      avatar: "",
      timestamp: new Date("2014-5-10"),
      last_action: {
        type: "media",
        media_type: "audio",
        direction: "incoming",
        status: "read",
      },
    },
  ];

  /**
   * Protected page
   */
  return (
    <Protected>
      <main className="md:flex md:fixed md:left-0 md:top-0 md:right-0 md:bottom-0">
        <div className="md:w-[380px] md:overflow-y-scroll md:shrink-0 md:h-dvh md:shadow-[4px_0px_hsla(var(--accent))]">
          <Header className="bg-background md:z-50 md:sticky md:top-0" />
          <Wrapper className="grid gap-2">
            {users.map((user, i) => (
              <ChatItem
                key={i}
                name={user.name}
                avatar={user.avatar}
                last_action={user.last_action}
                timestamp={user.timestamp}
                unread_count={user.unread_count}
              />
            ))}
          </Wrapper>
        </div>

        <div className="grow hidden h-dvh md:block md:overflow-y-scroll"></div>
      </main>
    </Protected>
  );
}
