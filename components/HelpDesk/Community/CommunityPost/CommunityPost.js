/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Box from '@mui/material/Box'
// import Image from 'next/image'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded'
import Link from 'next/link'
import { Container } from '@mui/material'

const fakeData = [
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp1.png',
    title: 'Connection timeouts',
    info: 'updated by: robynphd 2 days ago',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp2.jpg',
    title: 'Connection timeouts',
    info: 'updated by: Hilary ouse 11 days ago',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp3.jpg',
    title: 'Connection timeouts',
    info: 'updated by: Weir doe 3 days ago',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp4.jpg',
    title: 'Connection timeouts',
    info: 'updated by: Jake weary 5 days ago',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp5.jpg',
    title: 'Connection timeouts',
    info: 'updated by: Jason response 2 days ago',
  },
  {
    icon: 'https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp6.jpg',
    title: 'Connection timeouts',
    info: 'updated by: Miles tone 7 days ago',
  },
]

const CommunityPost = () => {
  return (
    <div className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold">Docy top community posts</h2>
          <p className="mt-3 text-base text-gray-500">
            Me old mucker chimney pot bodge so I said Oxford my lady show off
            show off <br /> pick your nose and blow off cack cheesed.!
          </p>
        </div>
        <div className="">
          <Box sx={{ flexGrow: 1 }}>
            <div>
              {fakeData.map((item) => (
                <div key={item.title}>
                  <div className="community-post">
                    <div className="flex ">
                      <img
                        src={item?.icon}
                        width="50px"
                        height="50px"
                        alt="img"
                      />
                      <div className="ml-3">
                        <h3 className="text-lg font-medium">
                          <Link href="#">
                            <a className="hover:text-theme-400">
                              {item?.title}
                            </a>
                          </Link>
                        </h3>
                        <p className="text-base  text-gray-500">{item?.info}</p>
                      </div>
                    </div>
                    <div className="flex text-gray-500">
                      <ul className="flex items-center gap-6">
                        <li className="flex items-center gap-2">
                          <RemoveRedEyeRoundedIcon />
                          420
                        </li>
                        <li className="flex items-center gap-2">
                          <QuestionAnswerRoundedIcon />
                          120
                        </li>
                        <li className="flex items-center gap-2">
                          <ThumbUpAltRoundedIcon />5
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </div>
      </Container>
    </div>
  )
}

export default CommunityPost
