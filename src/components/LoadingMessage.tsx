import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const LoadingMessage = () => {
  return (
    <div className="flex gap-3 p-4 bg-gray-900">
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarFallback className="bg-green-600 text-white">
          <Icon name="Bot" size={16} />
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-gray-300">ChatGPT</span>
        </div>

        <div className="flex items-center gap-1 text-gray-400">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <span className="text-sm ml-2">Печатает...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
