import { useState } from 'react';
import './App.css';

function App() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [allPosts, setAllPosts] = useState([
        {
            id: 1,
            title: "anak toktok",
            body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam non veniam voluptates voluptatum laudantium eaque nesciunt ea accusantium tempore nihil.",
            tags: ["fyp", "viral"]

        },
        {
            id: 2,
            title: "anak mama",
            body:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt aliquid doloremque dolore eaque maiores dignissimos molestiae voluptatum. Quisquam!",
            tags: ["viral", "hot"]
        },
        {
            id: 3,
            title: "anak siapa ?",
            body:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt aliquid doloremque dolore eaque maiores dignissimos molestiae voluptatum. Quisquam!",
            tags: ["viral", "hilang"]
        }
    ]);
    
    return (
        <div className="w-full">
            <div className="uppercase font-bold text-xl">title</div>
            {allPosts.length > 0 && allPosts.map((post, idx) => {
                const { id, title, body, tags } = post;
                return (
                    <div className="card">
                        <section key={idx}>
                            <h3>{title}</h3>
                            <hr className="new1"></hr>
                            <p>{body}</p>
                            <div>
                                {tags.length === 0 ? null :
                                    tags.map(tag => (
                                        <a href="!#" className="text-secondary-100">{`#${tag} `}</a>
                                    ))
                                }
                            </div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </section>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
