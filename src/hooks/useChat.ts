import { useState, useCallback } from "react";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const AI_RESPONSES = [
  "Отличный вопрос! Давайте разберём это подробнее.",
  "Понимаю, что вы имеете в виду. Вот моя точка зрения:",
  "Это интересная тема. Позвольте мне объяснить:",
  "Хороший вопрос! Я могу помочь с этим.",
  "Давайте рассмотрим этот вопрос более детально.",
  "Спасибо за вопрос! Вот что я думаю:",
];

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((text: string, sender: "user" | "ai") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      // Добавляем сообщение пользователя
      addMessage(text, "user");

      // Показываем индикатор загрузки
      setIsLoading(true);

      // Имитируем задержку ответа ИИ
      setTimeout(
        () => {
          const randomResponse =
            AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
          addMessage(randomResponse, "ai");
          setIsLoading(false);
        },
        1000 + Math.random() * 2000,
      );
    },
    [addMessage],
  );

  const clearChat = useCallback(() => {
    setMessages([]);
    setIsLoading(false);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
  };
};
