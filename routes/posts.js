const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/posts', (req, res) => {
  res.send('We are on posts.')
})

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({})
    console.log(posts)
    res.json(posts)
  } catch (e) {
    res.json({message: e})
  }
})

router.post('/', async (req, res) => {
  var post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  console.log(post)
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (e) {
    res.json({message: e})
  }
})

router.get('/:id', async (req, res) => {
  try {
    const retrievedPost = await Post.findById(req.params.id)
    res.json(retrievedPost)
  } catch (e) {
    res.json({message: e})
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({_id: req.params.id}, {
      $set: {
        title: req.body.title
      }
    })
    res.json(updatedPost)
  } catch (e) {
    res.json(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const removedPost = await Post.remove({_id: req.params.id})
    res.json(removedPost)
  } catch (e) {
    res.json(e)
  }
})

module.exports = router
