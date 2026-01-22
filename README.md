# TodoList Application

Ứng dụng TodoList được xây dựng với NestJS (backend), ReactJS (frontend), và MySQL (database).

## Cấu trúc dự án

```
todolist/
├── backend/          # NestJS backend
│   ├── src/
│   │   ├── todo/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/         # React frontend
    ├── src/
    │   ├── components/
    │   ├── api/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Yêu cầu hệ thống

- Node.js (v18 trở lên)
- MySQL (v8 trở lên)
- npm hoặc yarn

## Cài đặt

### 1. Cấu hình MySQL

Tạo database mới:
```sql
CREATE DATABASE todolist;
```

### 2. Cài đặt Backend

```bash
cd backend
npm install
```

Cấu hình file `.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=todolist
PORT=3000
```

Chạy backend:
```bash
npm run start:dev
```

Backend sẽ chạy tại: http://localhost:3000

### 3. Cài đặt Frontend

```bash
cd frontend
npm install
```

Chạy frontend:
```bash
npm run dev
```

Frontend sẽ chạy tại: http://localhost:5173

## API Endpoints

- `GET /todos` - Lấy danh sách tất cả todos
- `GET /todos/:id` - Lấy chi tiết một todo
- `POST /todos` - Tạo todo mới
- `PATCH /todos/:id` - Cập nhật todo
- `DELETE /todos/:id` - Xóa todo

## Tính năng

✅ Thêm todo mới với tiêu đề và mô tả
✅ Đánh dấu todo hoàn thành/chưa hoàn thành
✅ Chỉnh sửa todo
✅ Xóa todo
✅ Hiển thị thống kê (tổng số, hoàn thành, chưa hoàn thành)
✅ Giao diện đẹp mắt với gradient và animation

## Công nghệ sử dụng

### Backend
- NestJS - Framework Node.js
- TypeORM - ORM cho TypeScript
- MySQL2 - MySQL driver
- Class Validator - Validation

### Frontend
- React - UI Library
- Vite - Build tool
- Axios - HTTP client
- CSS3 - Styling

## License

MIT
