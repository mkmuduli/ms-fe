// import Image from 'next/image';
// import Search from '../assets/search.svg'
// import ThreeDots from '../assets/three-dots.svg'
import IconButton from '@/components-core/Button/IconButton';

function Chat() {
  return (
    <section>
      <section className="flex items-center px-6 pt-4 gap-1 ">
        <h1 className="text-4xl font-bold dark:text-white grow">Moments</h1>
        <IconButton>
          {/* <Image src={Search} alt='search button' /> */}
          {/* <Search /> */}
        </IconButton>

        {/* <IconButton>
          <Image src={ThreeDots} alt='menu button' />
        </IconButton> */}
      </section>
    </section>
  );
}

export default Chat;
