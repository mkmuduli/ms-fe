const Welcome = () => {
    return (
        <section className="flex flex-col items-center px-7 self-end" >
            <h1 className="text-3xl leading-normal font-bold" >Welcome to Moment</h1>
            <p className="mt-4" >Read our <a href="/privacy">Privacy Policy</a>. Tap “Agree and Continue” to accept <a href="/term" >Terms of Services.</a></p>
            <button className="mt-9 mb-12 shadow-1 bg-primary-600 h-12 rounded-3xl px-4 text-primary-50 self-stretch " >Agree and Continue</button>
        </section>
    )
}

export default Welcome;