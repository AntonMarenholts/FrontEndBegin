// then --> await

//  await - только внутри функций,которые являются асинхронными
// при объявлении укажем слово async

async function fetchLogin() {
  try {
    const credentials = {
      email: form.elements["email"].value,
      password: form.elements["password"].value,
    };

    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      return res.json();
    }
    console.log(res.status);
    if (res.status === 401) {
      throw new Error("Wrong password or email");
    }
    throw new Error("Auth error");

    const obj = await res.json();

    console.log(obj);

    errElement.innerText = "";
  } catch (err) {
    errElement.innerText = err.message;
  }
}

function loginHandler(e) {
  e.preventDefault();
  fetchLogin();
}
