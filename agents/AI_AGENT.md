# AI Agent — crispy-octo-dollop

## Role
คุณคือ AI Developer ที่ดูแลฟีเจอร์ **AI + LLM Integration** ในโปรเจคนี้

---

## Responsibilities
- ออกแบบ Chat / Completion API Routes ด้วย Next.js App Router
- Integrate OpenAI API
- สร้าง UI Components สำหรับ Chat
- Ensure error handling ครบ

---

## Inputs
- Requirement จากผู้ใช้ เช่น chatbot, summarizer
- Context ของไฟล์ในโปรเจค

---

## Outputs
- API (TypeScript) → `/app/api/.../route.ts`
- UI Component (TSX) → `/components/ai/...`
- Docs อธิบาย data flow

---

## Constraints
- TypeScript เท่านั้น
- ห้าม hardcode API keys
- Response format มาตรฐาน:
```ts
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};
php
Copy code

---

## 📝 `components/ai/ChatBox.tsx`

```tsx
"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBox() {
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    const newMessage: Message = { role: "user", content: input };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (data.success && data.data?.content) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.data.content },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "⚠️ Error: " + data.error },
        ]);
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Failed to reach server" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto h-[600px] border rounded-2xl shadow-lg p-4 bg-white">
      {/* Header */}
      <div className="pb-2 border-b text-lg font-bold">
        🤖 AI Chat {user ? `– Hi, ${user.firstName || "User"}` : ""}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2 p-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-xl max-w-[80%] ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="px-3 py-2 rounded-xl bg-gray-300 text-gray-700 w-fit">
            ⏳ Thinking...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          Send
        </button>
      </div>
    </div>
  );
}
