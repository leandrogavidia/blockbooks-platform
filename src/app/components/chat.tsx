"use client";

import { Message, useAssistant } from "ai/react";
import Image from "next/image";

export function Chat() {
  const {
    status,
    messages,
    input,
    submitMessage,
    handleInputChange,
    threadId,
  } = useAssistant({ api: "/api/assistant" });

  const isLoading = status !== "awaiting_message";

  return (
    <div className="min-h-[520px] h-full w-full flex flex-col justify-between items-center max-w-3xl mx-auto gap-y-5 max-h-[480px]">
      <div className="flex flex-col justify-start items-start gap-y-4 w-full overflow-auto">
        <p className="flex justify-start gap-x-3 items-start">
          <Image
            className="rounded-full"
            src="/images/assistant.jpg"
            alt="Asistente"
            title="Asistente"
            width={20}
            height={20}
          />
          <span className="text-primary">
            Hola, Soy Ana, tu asistente en BlockBoos, ¿Como puedo ayudarte?
          </span>
        </p>
        {messages.map((message: Message) => {
          const isAssistant = message.role !== "user";
          return (
            <div
              className={`flex ${
                isAssistant ? "justify-start" : "justify-end"
              } w-full`}
              key={message.id}
            >
              <p
                className={`flex ${
                  isAssistant ? "" : "flex-row-reverse"
                } gap-x-3 items-start`}
              >
                {isAssistant ? (
                  <Image
                    className="rounded-full"
                    src="/images/assistant.jpg"
                    alt="Asistente"
                    title="Asistente"
                    width={20}
                    height={20}
                  />
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 88 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M88 44C88 68.3005 68.3005 88 44 88C19.6995 88 0 68.3005 0 44C0 19.6995 19.6995 0 44 0C68.3005 0 88 19.6995 88 44Z"
                      fill="black"
                    />
                    <path
                      d="M58.6667 25.6667C58.6667 33.7668 52.1002 40.3333 44 40.3333C35.8998 40.3333 29.3333 33.7668 29.3333 25.6667C29.3333 17.5665 35.8998 11 44 11C52.1002 11 58.6667 17.5665 58.6667 25.6667Z"
                      fill="white"
                    />
                    <path
                      d="M9.37317 71.1505C15.6223 58.332 28.7798 49.5 44 49.5C59.2202 49.5 72.3777 58.332 78.6268 71.1505C70.5715 81.4097 58.0554 88 44 88C29.9446 88 17.4285 81.4097 9.37317 71.1505Z"
                      fill="white"
                    />
                  </svg>
                )}
                <span
                  className={`${
                    isAssistant ? "text-primary" : "text-[#24272A]"
                  }`}
                >
                  {message.content}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <form className="w-full" onSubmit={submitMessage}>
        <input
          disabled={isLoading}
          className={`w-full rounded-full border-2 shadow-lg px-3 py-1 text-sm bg-transparent outline-none ${
            isLoading ? "border-gray-500" : "border-primary"
          }`}
          placeholder={isLoading ? "Awaiting reply" : "Escribe tu mensaje..."}
          type="text"
          name="content"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
