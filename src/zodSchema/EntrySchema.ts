import {z} from 'zod'


const EntrySchema=z.object({
    text:z.string().min(15).max(2000)
})

export default EntrySchema
