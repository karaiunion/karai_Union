"use client"
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../../public/assets/Logo.png'

const Footer = styled.div`
display: flex;
padding: 1rem; 
justify-content: space-around;
min-height:30%;
background-color: #D32F2F;
color: white;
font-family: 'Montserrat', sans-serif;
`;
const FooterLogo = styled.div`
    
`
const QuickLinks = styled.div`
padding:1.5rem;
.h3{
    font-weight: bold;
    padding:1rem;
}
.p{
    font-weight: 100;  
}
`;
const Contact = styled.div`
padding:1.5rem;
.h2{
    font-weight: bold;
    padding:1rem;
}
.p{
    font-weight: 100;  
}
`;
const page = () => {

    return <Footer>
        <FooterLogo>
            <Image src={Logo} alt="Logo" width={200} height={200} />
        </FooterLogo>
        <QuickLinks>
            <h3>Quick Links</h3>
            <p>Donations</p>
            <p>Memberships</p>
            <p>instagram</p>
            <p>facebook</p>
        </QuickLinks>
        <Contact>
            <h3>Contact</h3>
            <p>address</p>
            <p>email</p>
            <p>phone</p>
        </Contact>
    </Footer>
}

export default page
