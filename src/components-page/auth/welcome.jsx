import Button from '@/components-core/button';

const Welcome = () => {
  return (
    <section className='flex flex-col items-center px-7 max-w-[450px] self-center'>
      <h1 className="text-3xl leading-normal font-bold">Welcome to Moment</h1>
      <p className="mt-4">
        Read our <a href="/privacy">Privacy Policy</a>. Tap “Agree and Continue”
        to accept <a href="/term">Terms of Services.</a>
      </p>
      <Button className='mt-9 mb-12 self-stretch'>Agree and Continues</Button>
    </section>
  );
};

export default Welcome;
