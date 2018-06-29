import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'
import mainPage from './components/mainPage.vue'
import about from './components/content/about.vue'
import help from './components/content/help.vue'
import feedback from './components/content/feedback.vue'

export default [
  { path: '/blogs', component: showBlogs },
  { path: '/', component: mainPage },
  // { path: '/add', component: addBlog },
  { path: '/about', component: about },
  { path: '/help', component: help },
  { path: '/feedback', component: feedback },
  { path: '/blog/:id', component: singleBlog },
  // { path: '/jobGroup/:id', component: jobPage },
  // { path: '/tutorial', component: tutorial },
]