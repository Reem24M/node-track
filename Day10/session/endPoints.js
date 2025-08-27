const {app}=require('./index')

const {HomePage}=require('./controllers/homeController.js')
const {GetUserById}=require('./controllers/profileController.js')


app.get('/',HomePage)

app.get('/profile/:id',GetUserById)
