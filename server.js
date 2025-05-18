const express = require('express');
const { login, getAppToken, updateSteps } = require('./your-backend-module'); // 引入之前的刷步逻辑
require('dotenv').config(); // 加载环境变量

const app = express();
app.use(express.json());
app.use(express.static(__dirname)); // 托管静态文件（index.html在此目录）

// 跨域中间件
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 步数更新接口
app.post('/api/update-steps', async (req, res) => {
  const { account, password, steps } = req.body;
  
  try {
    // 登录（示例中使用环境变量中的测试账号，实际需前端传入）
    const auth = await login(account, password);
    const appToken = await getAppToken(auth.loginToken);
    const result = await updateSteps(auth.loginToken, appToken, steps);
    
    res.json({ success: true, message: '步数更新成功', data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 启动服务
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务启动于 http://localhost:${PORT}`);
});
