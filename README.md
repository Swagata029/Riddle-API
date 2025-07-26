# 🧠 Riddle API

Welcome to the **Riddle API**, a simple REST API built with [NestJS](https://nestjs.com/) that serves random riddles with support for multiple answers.

This API can be used in games, educational apps, and fun quizzes to challenge users to guess words based on riddles.

---

## 🚀 Features

- ✅ Retrieve a random riddle
- ✅ Support for multiple correct answers
- ✅ Easy integration with any frontend app
- ✅ Built with scalable NestJS architecture

---

## 📦 API Endpoint

### `GET /riddle`

Returns a random riddle and expects the user to guess the answer.

#### ✅ Sample Response:

```json
{
  "riddle": "I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?",
  "answers": ["echo", "an echo"]
}
