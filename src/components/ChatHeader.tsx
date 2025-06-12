import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ChatHeaderProps {
  onNewChat: () => void;
}

const ChatHeader = ({ onNewChat }: ChatHeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
          <Icon name="MessageCircle" size={20} className="text-white" />
        </div>
        <h1 className="text-xl font-semibold text-white">ChatGPT</h1>
      </div>

      <Button
        onClick={onNewChat}
        variant="outline"
        size="sm"
        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        <Icon name="Plus" size={16} className="mr-2" />
        Новый чат
      </Button>
    </header>
  );
};

export default ChatHeader;
