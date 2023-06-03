import Image from "next/image"
import Link from "next/link"
import style from '@/app/style/navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <div className={style.maincontainer}>
            <Image src={'/logo.png'} alt='logo' height={50} width={50} className={style.navimage}/>
            <div className={style.navtext} gap={5}>

            <Link href='/'>
            <li>Home</li>
            </Link>
            <Link href='/'>
            <li>Profiles</li>
            </Link>
            <Link href='/'>
            <li>Contact</li>
            </Link>
            </div>

        </div>
    
    </nav>
  )
}

export default Navbar