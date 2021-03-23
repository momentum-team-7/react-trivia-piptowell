export default function CategoryList({ categories, setSelectedCategory }) {
    return (
        <div>
            <h2>List of Categories</h2>
    <ul>
        {categories.map((category, idx) => (
        <li key={idx}><button className="pa0 bw0 bg-white blue pointer underline-hover"
        onClick={() => setSelectedCategory(category)}
        >
            {category.name}
                </button>
            </li>
        ))}
    </ul>
        </div>
    )
}
