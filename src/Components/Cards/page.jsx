import styled from 'styled-components'
import { birthDay, deathDay } from '../../../lib/data';
import Image from 'next/image';

const Cards = styled.div`
   display:grid;
   grid-template-columns: 0.4fr 0.4fr;
   grid-gap:2rem;
   margin:5rem;
   justify-content: center;
   
`;
const Card1 = styled.div`
   display:grid;
   grid-row-gap: 0.5rem;
   justify-content: center;
   padding:1.5rem;
   background-color: white;
   border-radius: 0.5rem;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
   .birthdayPhoto{
    border-radius: 0.5rem;
   }

`;
const Card2 = styled.div`
    display:grid;
    grid-row-gap: 0.5rem;
    justify-content: center;
    padding:1.5rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    .deathPhoto{
        border-radius: 0.5rem;
    }
`
const page = () => {
    return <Cards>
        {
            birthDay.map((birthday) => {
                return <Card1 key={birthday.id}>
                    <Image src={birthday.img} alt='image' height={300} width={300} className='birthdayPhoto'></Image>
                    <h3>{birthday.name}</h3>
                    <p>{birthday.desc}</p>
                </Card1>
            })
        }

        {
            deathDay.map((deathDay) => {
                return <Card2 key={deathDay.id}>
                    <Image src={deathDay.img} alt='image' height={300} width={300} className='deathPhoto'></Image>
                    <h3>{deathDay.name}</h3>
                    <p>{deathDay.desc}</p>
                </Card2>
            })
        }


    </Cards>
}

export default page
