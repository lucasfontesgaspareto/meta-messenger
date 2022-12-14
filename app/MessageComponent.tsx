'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { Message } from '../types'
import TimeAgo from 'react-timeago'

type Props = {
  message: Message
}

function MessageComponent({ message }: Props) {
  const { data: session } = useSession()
  const isUser = session?.user?.email === message.email

  return (
    <div className={`flex w-fit ${isUser && 'ml-auto'}`}>
      <div className={`flex-shrink-0  ${isUser && 'order-2'}`}>
        <Image
          className={`object-cover mx-2 rounded-full w-14 h-14`}
          src={message.profile_pic}
          alt="Profile Pic"
          width={50}
          height={10}
        />
      </div>

      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? 'text-blue-400 text-right' : 'text-red-400'
          }`}>
          {message.username}
        </p>

        <div className="flex items-end">
          <div
            className={`px-3 py-2 text-white rounded-lg w-fit ${
              isUser ? 'bg-blue-400 ml-auto order-2' : 'bg-red-400'
            }`}>
            <p>{message.message}</p>
          </div>

          <p
            className={`text-[0.65rem] italic px-2 text-gray-500 ${
              isUser && 'text-right'
            }`}>
            <TimeAgo date={new Date(message.created_at)} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default MessageComponent
