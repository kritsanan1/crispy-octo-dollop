# crispy-octo-dollop

โปรเจกต์นี้ใช้ React (TypeScript), TailwindCSS และ GSAP สร้าง UI ที่ interactive ลื่นไหล พร้อมโครงสร้างแบบ component-based ที่ขยายต่อยอดง่าย

## Features

- ⚡️ React 18 + TypeScript
- 🎨 TailwindCSS utility-first
- 🌀 GSAP Animation เจ๋งๆ
- 📦 Component-based structure
- 📱 Responsive design

## เริ่มต้นใช้งาน

```bash
git clone https://github.com/kritsanan1/crispy-octo-dollop.git
cd crispy-octo-dollop
npm install
npm run dev
```

## ตัวอย่างการใช้ (Sample Snippet)

```tsx
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function AnimatedBox() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 100,
      duration: 1.2,
      ease: 'power3.out'
    })
  }, [])

  return (
    <div ref={boxRef} className="w-32 h-32 bg-blue-500 rounded-xl shadow-lg" />
  )
}
```

## โครงสร้างโปรเจกต์

```
src/
  components/
    AnimatedBox.tsx
  App.tsx
  main.tsx
```

## เทคนิคเสริม

- ใช้ Tailwind กับ custom keyframes เพื่อ animation ที่ซับซ้อน
- ใช้ GSAP Timeline สำหรับ sequence animation หลายชิ้น
- ชอบ effect interactive? เชื่อม event กับ GSAP ได้ง่าย เช่น hover, click
- ปรับ responsive ด้วย Tailwind breakpoint

## Docs อ้างอิง

- [React Docs](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs/)
- [GSAP Docs](https://greensock.com/docs/)

---

> พัฒนา UI ให้ลื่นไหล สวยงาม interactive ได้ง่าย ด้วยโครงสร้างที่ยืดหยุ่น ขยายต่อยอดได้
