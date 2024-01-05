const mongoose = require('mongoose')
const articleModel = require('./models/article')

mongoose.connect("mongodb://localhost:27017/aprendendoMongo")
const articleSchema = mongoose.model("Article", articleModel)

// Saves an article to the db
// const article = new articleSchema({
//     title: "another title example",
//     author: "another author example",
//     body: "another body example",
//     special: true,
//     resume: {
//         content: "another content example",
//         author: "yet another author example"
//     }
// })
// article.save().then(() => {
//     console.log("Article saved.")
// }).catch(error => {
//     console.log(error)
// })

// finds an Article
// articleSchema.find({}).then(articles => {
//     console.log(articles)
// }).catch(error => {
//     console.log(error)
// })

// Deletes an article by ID
// articleSchema.findByIdAndDelete("65988a1dcbef196db6296d05").then( () => {
//     console.log("The selected article has been deleted.")
// }).catch(error => {
//     console.log(error)
// })

// articleSchema.findByIdAndUpdate("65988975c1a3e6666b981192", {title: "edited title example", author: "edited author example"}).then(() => {
//     console.log("The selected article has been edited.")
// }).catch(error => {
//     console.log(error)
// })