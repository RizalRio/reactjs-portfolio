import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";

export default function Welcome(props) {
    const heroStyle = {
        backgroundImage: "url(../../storage/images/hero.jpeg)",
    };
    return (
        <>
            <Head title="Welcome" />
            <NavBar />
            <section id="heroSection">
                <div className="hero min-h-screen" style={heroStyle}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                                Hello there
                            </h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="aboutSection" className="p-5">
                <div className="container mx-auto w-5/6 pb-4 text-left text-center md:w-3/6">
                    <h1 className="text-3xl md:text-4xl  pb-2 mb-3 border-b border-indigo-500 w-1/2 mx-auto">
                        About Me
                    </h1>
                    <p>
                        Deskripsi singkat tentang pribadi, pengalaman, minat,
                        dan tujuan penulis atau pemilik website.
                    </p>
                </div>
                <div className="container bg-neutral mx-auto rounded-lg w-5/6 md:w-4/6 my-3 h-auto">
                    <div className="flex flex-col lg:flex-row h-full">
                        <div className="basis-2/5">
                            <img
                                src={props.profileImageUrl}
                                alt="image"
                                className="object-cover h-full rounded-lg w-full"
                            />
                        </div>
                        <div className="basis-3/5 p-9 my-auto">
                            <div className="mb-5">
                                <div className="text-2xl md:text-4xl text-center md:text-left font-semibold">
                                    Halo! Saya Chris
                                </div>
                                <br />
                                <p className="text-sm text-center md:text-justify md:text-lg">
                                    Seorang{" "}
                                    <span className="font-extrabold">
                                        programmer
                                    </span>{" "}
                                    dengan kecintaan mendalam terhadap dunia
                                    pengembangan web. Saya telah menggali
                                    berbagai teknologi seperti HTML, CSS,
                                    JavaScript, dan Python untuk menciptakan
                                    website yang menarik dan responsif.
                                    Portfolio ini adalah refleksi dari
                                    perjalanan kreatif saya, di mana saya dengan
                                    antusias berbagi beberapa proyek terbaik
                                    yang telah saya rancang dan implementasikan.
                                </p>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <a href="/" className="btn btn-primary">
                                    Contact me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="mySkillSection" className="p-5">
                <div className="container mx-auto w-5/6 pb-4 text-left text-center md:w-3/6">
                    <h1 className="text-3xl md:text-4xl  pb-2 mb-3 border-b border-indigo-500 w-1/2 mx-auto">
                        My Skill
                    </h1>
                    <p>
                        Mencerminkan beragam kemampuan yang saya miliki, mulai
                        dari keterampilan teknis dalam pemrograman hingga
                        keahlian dalam komunikasi dan kerja tim.
                    </p>
                </div>
                <div className="container bg-neutral mx-auto rounded-lg w-5/6 md:w-4/6 my-3 h-auto p-10">
                    <div className="flex flex-col lg:flex-row h-full">
                        <div className="basis-2/6">
                            <div className="flex flex-col w-full">
                                <div className="container mb-5 h-full">
                                    <div className="flex justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-28 h-28"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="text-center text-2xl md:text-3xl">
                                        Backend
                                    </h1>
                                    <div className="p-5">
                                        <p className="text-center">
                                            Dalam pengembangan backend, saya
                                            memiliki pengetahuan yang kuat dalam
                                            membangun dan mengelola server serta
                                            database.
                                        </p>
                                    </div>
                                </div>
                                <div className="container px-5">
                                    <h1 className="text-center text-sm md:text-md font-thin mb-4">
                                        Programming language that I use :
                                    </h1>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/php.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="85"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/java.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="75"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/js.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="73"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/c-.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="40"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/letter-c.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="67"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container px-5">
                                    <h1 className="text-center text-sm md:text-md font-thin mb-4">
                                        Backend framework that I use :
                                    </h1>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/laravel.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="50"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/codeigniter.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="80"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-2/6">
                            <div className="flex flex-col w-full">
                                <div className="container mb-5 h-full">
                                    <div className="flex justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-28 h-28"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="text-center text-2xl md:text-3xl">
                                        Frontend
                                    </h1>
                                    <div className="p-5">
                                        <p className="text-center">
                                            Sebagai seorang pengembang frontend,
                                            saya memiliki keahlian dalam
                                            menciptakan antarmuka pengguna yang
                                            menarik dan responsif.
                                        </p>
                                    </div>
                                </div>
                                <div className="container px-5">
                                    <h1 className="text-center text-sm md:text-md font-thin mb-4">
                                        Programming language that I use :
                                    </h1>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/html-5.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="100"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/css-3.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="75"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/physics.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="61"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/js.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="73"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container px-5">
                                    <h1 className="text-center text-sm md:text-md font-thin mb-4">
                                        Front framework that I use :
                                    </h1>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/bootstrap.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="90"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/tailwind-css-icon.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="83"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-2/6">
                            <div className="flex flex-col w-full">
                                <div className="container mb-5 h-full">
                                    <div className="flex justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-28 h-28"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="text-center text-2xl md:text-3xl">
                                        Design
                                    </h1>
                                    <div className="p-5">
                                        <p className="text-center">
                                            Keterampilan desain saya meliputi
                                            pemahaman mendalam tentang
                                            prinsip-prinsip desain visual,
                                            komposisi, dan tipografi.
                                        </p>
                                    </div>
                                </div>
                                <div className="container px-5">
                                    <h1 className="text-center text-sm md:text-md font-thin mb-3">
                                        Tools that I use :
                                    </h1>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/canva.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="90"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/adobe-illustrator.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="63"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/adobe-photoshop.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="40"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                        <div className="flex flex-row container mb-3">
                                            <div className="basis-1/4">
                                                <div className="flex justify-left">
                                                    <img
                                                        src="../../storage/images/corel-draw.png"
                                                        alt=""
                                                        className="w-6 lg:w-10 h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="basis-3/4 m-auto">
                                                <progress
                                                    className="progress progress-primary w-full"
                                                    value="48"
                                                    max="100"
                                                ></progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="aboutSection" className="p-5">
                <div className="container mx-auto w-5/6 md:w-4/6 pb-4 text-center md:w-3/6">
                    <h1 className="text-3xl md:text-4xl  pb-2 mb-3 border-b border-indigo-500 w-1/2 mx-auto">
                        My Experience
                    </h1>
                    <p>
                        Deskripsi singkat tentang pribadi, pengalaman, minat,
                        dan tujuan penulis atau pemilik website.
                    </p>
                </div>
                <div className="container mx-auto rounded-lg w-5/6 md:w-4/6 my-3 h-auto">
                    <div className="flex flex-col h-full">
                        <div className="card w-full bg-neutral shadow-xl mb-5">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                        <div className="card w-full bg-neutral shadow-xl mb-5">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                        <div className="card w-full bg-neutral shadow-xl mb-5">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="myGalerySection" className="p-5">
                <div className="container mx-auto w-5/6 pb-4 text-left text-center md:w-3/6">
                    <h1 className="text-2xl md:text-3xl pb-2 mb-3 border-b border-indigo-500 w-1/2 mx-auto">
                        Projects I've Worked On
                    </h1>
                    <p>
                        Beragam proyek yang telah saya ikuti selama karier saya.
                    </p>
                </div>
                <div className="container mx-auto rounded-lg w-5/6 md:w-4/6 my-3 h-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="card bg-neutral shadow-xl">
                            <figure>
                                <img
                                    src="../../storage/images/hero.jpeg"
                                    alt="myProject"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    New movie is released!
                                </h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-primary">
                                        Watch
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-neutral shadow-xl">
                            <figure>
                                <img
                                    src="../../storage/images/hero.jpeg"
                                    alt="myProject"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    New movie is released!
                                </h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-primary">
                                        Watch
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-neutral shadow-xl">
                            <figure>
                                <img
                                    src="../../storage/images/hero.jpeg"
                                    alt="myProject"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    New movie is released!
                                </h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-primary">
                                        Watch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="myGalerySection" className="p-5">
                <div className="container mx-auto w-5/6 pb-4 text-left text-center md:w-3/6">
                    <h1 className="text-2xl md:text-3xl pb-2 mb-3 border-b border-indigo-500 w-1/2 mx-auto">
                        Check Out My Gallery
                    </h1>
                    <p>
                        Beragam proyek yang telah saya ikuti selama karier saya.
                    </p>
                </div>
                <div className="container mx-auto rounded-lg w-5/6 md:w-4/6 my-3 h-auto">
                    <div class="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="../../storage/images/profile.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="../../storage/images/profile.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="../../storage/images/profile.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="../../storage/images/hero.jpeg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
