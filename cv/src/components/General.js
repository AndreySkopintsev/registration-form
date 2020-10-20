import React,{useState} from 'react'

const General = () =>{

    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setNumber] = useState('')

    return(
        <div>
            <div className='contact-us'>
                <form>
                <h3>General information</h3>
                    <label htmlFor='customerName'>Full name</label>
                    <input type='text' id='customerName' required={true}/>
                    <label htmlFor='customerEmail'>Email</label>
                    <input type='email' id='customerEmail' required={true}/>
                    <label htmlFor='customerPhone'>Phone number</label>
                    <input type='text' id='phoneNumber' required={true}/>
                    <button id='customerOrder' type='submit'>Submit</button>
                </form>
            </div>
            <div className='contact-us'>
                <form>
                    <h3>Educational experience</h3>
                    <label htmlFor='schoolName'>School name</label>
                    <input type='text' id='schoolName' required={true}/>
                    <label htmlFor='studyTitle'>Title of study</label>
                    <input type='email' id='studyTitle' required={true}/>
                    <label htmlFor='studyDate'>Phone number</label>
                    <input type='date' id='studyDate' required={true}/>
                    <button id='customerOrder' type='submit'>Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default General