/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Navbar from '../../Shared/Navbar/Navbar'
import { Avatar, Container,Grid } from '@mui/material'
import BlogHeroSection from '../../Bolg/BlogHeroSection/BlogHeroSection'
import Link from 'next/link'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from 'react'

const DemoBlog = () => {
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    fetch('https://polar-hamlet-38117.herokuapp.com/blogs')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
    
  })
  return (
    <div>
      <Navbar/>
      <BlogHeroSection/>
      <Container className='mt-16'>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {/* here start show blog section */}
        <Grid item xs={12} sm={6} md={8}>
       {blogs.map(blog=>
         <Grid key={blog?._id} className="mb-8" container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <Grid item xs={12} sm={6} md={4}>
           <img src={blog?.image} className='-mb-4 h-80 md:h-64 w-full md:rounded object-cover' alt="" />
         </Grid>
         <Grid item xs={12} sm={6} md={8}>
         <Link href={`/blog/${blog?._id}`}>
           <a>
           <div className=' border dark:border-gray-800 hover:shadow  md:rounded  px-6 py-5 md:h-64 h-72'>
             <p className='text-red-600'>{blog.category}</p>
             <h3 className='font-bold pt-4 pb-10 hover:underline cursor-pointer '>{blog.title}</h3>
            <div className="md:flex  items-center justify-between">
             <div className="flex items-center mb-4">
             <Avatar
                  alt="Bloggers image"
                  src={blog?.blogger?.image}
                  sx={{ width: 40, height: 40,mr:2 }}
                />
               <p> {blog?.blogger?.displayName} <br />
                 <small className='hidden md:flex'> {blog?.uploadDate} - {blog?.uploadTime}</small></p>
             </div>
             <div>
               <p> <ForumOutlinedIcon sx={{ width: 18, height: 18 }} /></p>
               </div>
             </div>
           </div>
           </a>
          </Link>
         </Grid>
         </Grid>
        
        )}
        </Grid>
        {/*here start sidebar */}
        <Grid item xs={12} sm={6} md={4}>
          <div className="bg-slate-100 dark:bg-Docy-DarkGray rounded search-box text-center p-6">
            <h4 className='mb-2 font-bold'>Search</h4>
            <hr />
            <input type="search" placeholder='Search...' name="" id="" className='bg-slate-200 mt-4 mb-6 py-2 px-4 w-80 focus:outline-none rounded-full' />
          </div>
          <div className=" bg-slate-100 dark:bg-Docy-DarkGray rounded recent-blog mt-10 text-center p-4 mb-10">
            <h4 className='mb-2 font-bold'>Recent Post</h4>
            <hr />
            <div className="recent-blog mt-6">
              <div className=" flex ">
                <img className='w-32 h-32 rounded ' src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/275367712_1648586195500355_2483915726415132579_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=xKjSr6auZKgAX9IgnS8&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9VEuqlManHEEBqyZKrD1d3LF7MlwYQQf3m_BEx-MpR4Q&oe=622D3A81" alt="" />
                <Link href='/#'>
                <div className='text-left px-6 '><p className='hover:underline cursor-pointer font-medium'>We spoke to some of our amazing female colleagues  </p>
                
                <small className='flex pt-2'>January 21, 2021 4 min read</small></div>
               
                </Link>
              </div>
            </div>
            <div className="recent-blog mt-6">
              <div className=" flex ">
                <img className='w-32 h-32 rounded ' src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/275065633_3077111162601122_2651930209104763729_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=RFPAGTkEdRkAX9CrtTb&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-x9Q0VC19Lzk19fvHSuPnfNdb4IN4vo7aX14x7pAhMZA&oe=622C1855" alt="" />
                <Link href='/#'>
                <div className='text-left px-6 '><p className='hover:underline cursor-pointer font-medium'>iPadOS 14 introduces new designed specifically for</p>
                
                <small className='flex pt-2'>January 21, 2021 4 min read</small></div>
               
                </Link>
              </div>
            </div>
            <div className="recent-blog mt-6">
              <div className=" flex ">
                <img className='w-32 h-32 rounded ' src="https://images.unsplash.com/photo-1537174621888-eba6137cf6c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <Link href='/#'>
                <div className='text-left px-6 '><p className='hover:underline cursor-pointer font-medium'>Browse premium related images on iStock </p>
                
                <small className='flex pt-2'>January 21, 2021 4 min read</small></div>
               
                </Link>
              </div>
            </div>
           
          </div>

          <div className="bg-slate-100 dark:bg-Docy-DarkGray rounded  text-center p-8 mb-10">
            <h4 className='mb-2 font-bold'>Stay In Touch</h4>
            <hr />
            <div>
        <ul className='flex sidebar-icon mt-4 justify-center text-gray-500'>
          <li>
            <Link href='/'>
            <a><FacebookIcon/></a>
            </Link>
          </li>
          <li>
            <Link href='/'>
            <a><TwitterIcon/></a>
            </Link>
          </li>
          <li>
            <Link href='/'>
            <a><PinterestIcon/></a>
            </Link>
          </li>
          <li>
            <Link href='/'>
            <a><LinkedInIcon/></a>
            </Link>
          </li>
          <li>
            <Link href='/'>
            <a><InstagramIcon/></a>
            </Link>
          </li>
          
        </ul>
      </div> 
          </div>
          <div className="bg-slate-100 dark:bg-Docy-DarkGray rounded text-center p-6 mb-10">
            <h4 className='mb-2 font-bold'>All Category</h4>
            <hr />
            <div className='category grid grid-cols-3 gap-4   mt-4'>
             <li>Creative</li>
             <li>Inspiration</li>
             <li>Lifestyle</li>
             <li>News</li>
             <li>Photography</li>
             <li>Skill</li>
             <li>Trending</li>
             <li>Tourist</li>
             <li>Education</li>
            </div>
          </div>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DemoBlog;