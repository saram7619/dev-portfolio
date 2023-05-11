import Image from "next/image"

export default function ProfilePic() {
  return (
    <section className='relative'>
      <div className='mx-auto block -translate-y-12 object-cover object-top md:hidden'>
        <Image
          src='/images/image-profile-mobile.webp'
          alt='adam keyes'
          height={383}
          width={174}
        />
      </div>
      <div className='hidden md:block -translate-y-[7rem] translate-x-[32px] lg:hidden'>
        <Image
          src='/images/image-profile-tablet.webp'
          alt='adam keyes'
          height={600}
          width={322}
        />
      </div>
      <div className='-translate-y-24 -translate-x-14 hidden lg:block'>
        <Image
          src='/images/image-profile-desktop.webp'
          alt='adam keyes'
          height={720}
          width={445}
        />
      </div>
    </section>
  )
}
