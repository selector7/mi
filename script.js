// 这里可以添加交互逻辑，比如提交表单、切换主题等功能
// 示例：获取滑块和步数输入框，实现联动
const stepSlider = document.getElementById('step-slider');
const stepInput = document.getElementById('steps');

stepSlider.addEventListener('input', function () {
  stepInput.value = this.value;
});

stepInput.addEventListener('input', function () {
  stepSlider.value = this.value;
});

// 这里还可以添加提交表单的逻辑，例如：
const submitButton = document.getElementById('submit-button');
const accountInput = document.getElementById('account');
const passwordInput = document.getElementById('password');

submitButton.addEventListener('click', function () {
  const account = accountInput.value;
  const password = passwordInput.value;
  const steps = stepInput.value;
  // 这里可以添加向服务器发送数据的逻辑，比如使用fetch API
  console.log(`账号: ${account}, 密码: ${password}, 步数: ${steps}`);
});

// 主题切换逻辑示例
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function () {
  const body = document.body;
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    this.textContent = '🌞';
  } else {
    body.classList.add('dark-theme');
    this.textContent = '🌙';
  }
});
