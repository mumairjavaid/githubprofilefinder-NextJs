'use client';

import styles from '@/app/style/hero.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Herosection = () => {
  const [first, setFirst] = useState("")
  const [user, setUser] = useState([])

  const profileSearch = async ()=>{
    const url = await fetch(`https://api.github.com/search/users?q=${first}`)
    const profile_data =await url.json()
    const data = profile_data.items
    setUser(data)
    
 }
  
  return (
    <>
    <div className={styles.herocontainer}>
        <div className={styles.inputContainer}>

                <h2 style={{color:'black',marginBottom:'10px'}}>Github Profile Finder</h2>
                <input className={styles.search} type="text" placeholder='Search any profile....' value={first} onChange={(e)=>setFirst(e.target.value)} />
                <button className={styles.herobutton} onClick={profileSearch}>Search</button>
            
        </div>

        <div className={styles.imgContainer}>
        {user.map((curr,id)=>{
                    return (
                <div className={styles.container} key={id}>
                
                    <Image src={curr.avatar_url} alt="" width={100} height={100} />
                    <p>Name: {curr.login}</p>
                    <Link href={`/user/${curr.login}`}> Profile </Link>
                                 
                </div>     
            )})
            } 
        </div>
    </div>
    {/* <div className="profiles">
        {user.map((curr,id)=>{
                    return (
                <div className={styles.container} key={id}>
                
                    <Image src={curr.avatar_url} alt="" width={100} height={100} />
                    <p>Name: {curr.login}</p>
                    <Link href={`/user/${curr.login}`}> Profile </Link>
                                 
                </div>
                
     );
                })
            } 
    </div> */}
    </>
  )
}

export default Herosection