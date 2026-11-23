# 🚛 ThaiMove Forum - เว็บฟอรัมประกาศหาและเสนอราคาบริการยานพาหนะ

โปรเจกต์เว็บฟอรัมสำหรับประกาศหาบริการยานพาหนะและเสนอราคาโดยตรง ระหว่างผู้ใช้งานทั่วไป (ลูกค้า) กับผู้ให้บริการขนส่ง พัฒนาด้วย HTML, CSS (Tailwind CSS) และ JavaScript แบบ Single Page Application (SPA)

---

## ✨ ฟีเจอร์หลัก

### 👥 ระบบสมาชิก 2 บทบาท
- **ผู้ใช้งานทั่วไป (Customer)**: โพสต์ประกาศหายานพาหนะ, ตั้งค่ารายละเอียดงาน, รับข้อเสนอราคา, ยืนยันเลือกผู้ให้บริการ
- **ผู้ให้บริการ (Provider)**: เข้าเสนอราคารับงาน, จัดการข้อเสนอ, ติดตามงานที่ได้รับเลือก

### 📋 การจัดการกระทู้ประกาศ
- สร้างกระทู้หาบริการพร้อมระบุ: ประเภทรถ, วัน-เวลา, จุดรับ-ส่ง, รายละเอียดสิ่งของ/ผู้โดยสาร
- แนบรูปภาพประกอบหน้างาน (รองรับอัปโหลดไฟล์ และใช้ภาพตัวอย่างอัตโนมัติ)
- กรองและค้นหากระทู้: ตามหมวดหมู่, สถานะ (เปิดรับ/ยืนยันแล้ว), คำค้นหา (เส้นทาง, สินค้า, จังหวัด)

### 💰 ระบบเสนอราคาและยืนยัน (Bidding System)
- ผู้ให้บริการเสนอราคาพร้อมระบุ: ราคา, ประเภทรถ/อุปกรณ์, รายละเอียด/เงื่อนไข
- เรียงลำดับข้อเสนอตามราคาต่ำสุด (ยกเว้นข้อเสนอที่ได้รับเลือก จะขึ้นก่อน)
- เจ้าของกระทู้กด **"ยืนยันราคา"** เพื่อปิดรับข้อเสนอและเปิดเผยเบอร์ติดต่อระหว่างกัน
- แยกมุมมอง: "กระทู้ที่ฉันเสนอราคา", "งานที่ยืนยันแล้วของฉัน"

### 🎨 UI/UX ที่ทันสมัย
- ใช้ Tailwind CSS + Font Awesome Icons
- ฟอนต์ **Prompt** รองรับภาษาไทยสวยงาม
- Dark/Light theme auto-detect
- Modal-based workflows (ไม่ต้องโหลดหน้าใหม่)
- Toast notifications สำหรับแจ้งเตือน
- Lightbox สำหรับดูภาพขยาย

### 💾 เก็บข้อมูลแบบ Offline-First
- ใช้ `localStorage` บนเบราว์เซอร์ (ไม่ต้องมี Backend/Database)
- ข้อมูลตัวอย่าง (Demo Data) โหลดอัตโนมัติครั้งแรก
- รองรับการ Reset ข้อมูลกลับค่าเริ่มต้น

---

## 🛠️ เทคโนโลยีที่ใช้

| เทคโนโลยี | เวอร์ชัน | วัตถุประสงค์ |
|-----------|---------|-------------|
| HTML5 | - | โครงสร้างหน้าเว็บ |
| Tailwind CSS | 3.x (CDN) | Utility-first CSS Framework |
| Font Awesome | 6.5.1 (CDN) | ไอคอน |
| Google Fonts: Prompt | - | ฟอนต์ภาษาไทย |
| Vanilla JavaScript (ES6+) | - | Logic, State Management, DOM |

---

## 🚀 วิธีใช้งาน

### 1. เปิดใช้งานบนเครื่อง (Local)
เพียงแค่เปิดไฟล์ `index.html` (หรือ `thaimove_forum.html`) ในเบราว์เซอร์ได้เลย — **ไม่ต้องติดตั้งอะไรเพิ่มเติม**

### 2. บัญชีทดสอบ (Demo Accounts)
ระบบมีข้อมูลตัวอย่างพร้อมใช้งาน รหัสผ่านทุกบัญชีคือ `1234`:

| บทบาท | Username | ชื่อแสดง | หมายเหตุ |
|--------|----------|----------|----------|
| ผู้ใช้งานทั่วไป | `somchai` | คุณสมชาย ใจดี | มีกระทู้ตัวอย่าง 2 รายการ |
| ผู้ใช้งานทั่วไป | `napa` | คุณนภา รักเดินทาง | มีกระทู้ตัวอย่าง 1 รายการ (ยืนยันแล้ว) |
| ผู้ให้บริการ | `fastmove` | หจก. ขนส่งด่วนใจ | รถกระบะ/สไลด์ ครอบคลุมทั่วไทย |
| ผู้ให้บริการ | `akevip` | พี่เอก รถตู้ VIP | รถตู้ VIP / กระบะคอก |

> 💡 **Tip**: ใช้แถบ "โหมดทดสอบด่วน" บน Navbar เพื่อสลับบัญชีทันทีโดยไม่ต้อง Login/Logout

### 3. เปิดใช้งานผ่าน GitHub Pages
เว็บไซต์พร้อมใช้งานได้ที่:
🔗 **https://<your-github-username>.github.io/thaimove-forum/**

---

## 📁 โครงสร้างไฟล์

```
thaimove-forum/
├── index.html              # ไฟล์หลักสำหรับ GitHub Pages
├── thaimove_forum.html     # ไฟล์ต้นฉบับ (เหมือนกันทุกอย่าง)
├── .gitignore              # ไฟล์ที่ Git ควรละเว้น
└── README.md               # ไฟล์คู่มือนี้
```

---

## 🔧 การพัฒนาต่อ (Development)

### โครงสร้างโค้ดหลัก (ใน `<script>` tag)
```javascript
// 1. SAMPLE DATA & SVG GENERATORS
//    - ข้อมูลตัวอย่าง: users, threads, bids
//    - ฟังก์ชันสร้าง SVG placeholder images

// 2. APPLICATION STATE & STORAGE
//    - users[], threads[], currentUser
//    - localStorage persistence (saveState, initApp)

// 3. AUTHENTICATION & NAVBAR
//    - login, register, logout, quickLogin (demo switcher)

// 4. CREATE THREAD & IMAGE UPLOAD
//    - handleCreatePostClick, handleImageUpload, handleCreateThread

// 5. THREAD FEED RENDERING & FILTERING
//    - renderThreads (3 views: ALL, MY_BIDS, MY_CONFIRMED)
//    - Category filter, Status filter, Search

// 6. THREAD DETAIL & BIDDING SYSTEM
//    - openThreadDetail, handleBidSubmit, promptConfirmBid, confirmBid

// 7. UTILITIES
//    - Modal handling, Toast, Date formatting, HTML escaping
```

### เพิ่มฟีเจอร์ใหม่ แนะนำให้:
1. แยก JavaScript เป็นไฟล์ `app.js` แยกต่างหาก
2. เพิ่ม Module pattern หรือ ES Modules
3. เพิ่ม TypeScript สำหรับ Type Safety
4. เชื่อมต่อ Backend จริง (Supabase, Firebase, หรือ Node.js + Database)

---

## 📝 ใบอนุญาต (License)

โปรเจกต์นี้เป็น Open Source ภายใต้ **MIT License** — สามารถนำไปใช้ แก้ไข เผยแพร่ ได้อย่างอิสระ

---

## 👤 ผู้พัฒนา

**ThaiMove Forum** — พัฒนาด้วย ❤️ เพื่อชุมชนขนส่งไทย

---

> **หมายเหตุ**: เวอร์ชันนี้เป็น **Prototype / Demo** ที่เก็บข้อมูลใน LocalStorage เท่านั้น ข้อมูลจะหายหากล้าง Cache เบราว์เซอร์ หรือเปลี่ยนอุปกรณ์ สำหรับ Production ควรเชื่อมต่อ Database และเพิ่มระบบ Authentication จริง (JWT, OAuth, ฯลฯ)