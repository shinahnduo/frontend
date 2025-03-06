<!-- filepath: /c:/aiProject/betterwrite/packages/app/src/pages/Login.vue -->
<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div id="g-signin2" class="g-signin2"></div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const onSubmit = async () => {
  const data = {
    author_id: "admin",
    created_at: "2025-03-05", // Use ISO 8601 format for datetime
    email: email.value,
    login_id: "admin",
    password: password.value,
    phone: "01047272664",
    updated_at: "2025-03-05", // Use ISO 8601 format for datetime
    user_id: "2",
    user_name: "테스트",
    description: "Some description"
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/test/add_to_firebase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Success:', responseData);
      router.push('/main');
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.value = 'Login failed. Please try again.';
  }
}

const onGoogleSignIn = (googleUser) => {
  const profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  // 서버로 토큰을 보내서 인증을 처리할 수 있습니다.
  const id_token = googleUser.getAuthResponse().id_token;
  fetch('http://127.0.0.1:8000/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: id_token })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    router.push('/main');
  })
  .catch(error => {
    console.error('Error:', error);
    errorMessage.value = 'Google login failed. Please try again.';
  });
}

onMounted(() => {
  window.onGoogleSignIn = onGoogleSignIn;
  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: '443248964813-eg3it5v3187pvn9p890tkht4uiqf7e4v.apps.googleusercontent.com'
    }).then(() => {
      gapi.signin2.render('g-signin2', {
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
</style>