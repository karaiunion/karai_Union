"use client"
import styled from "styled-components"
import Logo from '../../../public/assets/Logo.png'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import Link from "next/link"

const Navbar = styled.div`
    display: grid;
    grid-template-columns: ${props => (props.$homepage ? `1fr 2fr 0.5fr 0.5fr` : `1fr 1.7fr 0.5fr 0.5fr 0.5fr`)};
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 20%;
    font-family: 'Montserrat', sans-serif;
     font-weight: 700;
     .name{
        display: grid;
        color:#D32F2F;
        font-size: 48px;
        justify-content: center;
     }
`;
const LogoImg = styled.div`
    display: grid;
    justify-content: center;
`
const Membership = styled.div`
display: grid;
color: #333333;
font-size:1.5rem ;

`;
const Donation = styled.button`
color: #D32F2F;
border: 3px solid #D32F2F;
:hover{
    color:#FF5252
};
padding:0.5rem;
font-family: 'Montserrat', sans-serif;
font-size: 1.5rem;
font-weight: bold;


`;
const Home = styled.div`
    display: grid;
    justify-content: center;
    font-size:1.5rem ;
`

const page = () => {
    const pathname = usePathname();
    const homepage = pathname === '/';

    return <Navbar $homepage={homepage}>
        <LogoImg>
            <Link href='/'>
                <Image src={Logo} alt="Logo" width={100} height={100} />
            </Link>
        </LogoImg>

        <h1 className="name">Karai Union</h1>
        {!homepage && <Home><Link href='/'>Home</Link></Home>}
        <Membership> <Link href='/membership'> Membership</Link> </Membership>
        <Donation> <Link href='/donations' className="Link">Donations</Link> </Donation>

    </Navbar>

}

export default page
