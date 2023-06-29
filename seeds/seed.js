const sequelize = require('../config/connection');
const { User, Post, Comments } = require('../Models');

const userData = require('./usersData.json');
const postData = require('./postsData.json');
const commentData = require('./commentsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const post of postData) {
      const createdPost = await Post.create({
        ...post,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
  
      const postComments = commentData.filter(comment => comment.post_id === post.id);
  
      for (const comment of postComments) {
        await Comments.create({
          ...comment,
          user_id: users[Math.floor(Math.random() * users.length)].id,
          post_id: createdPost.id,
        });
      }
    }
  
    process.exit(0);
  };
  
  seedDatabase();