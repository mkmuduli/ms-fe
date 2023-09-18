import Image  from 'next/image'
import Welcome from './welcome'

const Initial = () => {
    return (
        <>
            <div className="flex items-center justify-center grow" >
                <Image src="/icon-512x512.png" width={200} height={200} alt="moment-space" />
            </div>
            <Welcome />
        </>
    )
}

export default Initial