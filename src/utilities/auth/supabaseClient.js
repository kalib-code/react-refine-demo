import {createClient} from '@pankod/refine-supabase'


const SUPABASE_URL = "https://owxrvovhxaarralpgbiu.supabase.co"

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODYyMDk5NSwiZXhwIjoxOTU0MTk2OTk1fQ.JtgnLbaPdVwRFhY7Vm_E8ol50uzDaLnIDppDKluI63k'

export const supabaseClient = createClient(SUPABASE_URL,SUPABASE_KEY)