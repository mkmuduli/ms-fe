import { twMerge as tm } from 'tailwind-merge'

const Tab = ({ items, activeIndex }) => {
    return (
        <div className="mb-4 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                {
                    items.map((eachItem, idx) => {
                        return (
                            <li className="mr-2" key={eachItem.id || idx}>
                                <button className={
                                    tm(
                                        "inline-block p-4 rounded-t-lg hover:text-primary-600 hover:border-primary-300",
                                        activeIndex === idx && 'border-b-2 text-primary-600 border-primary-300'
                                    )
                                }
                                    type="button">
                                    {eachItem.name}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}

export default Tab;