export const routes = [
  {
    name: 'Landing',
    path: '/',
    component: () => import('@/pages/Landing.vue'),
  },
  {
    name: 'Main',
    path: '/main',
    component: () => import('@/pages/Home.vue'),
  },
  {
    name: 'Main2',
    path: '/main2',
    component: () => import('@/pages/Main.vue'),
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: () => import('@/pages/Signup.vue'),
  },
  {
    name: 'Detail',
    path: '/detail/:id',
    component: () => import('@/pages/Detail.vue'),
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/pages/About.vue'),
  },
  { path: "/detail/:id", 
    component: () => import('@/pages/SubItemDetail.vue'), 
  },
  { path: "/read/:id",
    component: () => import('@/pages/ReadDetail.vue'),
  },
  {
    name: 'Reader',
    path: '/Reader',
    component: () => import('@/pages/Reader.vue'),
  },
  {
    name: 'Terms of Use',
    path: '/terms-of-use',
    component: () => import('@/pages/TermsOfUse.vue'),
  },
  {
    name: 'Support',
    path: '/support',
    component: () => import('@/pages/Support.vue'),
  },
  {
    name: 'Questions',
    path: '/questions',
    component: () => import('@/pages/Questions.vue'),
  },
  {
    name: 'Privacy',
    path: '/privacy',
    component: () => import('@/pages/Privacy.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
