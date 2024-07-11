const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000
const api_token = require('./config/key')

app.use(cors())
app.use(bodyparser())

app.post('/create-deal',async (req,res) =>{
    const{
        first_name,
        last_name,
        phone,
        email,
        job_type,
        job_source,
        job_description,
        address,
        city,
        state,
        zip_code,
        area,
        start_date,
        start_time,
        end_time,
        test_select
    } = req.body

    try {
        const response = await axios.post(`https://api.pipedrive.com/v1/deals?api_token=${api_token.API_TOKEN}`,{
            title: `${job_type} for ${first_name} ${last_name}`,
            person_id: null,
            org_id: null,
            value: 0,
            currency: "USD",
            user_id: null,
            stage_id: null,
            status: "open",
            visible_to: "3",
            add_time: start_date,
            expected_close_date: end_time,
            custom_fields: {
                first_name,
                last_name,
                phone,
                email,
                job_type,
                job_source,
                job_description,
                address,
                city,
                state,
                zip_code,
                area,
                start_time,
                test_select
    }
})
        res.status(200).json({
            message:'deal created succesfully',data:response.data
        })
    } catch (error) {
        console.error('Error creating deal',error)
        res.status(500).json({
            message:'Error creating deal',
            error: error.message
        })
    }
})

app.listen(PORT,() => {
    console.log(`Server is runnig on port ${PORT}`);
})