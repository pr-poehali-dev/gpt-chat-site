import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Message } from "@/hooks/useChat";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex gap-3 p-4 ${isUser ? "bg-gray-800" : "bg-gray-900"}`}>
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarFallback
          className={
            isUser ? "bg-blue-600 text-white" : "bg-green-600 text-white"
          }
        >
          {isUser ? (
            <Icon name="User" size={16} />
          ) : (
            <Icon name="Bot" size={16} />
          )}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-gray-300">
            {isUser ? "Вы" : "ChatGPT"}
          </span>
          <span className="text-xs text-gray-500">
            {message.timestamp.toLocaleTimeString("ru-RU", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="text-gray-100 text-sm whitespace-pre-wrap break-words">
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
