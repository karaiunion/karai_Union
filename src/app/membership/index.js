'use server'
import { customID, User } from "../../../lib/model"
import Connection from "../../../lib/utils"
const index = async (data) => {
  // const { name, phone, date, Address, email } = Object.fromEntries(formData)
  console.log(data, customID)
  if (data !== undefined) {
    try {
      Connection();
      const newUser = new User({
        memberShipNumber: customID,
        name: data.name,
        dateOfBirth: data.date,
        phone: data.phone,
        email: data.email,
        Address: data.address,

      })

      await newUser.save()
      console.log('saved to DB')
    } catch (error) {
      console.log('error while posting the data', error)
    }
  }
  return (
    <div>

    </div>
  )
}

export default index
