import React from 'react'
import JobData from '@/data'
import Link from 'next/link'
import JobCard from '@/app/components/Helper/JobCard'
const page = () => {
    return (
        <div className='mt-12 w-[80%] mx-auto mb-12'>
            <div className='mb-[2rem]'>
                <h1>Show Result ({JobData.length})</h1>
            </div>
            <div className='space-y-8'>
                {
                    JobData.map((job) => {
                        return <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                            <JobCard job={job} />
                        </Link>
                    })
                }

            </div>


        </div>
    )
}

export default page
