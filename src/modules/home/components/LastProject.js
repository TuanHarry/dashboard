import CardProject from "../../../components/Base/CardProject"

const LastProject = () => {

    const sharkLand = {
        imageSrc: 'https://sharkland.net/wp-content/uploads/2023/10/Sharkland-3-views.png',
        imageAlt: 'Shark Land',
        title: 'SharkLand Proptech',
        description : 'Project proptech from Viet Nam has more tools analytics for investor'
    }

    const sharkAgent = {
        imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/d3/39/a6/d339a650-3402-95b2-2df9-16bcce31b98f/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png',
        imageAlt: 'Shark Agent',
        title: 'Shark Agent',
        description: 'Project listing property of agent from Keller William from Viet Nam'
    }

    const missionMap = {
        imageSrc: 'https://missionmap.io/wp-content/uploads/2023/07/Map-MissionMap.png',
        imageAlt: 'Mission Map',
        title: 'Mission Map',
        description: 'Project Web 3 do to earn'
    }

    const optimal = {
        imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/fd/b1/51/fdb151a5-e2b2-5e15-5d4d-797d47c7d14f/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
        imageAlt: 'Sharkland app',
        title: 'Shark Land App',
        description: 'SharkLank application write native.'  }

    return (
        <div className="flex flex-col w-full items-center py-10 bg-gradient-to-br from-[#FDFEED] to-[#FFF]">
            <h2 className="text-3xl font-semibold text-gray-800">Last Projects</h2>
            <div className="mt-10 container grid grid-cols-1 lg:grid-cols-4 gap-8 px-4">
                <CardProject info={sharkLand} className='col-span-1' />
                <CardProject info={sharkAgent} className='col-span-1' />
                <CardProject info={missionMap} className='col-span-1' />
                <CardProject info={optimal} className='col-span-1' />
            </div>
        </div>
    )
}

export default LastProject