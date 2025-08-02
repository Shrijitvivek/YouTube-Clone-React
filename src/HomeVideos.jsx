import React from 'react'
import './HomeVideos.css'
import VideoCard from './VideoCard'

const videos = [
  
		{
			"id": 2,
			"title": "Microsoft New product",
			"views": "2.8M Views",
			"viewsCount": 2800000,
			"timestamp": "2 days ago",
			"url": "https://www.youtube.com/watch?v=orJSJGHjBLI",
			"channelImage": "https://thedesignlove.com/wp-content/uploads/2018/02/Case-Study-The-Microsoft-Logo-Evolution-5.jpg",
			"channel": "Microsoft",
			"image": "https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4="
		},
		{
			"id": 3,
			"title": "Google has a plan",
			"views": "3M Views",
			"viewsCount": 3000000,
			"timestamp": "4 days ago",
			"url": "https://www.youtube.com/watch?v=JGwWNGJdvx8",
			"channelImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhEa7NqhpdQMnzhWNsCZp9XyH8Lvwgbs6SQ&s",
			"channel": "Google",
			"image": "https://cdn.lifehack.org/wp-content/uploads/2017/02/22104014/131.jpg"
		},
		{
			"id": 4,
			"title": "Why JavaScript is so popular",
			"views": "1.8M Views",
			"viewsCount": 1800000,
			"timestamp": "7 days ago",
			"url": "https://www.youtube.com/watch?v=orJSJGHjBLI",
			"channelImage": "https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg",
			"channel": "JS",
			"image": "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg"
		},
		{
			"id": 5,
			"title": "How encryption works...",
			"views": "1.1M Views",
			"viewsCount": 1100000,
			"timestamp": "10 days ago",
			"url": "https://www.youtube.com/watch?v=JGwWNGJdvx8",
			"channelImage": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_de_PFTA.jpg",
			"channel": "Power",
			"image": "https://www.eff.org/files/styles/resized_banner/public/banner_library/twitter-lock-1.png?itok=XwYtWt1s"
		},
		{
			"id": 6,
			"title": "How to become a web developer",
			"views": "2.3M Views",
			"viewsCount": 2300000,
			"timestamp": "3 days ago",
			"url": "https://www.youtube.com/watch?v=JGwWNGJdvx8",
			"channelImage": "https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/714da1692e8f8d34baff1457ecab1e02.png",
			"channel": "Adil Hossain",
			"image": "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
		},
		{
			"id": 7,
			"title": "Microsoft New product",
			"views": "2.8M Views",
			"viewsCount": 2800000,
			"timestamp": "2 days ago",
			"url": "https://www.youtube.com/watch?v=orJSJGHjBLI",
			"channelImage": "https://thedesignlove.com/wp-content/uploads/2018/02/Case-Study-The-Microsoft-Logo-Evolution-5.jpg",
			"channel": "Microsoft",
			"image": "https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4="
		},
		{
			"id": 8,
			"title": "Google has a plan",
			"views": "3M Views",
			"viewsCount": 3000000,
			"timestamp": "4 days ago",
			"url": "https://www.youtube.com/watch?v=JGwWNGJdvx8",
			"channelImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhEa7NqhpdQMnzhWNsCZp9XyH8Lvwgbs6SQ&s",
			"channel": "Google",
			"image": "https://cdn.lifehack.org/wp-content/uploads/2017/02/22104014/131.jpg"
		},
		{
			"id": 9,
			"title": "Why JavaScript is so popular",
			"views": "1.8M Views",
			"viewsCount": 1800000,
			"timestamp": "7 days ago",
			"url": "https://www.youtube.com/watch?v=orJSJGHjBLI",
			"channelImage": "https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg",
			"channel": "JS",
			"image": "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg"
		},
    {
			"id": 10,
			"title": "How to become a web developer",
			"views": "2.3M Views",
			"viewsCount": 2300000,
			"timestamp": "3 days ago",
			"url": "https://www.youtube.com/watch?v=JGwWNGJdvx8",
			"channelImage": "https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/714da1692e8f8d34baff1457ecab1e02.png",
			"channel": "Adil Hossain",
			"image": "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
		},
  
]

export default function HomeVideos() {
  return (
    <div className='homeVideos'>
      <h2>Recommended</h2>
      <div className='homeVideoItem'>
        {videos.map((video) =>(
           <VideoCard title={video.title}
          views={video.views}
          timestamp={video.timestamp}
          channelImage={video.channelImage}
          channel={video.channel}
          image={video.image} />
        ))}
       


      </div>
    </div>
  )
}
