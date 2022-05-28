const express = require('express')
const fs = require ('fs')
const app = express()

//create a view engine to show user more detail 
app.engine('myFirstViewEngine', (filePath, options, callBack) => {
    fs.readFile(filePath, (err,data) => {
        //if file is not found(error)
        if (err) return callBack(err)
        //if no errors
        const rendered = data.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message','<h1>' + options.message + '</h1>')
        .replace ('#content', '<div>' + options.content + '</div>')

        return callBack(null, rendered)

    })
})

app.set('view engine', 'myFirstViewEngine')
app.set('views', './views')

app.get('/', (req,res) => {
    res.render('home', {
        title: 'Welcome',
        message: 'Express Lab',
        content: 'woop woop'
    })
})
app.get ('/hi/:name/:lastName', (req,res) => {
    res.send(`hi ${req.params.name} ${req.params.lastName}`) })
app.get('/hello', (req,res) => {
        res.send('hello')
    })
app.get('/hey', (req,res) => {
        res.send('hey')
    })
app.get('/whatsup', (req,res) => {
        res.send('Whats up')
    })
app.get('/howdy', (req,res) => {
        res.send('howdy')
    })
app.get('/yeehaw', (req,res) => {
        res.send('YEEHAW!!!')
    })
app.get('/heyy', (req,res) => {
        res.send('heyy')
    })
app.get('/hii', (req,res) => {
        res.send('hii')
    })
app.get('/heyyy', (req,res) => {
        res.send('heyyy')
    })
app.listen(4000, () => {
        console.log('beep...')
    })