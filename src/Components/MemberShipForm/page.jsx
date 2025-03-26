// 'use client'
// import styled from "styled-components"
// import { useForm, Controller } from "react-hook-form"
// import { LoadScript, Autocomplete } from "@react-google-maps/api";
// import { useState } from "react";
// import index from "@/app/membership";


// const Memberships = styled.div`
//     display: grid;
//     grid-template-columns: 0.3fr;
//     justify-content: center;
//     .form {
// display: grid;
// justify-content: center;
// border-radius: 0.7rem;
//  grid-row-gap: 1.5rem;
//  padding:2rem;
//  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

// }
// `;
// const Form = styled.form`
// `;
// const Name = styled.div`
//   display: grid;  
// `;
// const Phone = styled.div`
//     display: grid;
// `;
// const DateOfBirth = styled.div`
//     display: grid;
// `;
// const Address = styled.div`
//     display: grid;
//     .autocomplete{
//         display: grid;
//     }
// `;
// const Email = styled.div`
//     display: grid;
// `;
// const Heading = styled.h1`
// color: #D32F2F;
// `
// const Label = styled.label`
//     font-style: 'Roboto',sans-serif;
//     font-size: 1.2rem;
// `;
// const Input = styled.input`
//     font-style:'Roboto', sans-serif;
//     padding:1rem;
//     border-radius: 0.3rem;
    
// `;
// const Errors = styled.span`
//     color: red;
// `
// const page = () => {
//     const {
//         register,
//         formState: { errors },
//         handleSubmit,
//         control,
//         setValue,
//         reset
//     } = useForm()
//     const { autocomplete, setAutocomplete } = useState('hyderabad')
//     const handlePlaceSelect = () => {
//         const place = autocomplete.getPlace();
//         if (place?.formatted_address) {
//             setValue("address", place.formatted_address, { shouldValidate: true }); // Set selected address in form
//         }
//     };
//     const onSubmit = (data) => {
//         reset();
//         console.log(data)
//     }
//     return (
//         <div>
//             <Memberships>

//                 <form className="form" >
//                     {/* {console.log(errors)} */}
//                     <Heading>MEMBERSHIP FORM</Heading>
//                     <Name>
//                         <Label>Full Name</Label>
//                         <Input type="name" name="name" {...register('name', { required: 'name is required' })} />

//                         {errors.name && <Errors>{errors.name.message}</Errors>}
//                     </Name>
//                     <Phone>
//                         <Label>Phone </Label>
//                         <Input type='phone' name="phone" {...(register('phone', { required: "Phone number is required" }))} />
//                         {
//                             errors.phone && <Errors>{errors.phone.message}</Errors>
//                         }
//                     </Phone>
//                     <DateOfBirth>
//                         <Label>Date Of Birth</Label>
//                         <Input type="date" name="date" {...(register('date', { required: 'Date Of Birth is required' }))} />
//                         {errors.date && <Errors>{errors.date.message}</Errors>}
//                     </DateOfBirth>
//                     <Email>
//                         <Label>Eamil</Label>
//                         <Input type='email' name="email" {...register('email', { required: 'Email address is Required' })} />
//                         {errors.email && <Errors>{errors.email.message}</Errors>}
//                     </Email>
//                     <Address>
//                         <Label>Address</Label>
//                         <Controller
//                             control={control}
//                             rules={{ required: "Address is required" }}
//                             name="Address"
//                             render={({ field }) => (
//                                 <Autocomplete
//                                     className="autocomplete"
//                                     onLoad={setAutocomplete}
//                                     onPlaceChanged={handlePlaceSelect}
//                                     options={{
//                                         types: ["address"],
//                                         componentRestrictions: { country: 'gb' }
//                                     }}
//                                 >
//                                     <Input onKeyDown={(e) => {
//                                         if (e.key === 'Enter') {
//                                             e.preventDefault(); // ⛔ Prevent the form or autocomplete from submitting
//                                         }
//                                     }}
//                                         type="address"
//                                         name='address'
//                                         // {...register('address', { required: 'Address is required' })}
//                                         {...field}
//                                         placeholder="Start typing your address..." />

//                                 </Autocomplete>
//                             )}
//                         />
//                         {errors.address && <Errors>{errors.address.message}</Errors>}
//                     </Address>
//                     <button type="submit" onClick={(e) => { e.preventDefault(); handleSubmit(onSubmit)() }}>SUBMIT</button>
//                 </form>

//             </Memberships>
//         </div>
//     )
// }

// export default page
