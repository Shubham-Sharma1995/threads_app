import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  members: {
    image: string;
  }[];
}

function CommunityCard({ id, name, username, imgUrl, bio, members }: Props) {
  return (
    <article className='community-card'>
      <div className='flex flex-wrap items-center gap-3'>
        <Link href={`/communities/${id}`} className='relative h-12 w-12'>
          <Image
            src={imgUrl}
            alt='community_logo'
            fill
            className='rounded-full object-cover'
          />
        </Link>

        <div>
          <Link href={`/communities/${id}`}>
            <h4 className='text-base-semibold text-light-1'>{name}</h4>
          </Link>
          <p className='text-small-medium text-gray-1'>@{username}</p>
        </div>
      </div>

      <p className='mt-4 text-subtle-medium text-gray-1'>{bio}</p>

      <div className='mt-5 flex flex-wrap items-center justify-between gap-3'>
        <Link href={`/communities/${id}`}>
          <Button size='sm' className='community-card_btn'>
            View
          </Button>
        </Link>

        {members.length > 0 && (
          <div className='flex items-center'>
            {members.map((member, index) => (
              <Image
                key={index}
                src={member.image}
                alt={`user_${index}`}
                width={28}
                height={28}
                className={`${
                  index !== 0 && "-ml-2"
                } rounded-full object-cover`}
              />
            ))}
            {members.length > 3 && (
              <p className='ml-1 text-subtle-medium text-gray-1'>
                {members.length}+ Users
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default CommunityCard;


// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bG9naWNhbC1yZWRmaXNoLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ
// CLERK_SECRET_KEY=sk_test_BF3UxHC2A5a1tCFan8w1xGL03hWYZl5IhTmWMv6XqG

// NEXT_CLERK_WEBHOOK_SECRET=whsec_TzIrViOOgG0w78d4QNOjfB7FM+j9iFbE
// NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
// NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
// NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
// NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

// MONGODB_URL=mongodb+srv://sjshubham1995:mlSXcmU4Vj8pepcK@cluster0.ccboded.mongodb.net/?retryWrites=true&w=majority

// UPLOADTHING_SECRET=sk_live_1061220c5554f8adbca514cc78a0b1b9c0b660ba5e85bb9413085837d999f74f
// UPLOADTHING_APP_ID=xrgbht0vea