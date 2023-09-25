import '../css/about.css';

const AboutUs = () => {

    return (
        <>
    <section className="home">
        <div className="home-content">
            <h3>Hellow, We are</h3>
            <h1>My moments!🏞️ </h1>
            <p>We are a page where you can save your favorite moments, your trips, your vacations, moments that you would like to save and share with the world!</p>
            <div className="social-media">
                <a href="https://www.facebook.com" ><i className='bi bi-facebook'></i></a>
                <a href="https://www.x.com"><i className='bi bi-x-lg'></i></a>
                <a href="https://www.instagram.com" ><i className='bi bi-instagram' ></i></a>
                <a href="https://web.whatsapp.com" ><i className='bi bi-whatsapp' ></i></a>
            </div>
        </div>
        <div className="home-img">
         <img src="https://my-moments.com/wp-content/uploads/2018/07/MyMoMents-Logo.png" alt="" />   
        </div>
    </section>
        </>
    )
};

export default AboutUs;