import '@/styles/_global.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// console.log('???',  router)

// import { MongoClient } from 'mongodb'
//
// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://vercel-admin-user:5xvhGrwfmCJICOPV@cluster0.1tid6lr.mongodb.net/?retryWrites=true&w=majority";
//
// const client = new MongoClient(uri);
//
// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

