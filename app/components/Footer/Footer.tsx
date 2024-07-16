import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'https://www.facebook.com/anumeriquefrance',
        width: 10
    },
    {
        imgSrc: '/assets/footer/insta.svg',
        link: 'https://www.instagram.com/association.anumerique?igsh=MTFuNGR5d24zdng4ZQ==',
        width: 14
    },
    {
        imgSrc: '/assets/footer/tiktok.svg',
        link: 'https://www.tiktok.com/@anumerique1?_t=8klMy168wPh&_r=1',
        width: 14
    },
    {
        imgSrc: '/assets/footer/linkedin.svg',
        link: 'https://www.linkedin.com/company/a-numérique?trk=organization_guest_main-feed-card_feed-actor-name',
        width: 14
    },
    {
        imgSrc: '/assets/footer/youtube.svg',
        link: 'https://youtube.com/@a-numerique?si=8bd0-ypf7MdySinv',
        width: 14
    },
]

const products: ProductType[] = [
    {
        id: 1,
        section: "Notre ASSOS",
        link: ['A propos', 'JOBS'],
    },
    {
        id: 2,
        section: "Contact",
        link: ['AIDE/FAQ','Partenaires']
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/assets/logo/logoAnum2.png" alt="logo" width={184} height={56} />
                    </div>
                    <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16'> L’éducation n’est pas un privilège.  <br />C’est un droit acquis à la naissance </h3>
                    <div className='flex gap-4'>

                        {socialLinks.map((items, i) => (
                        <Link href={items.link} key={i}>
                            <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                                <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                            </div>
                        </Link>
                        ))}

                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}


                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-lg font-medium mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link: string, index: number) => (
                                <li key={index} className='mb-5'>
                                    <Link href="/" className="text-darkgray text-base font-normal mb-6 space-links">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
                <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>@2023.Anumerique.All rights reserved</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                    <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default footer;
