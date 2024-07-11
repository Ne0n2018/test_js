import React ,{ useState } from 'react'
import axios from 'axios'

const form = () =>{
    const [formdata,setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        job_type: '',
        job_source: '',
        job_description: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        area: '',
        start_date: '',
        start_time: '',
        end_time: '',
        test_select: ''
    })

    const [successMessage,setSuccessMessage] = useState('')
    const handleChange = (e) =>{
        setFormData [name,value] = e.target
        setFormData({
            ...FormData,[name]: value
        })    
}

    const hundle = async (e) => {
        e.preventDeafualt()
        try {
            const response = await axios.post('http://localhost:5000/create-deal',formdata)
            setSuccessMessage(response.data.message)
        } catch (error) {
            console.error('error creating deals',error);
            setSuccessMessage('Error creating deals')
        }
    }
    if (successMessage) {
        return <h1>{successMessage}</h1>
    }

    return(
        <form onSubmit={handleSubmit}>
           <div class = "container">
           <div class = "card">
                <h2>Client details</h2>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            </div>
            <div class = "card">
                <h2>Job details</h2>
                <div>
                <label>Job Type:</label>
                <input type="text" name="job_type" value={formData.job_type} onChange={handleChange} required />
            </div>
            <div>
                <label>Job Source:</label>
                <input type="text" name="job_source" value={formData.job_source} onChange={handleChange} required />
            </div>
            <div>
                <label>Job Description:</label>
                <textarea name="job_description" value={formData.job_description} onChange={handleChange} required></textarea>
            </div>
            </div>
            <div class = "card">
                <h2>service locathion</h2>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
                <label>City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div>
                <label>State:</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} required />
            </div>
            <div>
                <label>Area:</label>
                <input type="text" name="area" value={formData.area} onChange={handleChange} required />
            </div>
            </div>
            <div class = "card">
                <h2>scheduld</h2>
            <div>
                <label>Start Date:</label>
                <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} required />
            </div>
            <div>
                <label>Start Time:</label>
                <input type="time" name="start_time" value={formData.start_time} onChange={handleChange} required />
            </div>
            <div>
                <label>End Time:</label>
                <input type="time" name="end_time" value={formData.end_time} onChange={handleChange} required />
            </div>
            <div>
                <label>Test Select:</label>
                <select name="test_select" value={formData.test_select} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                </select>
            </div>
            </div>
            <button type="submit">Create Deal</button>
           </div>
        </form>
    )
}

export default form