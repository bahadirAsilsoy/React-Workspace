import React from "react";

function Login() {
  const users = [
    {
      username: "enes",
      password: "1",
    },
    {
      username: "aysenur",
      password: "2",
    },
  ];
  return (
    <div>
      <div>
        <div>
          <p>Kullanici Adiniz</p>
          <input type="text" />
        </div>
        <div>
          <p>Şifreniz</p>
          <input type="text" />
        </div>
        <button>Giriş Yap</button>
      </div>
    </div>
  );
}

export default Login;
