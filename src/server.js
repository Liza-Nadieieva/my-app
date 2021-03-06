const app = require('express')();
app.listen(3001, function () {
	console.log('Server was started!')
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var data = {
	users: [
	{id:1,
		name:'Harry',
		follow: true,
		photoUrl:'https://vignette.wikia.nocookie.net/harrypotter/images/c/cf/PromoHP7_Harry.jpg/revision/latest?cb=20150312181426&path-prefix=ru',
		status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:2,
		name:'Bill',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:3,
		name:'Leonardo',
		follow: true,
		photoUrl:'https://glavcom.ua/img/article/5431/70_main.jpg',
		status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:4,
		name:'Nicole',
		follow: true,
		photoUrl:'https://www.film.ru/sites/default/files/styles/epsa_260x320/public/people/1455175-1108092.jpg',
		status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:5,
		name:'Masha',
		follow: true,
		photoUrl:'https:download-telegram.ru/wp-content/uploads/2017/01/stikery-diggi-dlya-telegram-2.png',
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:6,
		name:'Severus',
		follow: true,
		photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR98gEy81QWJNiYH7zuaAD8DNbrNaIa3aI4QVaplXQFhHx3YLX4&usqp=CAU',
		status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:7,
		name:'Luka',
		follow: false,
		photoUrl:'https:телеграм.мессенджеры.рус/wp-content/uploads/2015/09/telegram-online-hrysha-vinki-12.png',
		status:'I like potatoes',
		location: {city:'Minsk', country:'Belarus'}},
	{id:8,
		name:'Yehor',
		follow: true,
		photoUrl:'https:wiki-vk.ru/s/101/512/40.png', status:'i like bread',
		location: {city:'Moscow', country:'Russia'}},
	{id:9,
		name:'Polya',
		follow: false,
		photoUrl:'https:tgrm-a.akamaihd.net/img/stickers/vk_diggy/31.jpg',
		status:'I\'m learning react too', location: {city:'Moscow', country:'Russia'}},
	{id:10,
		name:'Lucy', 
		follow: false, 
		photoUrl:'https:encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuUcWBVQjTW3jolO6LXuImmwzx9RGRmS5J5q7aYKcF3z7aQExY&usqp=CAU', 
		status:'hi, follow me',
		location: {city:'Minsk', country:'Belarus'}},
	{id:11,
		name:'Bill',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:12,
		name:'Petr',
		follow: false,
		photoUrl:'https:телеграм.мессенджеры.рус/wp-content/uploads/2015/09/telegram-online-hrysha-vinki-12.png',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:13,
		name:'Frodo',
		follow: false,
		photoUrl:'https://img.rl0.ru/86c3e8747484282d93880a45c6ad9080/c615x400i/news.rambler.ru/img/2019/10/18102217.736679.5588.jpeg',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:14,
		name:'Masha',
		follow: true,
		photoUrl:'https:download-telegram.ru/wp-content/uploads/2017/01/stikery-diggi-dlya-telegram-2.png',
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:15,
		name:'Bill',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:16,
		name:'Mona Liza',
		follow: false,
		photoUrl:'https://12millionov.com/wp-content/uploads/2017/05/%D0%98%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D1%8B-%D0%BC%D0%B8%D1%80%D0%B0-1.jpg',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:17,
		name:'Mr Bean',
		follow: false,
		photoUrl:'https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:18,
		name:'Dr House',
		follow: false,
		photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMdrE015a5cOpqJsF-jcxBBCTq3RLTRd6Nfa_EcDcNg3fDDQZz&usqp=CAU',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:19,
		name:'Edward',
		follow: false,
		photoUrl:'https://a.wattpad.com/cover/35235250-288-k697042.jpg',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:20,
		name:'Peter',
		follow: false,
		photoUrl:'https://pbs.twimg.com/profile_images/1126440349486940161/kYvxGRXc_400x400.jpg',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:21,
		name:'Bill',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:22,
		name:'Stewie',
		follow: false,
		photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfO-z8XA8hfb7aKq6BoghnZmtbYHTqxXTqcM4DJfiUHMQbbEup&usqp=CAU',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:23,
		name:'Jack',
		follow: true,
		photoUrl:'https://vignette.wikia.nocookie.net/stephenking/images/6/6c/Jacktorrance1980.jpeg/revision/latest?cb=20191007030512',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:24,
		name:'Masha',
		follow: true,
		photoUrl:'https:download-telegram.ru/wp-content/uploads/2017/01/stikery-diggi-dlya-telegram-2.png',
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:25,
		name:'Jim',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:26,
		name:'Stephen',
		follow: true,
		photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3GmwvxlbMT_8ls5rAdQ_2Y0nUs215uQynd2Kq2LQxgit4dVTD&usqp=CAU',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:27,
		name:'Giraffe',
		follow: true,
		photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRE3FU0B8Oku3h6ewZWVE1VbeGdeFj3CUqVkG-bqsuOMNaUeKN7&usqp=CAU',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:28,
		name:'Lucy', 
		follow: false, 
		photoUrl:'https:encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuUcWBVQjTW3jolO6LXuImmwzx9RGRmS5J5q7aYKcF3z7aQExY&usqp=CAU', 
		status:'hi, follow me',
		location: {city:'Minsk', country:'Belarus'}},
	{id:29,
		name:'Andy',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:30,
		name:'Giraffe',
		follow: true,
		photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRE3FU0B8Oku3h6ewZWVE1VbeGdeFj3CUqVkG-bqsuOMNaUeKN7&usqp=CAU',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:31,
		name:'Lucy', 
		follow: false, 
		photoUrl:'https:encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuUcWBVQjTW3jolO6LXuImmwzx9RGRmS5J5q7aYKcF3z7aQExY&usqp=CAU', 
		status:'hi, follow me',
		location: {city:'Minsk', country:'Belarus'}},
	{id:32,
		name:'Bill',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:33,
		name:'Lucas',
		follow: true,
		photoUrl:'https://steemitimages.com/DQmPXaiDVw4EkjX93oa5XkCWcSSSHAewwJQ5me7X27vTYPo/maxresdefault4.jpg',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:34,
		name:'Petr',
		follow: false,
		photoUrl:'https:телеграм.мессенджеры.рус/wp-content/uploads/2015/09/telegram-online-hrysha-vinki-12.png',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:35,
		name:'Petr',
		follow: false,
		photoUrl:null,
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:36,
		name:'Polya',
		follow: false,
		photoUrl:'https:tgrm-a.akamaihd.net/img/stickers/vk_diggy/31.jpg',
		status:'I\'m learning react too',
		location: {city:'Moscow', country:'Russia'}},
	{id:37,
		name:'Mona Liza',
		follow: false,
		photoUrl:'https://12millionov.com/wp-content/uploads/2017/05/%D0%98%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D1%8B-%D0%BC%D0%B8%D1%80%D0%B0-1.jpg',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:38,
		name:'Mr Bean',
		follow: false,
		photoUrl:'https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:39,
		name:'Bill',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:40,
		name:'Leonardo',
		follow: true,
		photoUrl:'https://glavcom.ua/img/article/5431/70_main.jpg',
		status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:41,
		name:'Jack',
		follow: true,
		photoUrl:'https://vignette.wikia.nocookie.net/stephenking/images/6/6c/Jacktorrance1980.jpeg/revision/latest?cb=20191007030512',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:42,
		name:'Pennywise',
		follow: true,
		photoUrl:'https://cdn.images.express.co.uk/img/dynamic/36/590x/It-Chapter-Two-Can-Pennywise-be-killed-Is-he-gone-forever-1175120.jpg?r=1567871248412',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:43,
		name:'Church',
		follow: true,
		photoUrl:'https://api.time.com/wp-content/uploads/2019/05/pet-sematary-cat-leo-dies.png?w=1024&h=449&crop=1',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:44,
		name:'Cheshire Cat',
		follow: true,
		photoUrl:'https://vignette.wikia.nocookie.net/maymurmir/images/5/57/131.jpg/revision/latest/scale-to-width-down/340?cb=20150725131834&path-prefix=ru',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:45,
		name:'SpongeBob',
		follow: false,
		photoUrl:'https://i2-prod.mirror.co.uk/incoming/article4330476.ece/ALTERNATES/s1200b/Spongebob-Squarepants.jpg',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:46,
		name:'Bill',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:47,
		name:'Peter',
		follow: false,
		photoUrl:'https://pbs.twimg.com/profile_images/1126440349486940161/kYvxGRXc_400x400.jpg',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	{id:48,
		name:'Masha',
		follow: true,
		photoUrl:'https:download-telegram.ru/wp-content/uploads/2017/01/stikery-diggi-dlya-telegram-2.png',
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:49,
		name:'Bill',
		follow: true,
		photoUrl: null,
		 status:'Follow me!',
		location: {city:'Kyiv', country:'Ukraine'}},
	{id:50,
		name:'Petr',
		follow: false,
		photoUrl:'https:телеграм.мессенджеры.рус/wp-content/uploads/2015/09/telegram-online-hrysha-vinki-12.png',
		status:'I\'m learning react-redux',
		location: {city:'Minsk', country:'Belarus'}},
	],

}

app.get('/api/users', function (request, res) {
  count = Number(request.query.count) || 10
  page = Number(request.query.page) || 1
  start = (page - 1) * count

  if (request.query.user_id) {

    res.send({
    	user: data.users.find((el) => { return el.id == request.query.user_id})
    })

  } else {
	  res.send({
	  	users: data.users.slice(start, start + count),
	  	total_count: data.users.length
	  })
  }
})


