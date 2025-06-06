// src/routers/orders.route.js
import express from 'express';
import { UserInfo } from 'firebase-admin/auth';
import { token } from 'morgan';

const ordersRouter = express.Router();

// Временное «хранилище» – массив в памяти
const orders = [];

// POST /api/v1/orders
// Приходит тело запроса (JSON), например:
// { userId: 123, items: [...], totalAmount: 2500, ... }
// Мы просто пушим полученный объект в массив orders
ordersRouter.post('/', (req, res) => {
  const newOrder = req.body;
  
  // Можно добавить проверку, что newOrder реально объект и в нём есть нужные поля,
  // но поскольку вы просили «без проверок», просто принимаем как есть:
  orders.push(newOrder);

  // Отвечаем 200 OK (либо 201 Created, если хотите подчеркнуть создание ресурса)
  return res.sendStatus(200);
});

// GET /api/v1/orders
// Возвращаем клиенту JSON‑массив всех сохранённых заказов:
ordersRouter.get('/', (req, res) => {
  return res.json(orders);
});

export default ordersRouter;