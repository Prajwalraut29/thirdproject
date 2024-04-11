import React from 'react'
import Heading from '../Hoc/Heading'
import JobCategoryCard from '../Helper/JobCategoryCard'

const JobCategory = () => {
    return (
        <div className='pt-20 pb-1'>
            <Heading mainHeading="Popurlar Job Categories " subHeading="2039 jobs live - 293 added today." />
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center'>
                <JobCategoryCard image='/images/icon1.png' category="Finace" openPosition="23" />
                <JobCategoryCard image='/images/icon2.png' category="Marketing" openPosition="23" />
                <JobCategoryCard image='/images/icon3.png' category="Design" openPosition="23" />
                <JobCategoryCard image='/images/icon4.png' category="Development" openPosition="23" />
                <JobCategoryCard image='/images/icon5.png' category="Human Resource" openPosition="23" />
                <JobCategoryCard image='/images/icon6.png' category="Automotive Jobs" openPosition="23" />
                <JobCategoryCard image='/images/icon7.png' category="Customer Services" openPosition="23" />
                <JobCategoryCard image='/images/icon8.png' category="Health and Care" openPosition="23" />
                <JobCategoryCard image='/images/icon9.png' category="Project " openPosition="23" />

            </div>
        </div>
    )
}

export default JobCategory