import CardModule from "../../../components/Base/CardModule"

const AboutExp = () => {

    const cardExperiences = {
        imageSrc: '/images/modules/img-digital-experencies.jpeg',
        imageAlt: 'Profile Image',
        title: 'Digital Experiences With',
        description: 'Using technology to optimize time helps automate repetitive tasks, reduce errors, and enhance efficiency. Project management tools and online collaboration software enable you to work more effectively, save time, and focus on important tasks. With technology, you can complete projects faster and achieve better results, thereby bringing significant benefits to both individuals and businesses.'
    }

    const savingTime = {
        imageSrc: '/images/modules/img-digital-experencies.jpeg',
        imageAlt: 'Profile Image',
        title: 'Digital Experiences With',
        description: 'Using technology significantly saves time. Automation tools and project management software help complete tasks faster, reduce manual steps, and optimize workflows. This allows you to focus on more important tasks, increase productivity, and achieve better results in less time. Technology is the key to working smarter and more efficiently.'
    }

    const effective = {
        imageSrc: '/images/modules/img-digital-experencies.jpeg',
        imageAlt: 'Profile Image',
        title: 'Digital Experiences With',
        description: 'Using technology enhances your work efficiency. Analytical tools and automation software enable you to process data quickly and accurately, optimize workflows, and minimize errors. This not only helps you complete tasks more efficiently but also improves the quality of outcomes. Technology allows you to maximize your time and resources, achieving your goals more swiftly and effectively.'
    }

    const optimal = {
        imageSrc: '/images/modules/img-digital-experencies.jpeg',
        imageAlt: 'Profile Image',
        title: 'Digital Experiences With',
        description: 'Using technology not only optimizes time but also significantly reduces costs. Automation tools and management software allow you to minimize required resources, cut operational expenses, and streamline workflows. This helps you avoid wasting resources while increasing efficiency and effectiveness in business operations. With technology, you can achieve business goals at a lower cost, providing long-term benefits for your company.'
    }

    return (
        <div className="flex flex-col w-full items-center py-10">
            <h2 className="text-3xl font-semibold text-gray-800">About</h2>
            <div className="mt-10 container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                <CardModule info={cardExperiences} className='col-span-1' />
                <CardModule info={savingTime} className='col-span-1' />
                <CardModule info={effective} className='col-span-1' />
                <CardModule info={optimal} className='col-span-1' />
            </div>
        </div>
    )
}

export default AboutExp