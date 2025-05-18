/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f9f9f9;
  color: #333;
}

header,
nav,
main,
footer {
  padding: 15px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
}

.tag {
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
}

#theme-toggle {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

nav {
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
}

nav button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

main {
  display: flex;
  justify-content: center;
}

.tool {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
}

.tool-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.tool-name {
  font-size: 20px;
}

.status {
  display: flex;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.green {
  background-color: #4CAF50;
}

.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.icon {
  font-size: 20px;
  margin-right: 10px;
}

.info-icon {
  font-size: 14px;
  color: #999;
  cursor: pointer;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.slider-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.slider-min,
.slider-max {
  font-size: 12px;
  color: #999;
}

#submit-button {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

footer {
  text-align: center;
  font-size: 14px;
  color: #999;
}
