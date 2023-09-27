import Image from 'next/image'
import CircleLoaderSVG from '@/assets/circle-loader.svg'

const Initial = ({ loading }) => {
    return (
        <div className="flex flex-col items-center justify-center grow " >
            <Image className='h-[200px]' src="/icon-512x512.png" width={200} height={200} alt="moment-space" />
            {loading ? <Image src={CircleLoaderSVG} className=' absolute bottom-20 ' width={50} height={50} alt='circle-loader' /> : null}
        </div>
    )
}

export default Initial