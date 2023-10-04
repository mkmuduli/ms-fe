import SearchSvg from '../assets/SearchSvg'
import ThreeDotsSvg from '../assets/ThreeDots'
import IconButton from '@/components-core/Button/IconButton';

function Chat() {
  return (
    <section>
      <section className="flex items-center px-6 pt-4 gap-1 ">
        <h1 className="text-4xl font-bold dark:text-white grow">Moments</h1>
        <IconButton>
          <SearchSvg />
        </IconButton>

        <IconButton>
          <ThreeDotsSvg />
        </IconButton>
      </section>
    </section>
  );
}

export default Chat;
