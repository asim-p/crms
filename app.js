const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');
const mongoose = require('mongoose');
const crimeRoutes = require('./routes/crimeRoutes.js');
const crimeRedirects = require('./routes/redirects.js');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const { requireAuth } = require('./middleware/auth');

const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

const port = process.env.PORT;
const dbURL = process.env.DB_URL;

app.use(session({
    secret: process.env.SESSION_SECRET || 'secret-key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: dbURL }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

mongoose.connect(dbURL)
    .then(() => app.listen(port))
    .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.use('/crimes', crimeRoutes);
app.use(authRoutes);
app.use(crimeRedirects);

app.get('/about', (req, res) => {
    res.render('aboutus', { title: 'About US' });
});

app.get('/dashboard', requireAuth, (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Not Found Error' });
});
