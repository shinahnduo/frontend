<!-- filepath: /c:/aiProject/betterwrite/packages/app/src/pages/Login.vue -->
<template>
  <div class="login-container">
    <head>
      <meta name="google-signin-client_id" content="1045727623358-sqvh3fmk4n77ju9qbbpapjffg46tktsp.apps.googleusercontent.com">
      <meta http-equiv="Content-Security-Policy" content="script-src 'self' https://apis.google.com">
    </head>
    <h2>Login</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div id="g-signin2" class="g-signin2"></div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <button @click="goToSignup" class="signup-button">회원가입</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

declare global {
  interface Window {
    onGoogleSignIn: (googleUser: any) => void;
    gapi: any;
  }
}

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const onSubmit = async () => {
  const data = {
    login_id: email.value,
    password: password.value,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Success:', responseData);
      router.push('/main2');
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.value = 'Login failed. Please try again.';
  }
}

const onGoogleSignIn = (googleUser: any) => {
  const profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  // 여기서 서버로 토큰을 보내지 않고 프론트엔드에서 직접 처리합니다.
  // 예를 들어, 사용자 정보를 로컬 스토리지에 저장하거나 상태를 업데이트합니다.
  localStorage.setItem('googleUser', JSON.stringify({
    id: profile.getId(),
    name: profile.getName(),
    imageUrl: profile.getImageUrl(),
    email: profile.getEmail()
  }));

  // 로그인 성공 후 메인 페이지로 이동합니다.
  router.push('/main');
}

const goToSignup = () => {
  router.push('/signup');
}

onMounted(() => {
  window.onGoogleSignIn = onGoogleSignIn;
  window.gapi.load('auth2', () => {
    window.gapi.auth2.init({
      client_id: '1045727623358-sqvh3fmk4n77ju9qbbpapjffg46tktsp.apps.googleusercontent.com'
    }).then(() => {
      window.gapi.signin2.render('g-signin2', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: onGoogleSignIn
      });
    });
  });
});
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.google-login-button {
  padding: 10px;
  background-color: #db4437;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}

.signup-button {
  margin-top: 20px;
  background-color: #28a745;
}
</style>