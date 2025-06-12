import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-700 bg-gray-800">
      <div className="flex gap-2 items-end max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Отправьте сообщение ChatGPT..."
            className="min-h-[44px] max-h-32 resize-none bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>

        <Button
          onClick={handleSend}
          disabled={!message.trim() || isLoading}
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 h-11"
        >
          {isLoading ? (
            <Icon name="Loader2" size={16} className="animate-spin" />
          ) : (
            <Icon name="Send" size={16} />
          )}
        </Button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-2">
        Enter для отправки, Shift + Enter для новой строки
      </p>
    </div>
  );
};

export default ChatInput;
